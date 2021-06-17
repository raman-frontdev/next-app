import { useRouter } from 'next/router'

function Eventsdetails(){
    const router = useRouter();

    console.log(router.query);

    return(
        <h1>Event Details coming soon</h1>
    )
}

export default Eventsdetails