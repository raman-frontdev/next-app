import Eventitem from './event-item'
import classes from '../../styles/event-list.module.css'

function Eventlist(props){
    const {featureditems} = props;

    return(
        <ul className={classes.list}>
            {featureditems.map((event) => (
                <Eventitem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    image={event.image} 
                />
            ))}
        </ul>
    )
}
export default Eventlist