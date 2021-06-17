import { useRouter } from 'next/router'

function Eventsfilter(){

    const router = useRouter();

    console.log(router.query);

    return(
        <h1>This is Flitered Page</h1>
    )
}
export default Eventsfilter