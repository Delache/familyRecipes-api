import { RecipeService } from './../services/recipe.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';
import express from 'express';
import multer from 'multer';
import { env } from '../core/environnement';
const app = express();

// Le controller vous servira à réceptionner les requêtes associées aux Artists
// @param app l'application express

// tslint:disable-next-line: no-shadowed-variable
export const RecipeController = (app: Application) => {
  let router = Router();
  const service = new RecipeService();

  const storage = multer.diskStorage({
    destination: (req, file, cb ) => {
      cb(null, env.uploadRecipeFolder + '/');
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

  router.post('/file', upload.single('file'), async (req, res, next) => {
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

  router.get('/search/:word', async (req, res) => {
    const word = req.params.word;
    try {
        const result = await service.getBySearch(word);
        res.send(result);
    } catch (error) {
        res.status(404).send('La recherche n\'a rien donné');
    }
});

  router = commonController(app, service, router);
  app.use('/recipes', router);
}
;
