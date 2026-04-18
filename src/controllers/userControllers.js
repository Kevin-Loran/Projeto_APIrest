import user from '../models/user';

class UserController {
  async store(req, res) {
    try {
      const novouser = await user.create(req.body);
      res.json({ novouser });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
