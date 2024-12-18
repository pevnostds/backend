const { pasiens, rekam_medis } = require("../../models");
const rekamMedisValidations = require("../../validation/rekam-medis");

const getRekamMedis = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    const countData = await rekam_medis.count();

    const totalPage = Math.ceil(countData / limit);

    const data = await rekam_medis.findAll({
      include: [
        {
          model: pasiens,
          as: "pasiens",
          attributes: ["id", "nama"],
        },
      ],
      limit: limit,
      offset: offset,
    });
    const result = data.map((data) => ({
      status: "success",
      data: {
        id: data.id,
        pasien_id: {
          id: data?.pasiens?.id || "",
          nama: data?.pasiens?.nama || "",
        },

        tanggal: data.tanggal,
        keluhan: data.keluhan,
        diagnosis: data.diagnosis,
      },
    }));
    res.status(200).json({
      data: result,
      meta: {
        page: parseInt(page),
        totalPage: totalPage,
        totalData: countData,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRekamMedisByUser = async (req, res) => {
  try {
    const data = await pasiens.findOne({ where: { user_id: req.params.id } });
    if (!data) {
      return res
        .status(404)
        .json({ status: "error", message: "Data not found" });
    }
    const result = {
      status: "success",
      data: {
        id: data.id,
      },
    };

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRekamMedisById = async (req, res) => {
  try {
    const data = await rekam_medis.findAll({
      where: { pasien_id: req.params.id },
      include: [
        {
          model: pasiens,
          as: "pasiens",
          attributes: ["id", "nama"],
        },
      ],
    });

    if (data.length === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "Data not found" });
    }

    const result = {
      status: "success",
      data,
    };

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRekamMedis = async (req, res) => {
  try {
    const { errors } = rekamMedisValidations.validateCreatePayload(req.body);
    if (errors) {
      return res.status(400).json({ status: "error", errors });
    }

    const { pasien_id, tanggal, keluhan, diagnosis } = req.body;

    const newData = await rekam_medis.create({
      pasien_id,
      tanggal,
      keluhan,
      diagnosis,
    });

    res.status(201).json({
      status: "success",
      data: newData,
      message: "Create Data Successfully",
    });
  } catch (err) {
    res.status(400).json({ status: "error", message: err.message });
  }
};

const updateRekamMedis = async (req, res) => {
  try {
    const { errors } = rekamMedisValidations.validateUpdatePayload(req.body);
    if (errors) {
      return res.status(400).json({ errors });
    }

    const { id } = req.params;
    const { pasien_id, tanggal, keluhan, diagnosis } = req.body;

    const [updated] = await rekam_medis.update(
      {
        pasien_id,
        tanggal,
        keluhan,
        diagnosis,
      },
      {
        where: { id },
      }
    );

    if (updated === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "Data not found" });
    }

    const updateData = await rekam_medis.findByPk(id);

    // Respon sukses
    res.status(200).json({
      status: "success",
      data: updateData,
      message: "Update Data Successfully",
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const deleteRekamMedis = async (req, res) => {
  try {
    const deleteData = await rekam_medis.findByPk(req.params.id);

    if (!deleteData) {
      return res
        .status(404)
        .json({ status: "error", message: "Data not found" });
    }

    await rekam_medis.destroy({ where: { id: req.params.id } });

    res
      .status(200)
      .json({ status: "success", message: "Data deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = {
  getRekamMedis,
  getRekamMedisById,
  createRekamMedis,
  updateRekamMedis,
  deleteRekamMedis,
  getRekamMedisByUser,
};
