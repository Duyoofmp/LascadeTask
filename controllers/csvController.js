const parseCSV = require('../utils/csvParser');
const redisClient = require('../utils/redisClient');

const uploadCSV = async (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    try {
        const buffer = file.buffer;
        await redisClient.lpush('csvQueue', buffer);

        res.status(200).json({ message: 'File uploaded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'File upload failed', error });
    }
};

const processCSVQueue = async () => {
    while (true) {
        const buffer = await redisClient.rpop('csvQueue');

        if (buffer) {
            try {
                await parseCSV(buffer);
            } catch (error) {
                console.error('CSV processing failed:', error);
            }
        } else {
            await new Promise((resolve) => setTimeout(resolve, 5000));
        }
    }
};

processCSVQueue().catch(console.error);

module.exports = { uploadCSV };
