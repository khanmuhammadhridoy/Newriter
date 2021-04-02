import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';


const Home = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return (
        <div className="row">
            {
                events.map(event =><Book event={event}></Book>)
            }
        </div>
    );
};

export default Home;