// we'll need axios
import axios from 'axios'

// Data action types
export const GET_START = 'GET_START' // fetching data
export const GET_SUCCESS = 'GET_SUCCESS' // request successful
export const GET_FAILED = 'GET_FAILED'// request fails 
export const GET_FRIEND = 'GET_FRIEND' // request successful for friend

// action creator to fetch Data
export function getData() {
	return (dispatch) => { 
		// enter the "loading" state
		dispatch({ type: GET_START })
		
		const headers = {
			authorization: localStorage.getItem('token'),
		}
		axios.get('http://localhost:5000/api/friends/', { headers })
			.then((res) => {
				dispatch({ type: GET_SUCCESS, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: GET_FAILED, payload: err })
			})
	}
}

// action creator to fetch Data for friend
export function getFriend(id) {
	return (dispatch) => { 
		dispatch({ type: GET_FRIEND })
		
		const headers = {
			authorization: localStorage.getItem('token'),
		}
		axios.get(`http://localhost:5000/api/friends/${id}`, { headers })
			.then((res) => {
				dispatch({ type: GET_FRIEND, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: GET_FAILED, payload: err })
			})
	}
}

// action creator to update Data
export function putData(id, payload) {
	return (dispatch) => { 
		// enter the "loading" state
		dispatch({ type: GET_START })
		
		const headers = {
			authorization: localStorage.getItem('token'),
		}
		axios.put(`http://localhost:5000/friends/${id}`, { headers }, payload)
			.then((res) => {
				dispatch({ type: GET_FRIEND, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: GET_FAILED, payload: err })
			})
	}
}