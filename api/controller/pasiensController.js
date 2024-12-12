const { pasien, users } = require("../../models");
const pasienValidations = require("../../validation/pasiens");

const getPasiens = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    const countPasien = await pasien.count();

    const totalPage = Math.ceil(countPasien / limit);

    const data = await pasien.findAll({
      include: [
        {
          model: users,
          as: "user",
          attributes: ["id", "username"],
        },
      ],
      limit: limit,
      offset: offset,
    });
    const result = data.map((pasien) => ({
      status: "success",
      data: {
        id: pasien.id,
        nama: pasien.nama,
        alamat: pasien.alamat,
        jenis_kelamin: pasien.jenis_kelamin,
        umur: pasien.umur,
        user: {
          id: pasien.user.id,
          username: pasien.user.username,
        },
      },
    }));
    res.status(200).json({
      data: result,
      meta: {
        page: parseInt(page),
        totalPage: totalPage,
        totalData: countPasien,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPasienById = async (req, res) => {
  try {
    const data = await pasien.findByPk(req.params.id, {
      include: [
        {
          model: users,
          as: "user",
          attributes: ["id", "username"],
        },
      ],
    });

    if (!data) {
      return res
        .status(404)
        .json({ status: "error", message: "Pasien not found" });
    }

    const result = {
      status: "success",
      data: {
        id: data.id,
        nama: data.nama,
        alamat: data.alamat,
        jenis_kelamin: data.jenis_kelamin,
        umur: data.umur,
        user: {
          id: data.user.id,
          username: data.user.username,
        },
      },
    };

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPasien = async (req, res) => {
  try {
    const { errors } = pasienValidations.validateCreatePayload(req.body);
    if (errors) {
      return res.status(400).json({ status:"error",errors });
    }

    const { nama, alamat, jenis_kelamin, umur, user_id } = req.body;
    const cekUserId = await pasien.findOne({ where: { user_id } });
    if (cekUserId) {
      return res
        .status(404)
        .json({ status: "error", message: "Anda Sudah Mendaftar, Pendaftaran Hanya DiLakukan 1 Kali" });
    }
    const newPasien = await pasien.create({
      nama,
      alamat,
      jenis_kelamin,
      umur,
      user_id,
    });

    res.status(201).json({
      status: "201",  
      data: newPasien,
      message: "Create Data Successfully",
    });
  } catch (err) {
    res.status(400).json({ status: "error", message: err.message });
  }
};

const updatePasien = async (req, res) => {
  try {
    const { errors } = pasienValidations.validateUpdatePayload(req.body);
    if (errors) {
      return res.status(400).json({ errors });
    }

    const { id } = req.params;
    const { nama, alamat, jenis_kelamin, umur, user_id } = req.body;

    const [updated] = await pasien.update(
      {
        nama,
        alamat,
        jenis_kelamin,
        umur,
        user_id,
      },
      {
        where: { id },
      }
    );

    if (updated === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "Pasien not found" });
    }

    const updatedPasien = await pasien.findByPk(id);

    // Respon sukses
    res.status(200).json({
      status: "success",
      data: {
        nama: updatedPasien.nama,
        alamat: updatedPasien.alamat,
        jenis_kelamin: updatedPasien.jenis_kelamin,
        umur: updatedPasien.umur,
        user: {
          id: updatedPasien.user_id,
        },
      },
      message: "Update Data Successfully",
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const deletePasien = async (req, res) => {
  try {
    const deletedPasien = await pasien.findByPk(req.params.id);

    if (!deletedPasien) {
      return res
        .status(404)
        .json({ status: "error", message: "Pasien not found" });
    }

    await pasien.destroy({ where: { id: req.params.id } });

    res
      .status(200)
      .json({ status: "success", message: "Pasien deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = {
  getPasiens,
  getPasienById,
  createPasien,
  updatePasien,
  deletePasien,
};
