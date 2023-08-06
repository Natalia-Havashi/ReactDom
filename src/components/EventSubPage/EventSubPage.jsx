import { Link, useLocation } from 'react-router-dom';
import useFetchEvent from '../../Hooks/useFetchEvent';
const EventSubPage = () => {
  const event = useFetchEvent();
  const location = useLocation();
  return (
    <div>
      {event && (
        <>
          <p>{event.name}</p>
          <img src={event.images[0].url} alt="" width={300} />
          <Link state={location.state} to='details'>Details</Link>
        </>
      )}
    </div>
  );
};

export default EventSubPage;
