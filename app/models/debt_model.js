module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            //data field pencatat disi dengan id pencatat/user
            pencatat: { 
                type: String,
                required: [true, 'Writer is required'],
            },
            pemberi: {
                type: String,
                required: [true, 'Pemberi hutang is required']
            },
            jumlah: {
                type: mongoose.Types.Decimal128,
                required: [true, 'Jumlah hutang is required'],
            },
            tgl_hutang: {
                type: Date,
                required: [true, 'tanggal berhutang is required']
            },
            lunas_pada: {
                type: Date,
                default: null
            },
            deadline: {
                type: Date
            },
            catatan: {
                type: String
            },
            status: {
                type: String,
                required: [true, 'Status is required']
            },
            //default tanggal kapan dibuat
            create_on: { 
                type: Date,
                required: true,
                default: Date.now
            }
        }
    )
    return mongoose.model('debt', schema);
}