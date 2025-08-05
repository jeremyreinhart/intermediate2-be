const produkServices = require("../services/produk.services")

const create = async (req, res) => {
    try{
        const {nama_kelas, description, harga} = req.body;
        
        if(!nama_kelas || !description || !harga) {
            return res
            .status(400)
            .json({success: false, 
            message: "nama_kelas, description and harga are required"
        });
        }

        const produkData = req.body;

        const produkId = await produkServices.create(produkData);
        produkData.produkId = produkId;

        return res.status(201).json({success: true, data: produkData})
    }
        catch (error) {
            res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message});
}
};

const getProdukById = async (req, res) => {
    try{
        const {kelas_id} = req.params;
        const produk = await produkServices.getById(kelas_id);
        
        if(!produk) {
            return res
            .status(400)
            .json({success: false, 
            message: "produk not found"
        });
        }
        return res.status(200).json({ success: true, data: produk });
    }
        catch (error) {
            res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message});
}
};

const getAll = async (req, res) => {
    try{
        const produk = await produkServices.getAll();

        return res.status(200).json({data : produk, success: true})
    }
     catch (error) {
            res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message});
}
};

const deleteById = async (req, res) => {
    try{
        const {kelas_id} = req.params
        const produk = await produkServices.deleteById(kelas_id)

        if(!produk) {
            return res
            .status(400)
            .json({success: false, 
            message: "produk not found"
        });
        }
        return res.status(200).json({ success: true, message: "Product Deleted" });
    }
    catch (error) {
            res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message});
}
};

const updateById = async (req, res) => {
    try{
        const {kelas_id} = req.params;
        const {nama_kelas, description, harga} = req.body;
        
        if (
        typeof nama_kelas === 'undefined' ||
        typeof description === 'undefined' ||
        typeof harga === 'undefined'
        ) {
            return res
            .status(400)
            .json({success: false, 
            message: "nama_kelas, description and harga are required"
        });
        }

        const updateData = req.body;

        const updateId = await produkServices.updateById(kelas_id, updateData);
        
        if (!updateId === 0) {
        return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

        return res.status(200).json({success: true, message:"Data updated successfully", data: updateData, })
    }
        catch (error) {
            res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message});
}
};

const produkController = {
    create,
    getProdukById,
    getAll,
    deleteById,
    updateById,
}

module.exports = produkController;