import mongoose from 'mongoose';
import { MONGO_URL } from '@/config';

const connectToDatabase = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};


export default connectToDatabase;
