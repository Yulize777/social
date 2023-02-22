import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import '../src/styles/style.scss'
import './utils/i18n'
import PrivateRouting from "./routing/privatRouting";
import AuthRouting from "./routing/authRouting";

function App() {
	const { user } = useSelector(store => store.user)

	return (
		<Suspense fallback={'...Loading'}>
				{
					!user.login.length  ?
						<AuthRouting/>:
						<PrivateRouting/>

				}
		</Suspense>
	)
}

export default App
