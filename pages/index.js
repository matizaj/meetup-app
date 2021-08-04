import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from 'mongodb';
import Head from 'next/head';


const MEETUPS=[
    {
        id: 'm1',
        image:'https://upload.wikimedia.org/wikipedia/commons/f/fa/Wiki_training_0226.jpg',
        title:'meetup-1',
        address:'LA',
        descripction: 'this is a first meetup'
    },
    {
        id: 'm2',
        image:'https://upload.wikimedia.org/wikipedia/commons/c/c3/Lady_Liberty_under_a_blue_sky_%28cropped%29_%28cropped%29.jpg',
        title:'meetup-2',
        address:'NY',
        descripction: 'this is a second meetup'
    },
    {
        id: 'm3',
        image:'https://upload.wikimedia.org/wikipedia/commons/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg',
        title:'meetup-3',
        address:'SF',
        descripction: 'this is a third meetup'
    },
]

function HomePage(props){
    // const [loadedMeetup, setLoadedMeetup]=useState([]);
    // useEffect(()=>{
    //     setLoadedMeetup(MEETUPS)
    // }, []);
    return (
        <>
        <Head>
            <title>Next JS Meetup WebPage</title>
            <meta name='description' content='NextJS Page for Meetups!'/>
        </Head>
            <MeetupList meetups={props.meetups}/>;
        </>
    )
}

export async function getStaticProps(){
    // fetch data from api
    const connectionString = 'mongodb+srv://nextjs-user:Julka018!@cluster0.i9vay.mongodb.net/meetups?retryWrites=true&w=majority';
    const client = await MongoClient.connect(connectionString);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: meetups.map(m=>({
                title: m.title,
                address: m.address,
                image: m.image,
                id: m._id.toString()
            }))
        },
        revalidate:3600
    };
}

// export async function getServerSideProps(){
//     return {
//             props: {
//                 meetups: MEETUPS
//             }
//         };
// }


export default HomePage;