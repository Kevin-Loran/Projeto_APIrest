import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import aluno from '../models/aluno';

const models = [aluno];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
