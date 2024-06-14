const bcrypt = require('bcrypt')
module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            username: {
                type: String,
                required: [true, 'Username is required'],
            },
            password: {
                type: String,
                required: [true, 'Password is required'],
            },
            nama: {
                type: String,
                required: [true, 'Name is required']
            },
            role: {
                type: String,
                required: true
            }
        }
    )
    schema.pre('save', async function (next) {
        if(!this.isModified('password')){
            return next()
        }
        this.password = await bcrypt.hash(this.password, 10)
        next()
    })

    schema.pre('findOneAndUpdate', async function (next) {
        if(!this._update.password){
            return next();
        }
        this._update.password = await bcrypt.hash(this._update.password, 10);
        next();
    });
    

    return mongoose.model('user', schema);
}
