const db = require('../models')
const Debt = db.debt

exports.create = (req, res) => {
    Debt.create(req.body).then(() => {
        res.send({ message: 'Berhasi menambahkan data' })
    }).catch((err) => {
        res.status(500).send({ message: err.message })
    })
}

exports.findAll = (req, res) => {
    Debt.find().then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(500).send({ message: err.message })
    })
}

exports.findByID = (req, res) => {
    const id = req.params.id
    Debt.findById(id)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }))
}

exports.update = (req, res) => {
    const id = req.params.id
    Debt.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then((data) => {
        if(!data){
            res.status(404).send({ message: 'Tidak dapat memperbarui data' })
        }else res.send({ message: "Data berhasil diperbarui!"})
    }).catch((err) => {
        res.status(500).send({ message: err.message })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Debt.findByIdAndDelete(id)
    .then((data) => {
        if(!data){
            res.status(404).send({ message: "Data tidak ditemukan" })
        }else res.send({ message: 'Data berhasil dihapus!' })
    }).catch((err) => {
        res.status(500).send({  message: err.message })
    })
}