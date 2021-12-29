import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const ParsedCsv = new Schema({
    date: {
        type: String,
        required: true
    },
    lastUpdate: {
        type: String,
        required: true,
    },
    data: {
        type: String,
        required: true
    }
})

export default mongoose.model('newcsv', ParsedCsv)