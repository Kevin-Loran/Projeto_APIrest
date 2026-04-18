import aluno from '../models/aluno';

class Homecontrollrs {
  async index(req, res) {
    const novoAluno = await aluno.create({
      nome: 'kevin',
      sobrenome: 'loran',
      email: 'kevitoloran@gmail.com',
      idade: 122,
      peso: 300,
      altura: 2.50,
    });
    res.json({ novoAluno });
  }
}

export default new Homecontrollrs();
