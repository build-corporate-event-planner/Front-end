import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import actions
import { getByID } from '../../actions/dataActions';

class Event extends React.Component {
  constructor() {
    super()
    this.state = {
		event: { }, 
		errMsg: null
    }
  }

	componentDidMount() {
		const id = this.props.match.params.id;
		// call our action
		this.props.getByID(id);
        this.setState({ event: this.props.event })
  }
  
  render() {
	const event = this.state.event

    return (
		<div className="event">
			<h3>{event.name}</h3>
			<p>{event.age}</p>
			<p>{event.email}</p>

			<Link to={`/update/${event.eventid}`}>Edit</Link>
		</div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		event: state.dataReducer.dataByID,
		errMsg: state.dataReducer.msg
	}
}

const mapDispatchToProps = { getByID };

export default connect(mapStateToProps,mapDispatchToProps)(Event)