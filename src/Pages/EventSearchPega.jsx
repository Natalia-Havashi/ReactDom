import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchEventsByName } from 'services/eventsApi';
const EventSearchPega = () => {
  const [event, setEvent] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const eventName = searchParams.get('eventName'); //квері параметер

  const location = useLocation();

  useEffect(() => {
    if (eventName === '' || eventName === null) {
      return;
    }

    fetchEventsByName(eventName).then(setEvent).catch(console.log);
  }, [eventName]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ eventName: e.target.elements.eventName.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventName" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {event && event.map(({id,name}) => 
            <li key={id}>
                <Link state={{from: location}} to={`${id}`}>{name}</Link>
            </li>)}
      </ul>
<Outlet />
    </>
  );
};
export default EventSearchPega;
