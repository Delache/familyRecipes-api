import { UserService } from './../services/user.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';
import multer from 'multer';
import { env } from '../core/environnement';
import jwt = require('express-jwt');

// Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
// @param app l'application express

export const UserController = (app: Application) => {
    const service = new UserService();
    let userRouter = Router();

    if (!process.env.jwtSecret) {
        throw new Error('Secret is not defined');
    }
    userRouter.use(jwt({secret: process.env.jwtSecret}));

    userRouter.get('/me', async (req, res) => {
        (req as any).user.password = 'null';
        const user = await service.getById((req as any).user.id);
        if (!user) {
            res.status(400).send('Aucun utilisateur trouvé pour ce token');
        }
        res.send(user);
    });

    const storage = multer.diskStorage({
        destination: (req, file, cb ) => {
        cb(null, env.uploadAvatarFolder + '/');
        },
        filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg' );
        },
    });
    const upload = multer({ storage,
        fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg)$/)) {
            return cb(new Error('Seul les formats jpg sont acceptés'), false);
        }
        cb(null, true);
        },
    });

    userRouter.post('/file', upload.single('file'), async (req, res, next) => {
        const file = req.file;
        if (!file) {
            const error = new Error('Please upload a file');
            res.sendStatus(400);
            return next(error);
        }
        console.log(req.file);
        // const document = new Document();
        req.body.link = req.file.filename;
        const result = await service.create(req.body);
        res.send(result);
    });

    userRouter = commonController(app, service, userRouter);
    app.use('/users', userRouter);
};
