import pkg from 'mongoose'

const {Schema, model} = pkg

const schema = new Schema({
    count: {type: Number, required: true}
})

export default model('Count', schema)