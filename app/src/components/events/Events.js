import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {

	if (props.isLoading) {
		// return something here to indicate that you are fetching data
		return <div>Loading ... </div>;
	}

	return (
		<div className="friendslist">
            <h2>Friends List</h2>
			{props.events.map((event) => (
				<Link to={`/friends/${event.id}`} className="event-card" key={event.id}>
					<p>{event.name}</p>
				</Link>
			))}
		</div>
	)
}