import MeetUpDetail from '../../../components/meetups/MeetUpDetail';
import {MongoClient, ObjectId} from 'mongodb';

function MeetUpsDetail(props){
    return (
        <MeetUpDetail meetup={props.meetupData}/>
    )
}

export async function getStaticProps(context){
    const meetupId = context.params.meetId;
    const connectionString = 'mongodb+srv://nextjs-user:Julka018!@cluster0.i9vay.mongodb.net/meetups?retryWrites=true&w=majority';
    const client = await MongoClient.connect(connectionString);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                desc: selectedMeetup.description,
                image: selectedMeetup.image
            }
        }
    }
}
export async function getStaticPaths(){
    const connectionString = 'mongodb+srv://nextjs-user:Julka018!@cluster0.i9vay.mongodb.net/meetups?retryWrites=true&w=majority';
    const client = await MongoClient.connect(connectionString);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    client.close();
    return {
        fallback: false,
        paths: meetups.map(m=>({
            params: {
                meetId: m._id.toString()
            }
        }))        
    }
}
export default MeetUpsDetail;