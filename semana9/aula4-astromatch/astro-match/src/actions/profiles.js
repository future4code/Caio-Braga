import axios from 'axios'

const setProfileToSwipe = (profile) => ({
	type: "SET_PROFILE_TO_SWIPE",
	payload: {
		profile,
	}

})

const setPersonToChoose = (profile) => ({
	type: "SET_PERSON_TO_CHOOSE",
	payload: {
		profile,
	}
})

const setProfileToMatch = (profile) => ({
	type: "SET PROFILE_TO_MATCH",
	payload: {
		profile,
	}
})

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caioeduardo/clear')
}

export const fetchProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caioeduardo/person');

	dispatch(setProfileToSwipe(response.data.profile))
}

export const fetchPersonToChoose = () => async (dispatch) => {
	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caioeduardo/choose-person')

	//dispatch(setPersonToChoose(response.data.choice))
}

export const fetchProfileToMatch = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caioeduardo/matches');

	dispatch(setProfileToMatch(response.data.match))
}