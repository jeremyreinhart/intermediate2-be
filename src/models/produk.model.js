const database = require("../config/database")

const create = async (produkData) => {
    const {nama_kelas, description, harga} = produkData;

    const [result] = await database.execute(`
        INSERT INTO 
        produk(nama_kelas, description, harga)
        VALUES (?, ?, ?)`
    ,   [nama_kelas, description, harga])

    return result.insertId;
};

const getAll = async () => {
    const [rows] = await database.execute(
        `SELECT nama_kelas, description, harga FROM produk`
    );

    return rows;
}

const getById = async (kelas_id) => {
    const [rows] = await database.execute(
        `
        SELECT 
        nama_kelas, description, harga 
        FROM produk
        WHERE kelas_id = ? 
        `
    , [kelas_id]
);

return rows [0];
}

const deleteById = async (kelas_id) => {
    const [result] = await database.execute(
    `
    DELETE FROM produk WHERE kelas_id = ? 
    `
    , [kelas_id]
);
 return result.affectedRows > 0;
}

const updateById = async (kelas_id, updateData) => {
    const { nama_kelas, description, harga } = updateData;
    
    const result = await database.execute(
    `
    UPDATE produk
    SET nama_kelas = ?, description = ?, harga = ? 
    WHERE kelas_id = ?
    `
    , [nama_kelas, description, harga , kelas_id]
)
return result.affectedRows;
};

const produkModel = {
    create,
    getAll,
    getById,
    deleteById,
    updateById
} 

module.exports = produkModel;