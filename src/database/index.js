import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import aluno from '../models/aluno';
import user from '../models/user';

const models = [aluno, user];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
