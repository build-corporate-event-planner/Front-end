import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {

	if (props.isLoading) {
		// return something here to indicate that you are fetching data
		return <div>Loading ... </div>;
	}

	return (
		<div className="cards">
            <h2>Events</h2>
			{props.events.map((event) => (
				<Link key={event.eventid} to={`/events/${event.eventid}`} className="card">
					<p>{event.name}</p>
				</Link>
			))}
		</div>
	)
}