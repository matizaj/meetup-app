import {MongoClient} from 'mongodb';

async function handler(req, res) {
    if(req.method ==='POST') {
        const data = req.body;
        const {title, image, address, description}=data;
        const connectionString = 'mongodb+srv://nextjs-user:Julka018!@cluster0.i9vay.mongodb.net/meetups?retryWrites=true&w=majority';
        const client = await MongoClient.connect(connectionString);
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message:'meetup inserted!'});
    }
}

export default handler;