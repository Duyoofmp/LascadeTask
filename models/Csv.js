const mongoose = require('mongoose');

const csvDataSchema = mongoose.Schema({
    data: {
        type: Object,
        required: true
    },
}, {
    timestamps: true
});

const CsvData = mongoose.model('CsvData', csvDataSchema);

module.exports = CsvData;
