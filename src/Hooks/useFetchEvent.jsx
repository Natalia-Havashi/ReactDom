import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchEventById } from "services/eventsApi"; 

const useFetchEvent = () => {
    const {id} = useParams();
    const [event, setEvent] = useState('');
    useEffect(() => {
        fetchEventById(id).then(setEvent).catch(console.log)
    }, [id])
    return event;
}

export default useFetchEvent;
