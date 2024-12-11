const { rekam_medis,pasien } = require("../../models");

const getLaporan = async (req, res) => {
  const { tanggalawal } = req.params;
  if (!tanggalawal) {
    return res.status(400).json({
      status: "error",
      message: "Tanggal harus diisi.",
    });
  }

  try {
    const data = await rekam_medis.findAll({
      where: {
        tanggal: tanggalawal
      },
      include: [
        {
          model: pasien,
          as: "pasien",
          attributes: ["id", "nama"],
        },
      ],
    }); 

    if (data.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "Data tidak ditemukan untuk rentang tanggal tersebut.",
      });
    }

    res.status(200).json({
      status: "success",
      data: data,
      message: "Data Laporan Successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getLaporan };
