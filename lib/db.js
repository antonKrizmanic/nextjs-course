import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://next-coursejs:cGvmI0GGeLQ3IbWu@cluster0.unzlf.mongodb.net/auth-demo?retryWrites=true&w=majority'
    );

    return client;
}