const { sequelize, Dokter, User, Poliklinik, DataRekamMedis, Makanan, Layanan } = require('../../../models')
module.exports = async (req, res) => {

    try {
        const dokter = Dokter.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.literal('*')), 'total_dokter'],
            ]
        })
        const pasien = User.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.literal('*')), 'total_pasien'],
            ]
        })
        const poliklinik = Poliklinik.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.literal('*')), 'total_poliklinik'],
            ]
        })
        const makanan = Makanan.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.literal('*')), 'total_makanan'],
            ]
        })
        const dataRekam = DataRekamMedis.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.literal('*')), 'total_data_rekam_medis'],
            ]
        })
        const layanan = Layanan.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.literal('*')), 'total_layanan'],
            ]
        })

        let data = await Promise.all([layanan, dataRekam, makanan, dokter, poliklinik, pasien])
         
        data = data.map(e => e[0])  
        flatened = {}
        for (const each of data){
            
            for(const [key,value] of Object.entries(each.dataValues)){
                flatened[key] = value
            }
        }
        return res.status(200).send(flatened)
    } catch (e) {
        console.log(e.message)
        return res.status(500).send({ message: "something happen when fetching dashboard data" })
    }

}