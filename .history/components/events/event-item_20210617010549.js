import Link from 'next/link'

function Eventitem(props){
    const {title, image, date, location, id} = props;
    return(
        <li>
            <img src="#" class="img-responsive" alt="Image" />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time></time>
                    </div>
                    <div>
                        <address>Address</address>
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