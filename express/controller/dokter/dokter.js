const { literal, Op, fn, col, Sequelize } = require("sequelize");
const { Dokter, JadwalPraktik } = require("../../../models");

module.exports = {
  async search(req, res) {
    let pages = parseInt(req.query.pages) || 1;
    let limit = parseInt(req.query.limit) || 10;

    let offset = (pages - 1) * limit;
    const keyword = req.query.keyword.toLowerCase();
    try {
      const dokter = await Dokter.findAll({
        limit,
        offset,
        where: literal(
          `LOWER(nama_depan) LIKE '%${keyword}%' OR LOWER(nama_belakang)LIKE '%${keyword}%'`,
        ),
      });
      return res.status(200).send(dokter);
    } catch (e) {
      console.log(e.message);
      return res
        .status(500)
        .send({ message: "something happen when fetching dokter" });
    }
  },

  async create(req, res) {
    console.log("create dokter inikj");
    const form = req.body;
    try {
      await Dokter.create(form);

      return res.status(200).send({ message: "create dokter successful" });
    } catch (e) {
      console.log(e);
      if (e.name === "SequelizeUniqueConstraintError")
        return res.status(409).send({ message: "email already registered" });
      else
        return res
          .status(500)
          .send({ message: "something happen when creating dokter" });
    }
  },

  async getAll(req, res) {
    const page = parseInt(req.query.pages) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * pageSize;
    try {
      const dokter = await Dokter.findAll({
        offset,
        limit: pageSize,
        include: [
          {
            model: JadwalPraktik,
            as: "JadwalPraktik",
          },
        ],
      });

      return res.status(200).send(dokter);
    } catch (e) {
      console.log(e.message);
      return res
        .status(500)
        .send({ message: "something happen when fetching doctor" });
    }
  },

  async getOne(req, res) {
    const id = req.params.id;
    try {
      const dokter = await Dokter.findOne({
        where: { dokter_id: id },
        include: [
          {
            model: JadwalPraktik,
            as: "JadwalPraktik",
          },
        ],
      });

      return res.status(200).send(dokter);
    } catch (e) {
      return res
        .status(500)
        .send({ message: "Something error when fetchind doctor" });
    }
  },

  async update(req, res) {
    const dateNow = new Date();
    let data = req.body;
    data = { updatedAt: dateNow, ...data };
    const id = req.params.id;
    try {
      const status = await Dokter.update(data, { where: { dokter_id: id } });

      if (!status) return res.status(404).send({ message: "doctor not found" });

      return res.status(200).send({ message: "update succesful" });
    } catch (e) {
      return res
        .status(500)
        .send({ message: "something happen when updating doctor" });
    }
  },

  async deleteOne(req, res) {
    const id = req.params.id;
    try {
      const status = await Dokter.destroy({ where: { dokter_id: id } });

      if (!status)
        return res.status(404).send({ message: "doctor is not found" });

      return res.status(200).send({ message: "delete successful" });
    } catch (e) {
      return res
        .status(500)
        .send({ message: "something happen when deleting" });
    }
  },
};
