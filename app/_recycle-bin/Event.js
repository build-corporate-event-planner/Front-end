import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import actions
// import { getByID } from '../../actions/dataActions';

class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			event: { 
				eventid: 0,
				name: "",
				description: "",
				date: "",
				budget: "",
				companyname: "",
				tasklist: [ // tasks ...
					],
				userList: [ // list of objects each with a user object nested inside at key "user"
					{
						user: { // User object
						}
					}
				]
			}, 
			errMsg: null
			}
  }

	componentDidMount() {
		const id = this.props.match.params.id;
		// call our action
		console.log(this.props.events)
		const eventByID = this.props.events.find(i => String(i.id) === id)
		console.log(eventByID)
		this.setState({ event: eventByID })

		console.log(this.state.event)
		// this.props.getByID(id);
    //     this.setState({ event: this.props.event })
  }
  
  render() {
	const event = this.state.event
	console.log(event)

    return (
		<div className="event">
			{/* <h3>{event.name}</h3> */}

			{/* <Link to={`/update/${event.eventid}`}>Edit</Link> */}
		</div>
    );
  }
}

// const mapStateToProps = (state) => {
// 	return {
// 		event: state.dataReducer.dataByID,
// 		errMsg: state.dataReducer.msg
// 	}
// }

// const mapDispatchToProps = { getByID };

// export default connect(mapStateToProps,mapDispatchToProps)(Event)
export default Event