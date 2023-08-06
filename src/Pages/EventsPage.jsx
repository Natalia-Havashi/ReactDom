import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { fetchEvents } from "services/eventsApi";
const EventsPage = () => {
  const location = useLocation()
    const [events, setEvents] = useState([]);
    useEffect (() => {
 fetchEvents()
 .then(res => setEvents(res))
 .catch(error => console.log(error));
    },[])
    return (
      <section>
     <ul>
        {events.length !== 0 && events.length !== 0 && events.map(({id,name}) => 
        <li key={id}>
            <Link state={{from: location}} to={`${id}`}>{name}</Link>
        </li> )}
     </ul>
     <Outlet />
      
      </section>
    )


}
export default EventsPage;