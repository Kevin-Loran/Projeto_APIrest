class Homecontrollrs {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

export default new Homecontrollrs();
