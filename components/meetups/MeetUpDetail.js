import classes from './MeetUpDetail.module.css';
function MeetUpDetail(props){
    return (
        <section className={classes.detail}>
            <img src={props.meetup.image} alt={props.meetup.alt}/>
            <h1>{props.meetup.title}</h1>
            <address>{props.meetup.address}</address>
            <p>{props.meetup.desc}</p>
        </section>
    )
}

export default MeetUpDetail;