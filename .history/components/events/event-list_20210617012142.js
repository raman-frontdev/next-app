import Eventitem from './event-item'

function Eventlist(props){
    const {item} = props;

    return(
        <ul>
            {items.map((event) => (
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