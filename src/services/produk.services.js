const produkModel = require("../models/produk.model")

const create = (produkData) => {
    return produkModel.create(produkData);
};

const getAll = () => {
    return produkModel.getAll();
}

const getById = (kelas_id) => {
    return produkModel.getById(kelas_id);
}

const updateById = (kelas_id, updateData) => {
    return produkModel.updateById(kelas_id, updateData);
};

const deleteById = (kelas_id) => {
    return produkModel.deleteById(kelas_id);
};

const produkServices = {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
}

module.exports = produkServices;