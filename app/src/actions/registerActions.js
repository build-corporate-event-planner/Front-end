// we'll need axios
import axios from 'axios'

// Login action types
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

// action creator for login
export function login(username, password) {
	return (dispatch) => {
		dispatch({ type: LOGIN_START })
		console.log("Username: " + username) // JohnTheAirGuitarSmith
		console.log("Password: " + password) // NotPassword1234

		const BASE_URL = `https://corporate-event-planner.herokuapp.com`
		const body = `grant_type=password&username=${username}&password=${password}`

		return axios.post(`${BASE_URL}/oauth/token`, body, {
			headers: {
			  "Content-Type": "application/x-www-form-urlencoded",
			  Authorization: `Basic ${window.btoa("lambda-client:lambda-secret")}`
			}})
			.then((res) => {
        console.log(res.data)
				localStorage.setItem('token', res.data.access_token)
				dispatch({ type: LOGIN_SUCCESS })
			})
			.catch((err) => {
				console.log(err.response.data)
				const payload = err.response ? err.response.data : err
				dispatch({ type: LOGIN_FAILED, payload })
			})
	}
}