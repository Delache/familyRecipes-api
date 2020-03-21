import mysql from 'mysql';
import { DbHandler } from '../repository/db.handler';

export default async () => {

  const connexion = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'baron',
    password: process.env.secret,
    database: 'family_recipes',
    dateStrings: true,
  });

  DbHandler.getInstance(connexion);

  connexion.connect((err) => {
    if (err) { throw err; }
    console.log('Connected!');
  });

  return connexion;
};
