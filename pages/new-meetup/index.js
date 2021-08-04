import NewMeetUpForm from '../../components/meetups/NewMeetupForm';
import {useRouter} from 'next/router';

function NewMeetUp(){
    const router = useRouter();
    async function onAddMeetUpHandler(meetup){
        console.log(meetup);
        const response  = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetup),
            headers: {
                'COntent-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
        router.push('/');
    }
    return (
        <>
            <NewMeetUpForm  onAddMeetup={onAddMeetUpHandler}/>
        </>
    )
}

export default NewMeetUp;