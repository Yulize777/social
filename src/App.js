import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import '../src/styles/style.scss'
import Layout from './Layout/Layout'
import Friends from './pages/Friends/Friends'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import MyProfile from './pages/MyProfile/MyProfile'
import NotFound from './pages/NotFound/NotFound'
import Register from './pages/Register/Register'
import './utils/i18n'
import PrivateRouting from "./routing/privatRouting";
import AuthRouting from "./routing/authRouting";

function App() {
	const { user } = useSelector(store => store.user)

	return (
		<Suspense fallback={'...Loading'}>
				{
					!user.login.length  ?
						<PrivateRouting/> :
						<AuthRouting/>
				}
		</Suspense>
	)
}

export default App
