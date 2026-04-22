import Aluno from '../models/aluno';

class AlunoControllrs {
  async index(req, res) {
    const aluno = await Aluno.findAll();
    res.json(aluno);
  }
}

export default new AlunoControllrs();
