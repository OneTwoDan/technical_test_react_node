const mongoose = require('mongoose');
const fs = require('fs/promises');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

const loadData = async () => {
    try {
        const filePath = path.join(__dirname, '../../../data.json');
        const data = await fs.readFile(filePath, 'utf8');
        const articles = JSON.parse(data);

        await mongoose.connection.collection('articles').deleteMany();
        console.log('Existing articles deleted');

        await mongoose.connection.collection('articles').insertMany(articles);
        console.log('Articles inserted successfully');
    } catch (err) {
        console.error('Error loading data:', err);
        process.exit(1);
    } finally {
        mongoose.connection.close();
        console.log('MongoDB connection closed');
        process.exit(0);
    }
};

const run = async () => {
    await connectDB();
    await loadData();
};

run();
