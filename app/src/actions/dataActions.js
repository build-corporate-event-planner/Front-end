// we'll need axios
import axios from 'axios'

// Data action types
export const GET_START = 'GET_START' // fetching data
export const GET_BY_ID = 'GET_BY_ID'// request fails 
export const GET_SUCCESS = 'GET_SUCCESS' // request successful
export const GET_FAILED = 'GET_FAILED'// request fails 

// action creator to fetch Data
export function getData(baseUrl) {
	return (dispatch) => { 
		// enter the "loading" state
		dispatch({ type: GET_START })
		
		const headers = {
			// authorization: localStorage.getItem('token'),
			//"Content-Type": "application/x-www-form-urlencoded",
			//Authorization: `Basic ${window.btoa("lambda-client:lambda-secret")}`
			//‘Bearer ${token}’
			// "access_token": localStorage.getItem('token'),
			// "token_type":"bearer",
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
		axios.get(`${baseUrl}/events/all`, { headers })
			.then((res) => {
				dispatch({ type: GET_SUCCESS, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: GET_FAILED, payload: err })
			})
	}
}