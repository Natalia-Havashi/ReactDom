import useFetchEvent from "Hooks/useFetchEvent";
import { useLocation, useNavigate } from "react-router-dom";
const EventDetailsPage = () => {
    const event = useFetchEvent();
  const location = useLocation();
  const navigation = useNavigate();
    return (
        <>
        {event && (
            <div>
                <button onClick={() => {
                    navigation(location.state?.from ?? '/', {replace: true})
                }} type="button">Go Back</button>
            <h3>{event.name}</h3>
            <img src={event.images[0].url} alt="" width={300}/>
            <p>{event.classifications[0].genre.name}</p>
            <p>{event.classifications[0].subGenre.name}</p>
            </div>
        )}
        </>
    )
}

export default EventDetailsPage;