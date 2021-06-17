import Eventitem from './event-item'

function Eventlist(props){
    const {items} = props;

    return(
        <ul>
            {items.map(event => <Eventitem />)}
        </ul>
    )
}
export default Eventlist