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
        type: Schema.Types.Mixed,
        required: true
    }
})

export default mongoose.model('parsedCsv', ParsedCsv)