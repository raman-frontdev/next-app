import Link from 'next/link'

function Eventitem(props){
    const {title, image, date, location, id} = props;

    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattingAddress = location.replace(', ', '\n');
    return(
        <li>
            <img src={'/'+image} class="img-responsive" alt="Image" />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{readableDate}</time>
                    </div>
                    <div>
                        <address>{formattingAddress}</address>
                    </div>
                </div>
                <div>
                    <Link href="/">Explore Event</Link>
                </div>
            </div>

        </li>
    )
}

export default Eventitem