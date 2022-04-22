import pkg from 'mongoose'

const {Schema, model, Types} = pkg

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    nick: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    money: {type: Number, default: 0},
    twosomes: [{ type: Types.ObjectId, ref: 'Twosome' }]
})

export default model('User', schema)