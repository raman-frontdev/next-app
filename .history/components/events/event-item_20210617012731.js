import Link from 'next/link'
import classes from '../../styles/event-item.module.css'

function Eventitem(props){
    const {title, image, date, location, id} = props;

    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattingAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;
    return(
        <li className={classes.item}>
            <img src={'/'+image} alt="Image" />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div>
                        <time>{readableDate}</time>
                    </div>
                    <div>
                        <address>{formattingAddress}</address>
                    </div>
                </div>
                <div>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>

        </li>
    )
}

export default Eventitem