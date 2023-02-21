import React from 'react'
import { Navigate } from 'react-router-dom'

import {useSelector} from "react-redux";

const NotFound = () => {

	const {user} = useSelector(store => store.user)


		if(!user.login.length) {
			return <Navigate to='/register' />
		}

	return <Navigate to='/' />
}

export default NotFound
