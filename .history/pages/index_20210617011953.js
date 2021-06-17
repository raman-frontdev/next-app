import { getFeaturedEvents } from '../dummy-data'
import Eventlist from '../components/events'

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Eventlist item={featuredEvents}/>
    </div>
  )
}
