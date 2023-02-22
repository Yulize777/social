import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import {useDispatch, useSelector} from "react-redux";
import axios from "../utils/axios";
import {fillUser} from "../redux/reducers/user";

const Layout = () => {
	const {user} = useSelector(store => store.user)
	const dispatch = useDispatch()
	useEffect(() => {
		axios(`/users/${user._id}`)
			.then((res) => dispatch(fillUser(res.data)))
	},[])
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
