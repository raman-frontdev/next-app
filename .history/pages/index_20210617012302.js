import { getFeaturedEvents } from '../dummy-data'
import Eventlist from '../components/events/event-list'

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents, typeof);
  return (
    <div>
      {/* <Eventlist items={featuredEvents}/> */}
    </div>
  )
}
