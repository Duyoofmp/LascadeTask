const csv = require('csv-parser');
const { Readable } = require('stream');
const CsvData = require('../models/Csv');
const redisClient = require('./redisClient');

const parseCSV = async (buffer) => {
    const results = [];
    const stream = Readable.from(buffer.toString());

    return new Promise((resolve, reject) => {
        stream.pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', async () => {
                for (const row of results) {
                    const csvData = new CsvData({ data: row });
                    await csvData.save();
                }
                resolve(results);
            })
            .on('error', (error) => reject(error));
    });
};

module.exports = parseCSV;
