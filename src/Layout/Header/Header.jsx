import React from 'react'
import { BiChevronsDown } from 'react-icons/bi'
import { IoMdNotifications } from 'react-icons/io'
import noUser from '../../assets/noUser.png'
import HeaderSearch from './HeaderSearch'
import SwitchLang from './SwitchLang/SwitchLang'
import {Avatar, AvatarBadge, AvatarGroup, Icon} from '@chakra-ui/react'
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverFooter,
	PopoverArrow,
	PopoverCloseButton,
	PopoverAnchor,
	Button
} from '@chakra-ui/react'
import {AiFillSetting}  from 'react-icons/ai'
import {BsFillPaletteFill}  from 'react-icons/bs'
import {FiLogOut}  from 'react-icons/fi'
import {MdLanguage}  from 'react-icons/md'
import {useDispatch} from "react-redux";
import {logOutUser} from "../../redux/reducers/user";
import {useNavigate} from "react-router-dom";
const Header = () => {
	const dispatch = useDispatch()
	const nav = useNavigate()
	return (
		<header className='header'>
			<div className='container'>
				<nav className='header__nav'>
					<div className='header__left'>
						<h1 onClick={() => nav('/')} className='header__title'>IT-RUN web</h1>
						<HeaderSearch />
					</div>
					<div className='header__right'>
						<span className='header__notif'>
							<IoMdNotifications />
						</span>

							<Popover placement={'bottom-end'}>
							<PopoverTrigger>
								<Button className='header__user'>
									<Avatar  name='Oshigaki Kisame' src='' />
									<span className='header__user-icon'>
								<BiChevronsDown />
							</span>
								</Button>
							</PopoverTrigger>
							<PopoverContent  borderRadius={'5px'} bg={'#222222'} >
								<PopoverCloseButton top={'2px'} right={'2px'} border={'none'} position={'absolute'} bg={'none'} />
								<PopoverArrow bg={'black'}/>
								<div className="header__popover">
									<div className="header__popover__top">
										<Avatar className='header__popover__img'  name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
										<div className="">
											<h2 className={'header__popover__name'}>Yunuza Ruslan</h2>
											<p className={'header__popover__number'}>+996550525944</p>
										</div>
									</div>
									<ul className="header__popover__list">
										<li className={'header__popover__line'}>
											<Icon as={AiFillSetting}/>
												<span className={'header__popover__text'}>setting</span>
										</li>
										<li className={'header__popover__line'}>
											<Icon as={MdLanguage}/>
											<SwitchLang />
										</li>
										<li className={'header__popover__line'}>
											<Icon as={BsFillPaletteFill}/>
											<span className={'header__popover__text'}>palette</span>
										</li>
										<li className={'header__popover__line'}>
											<Icon as={FiLogOut}/>
											<span onClick={() => dispatch(logOutUser())} className={'header__popover__text'}>log out</span>
										</li>
									</ul>
								</div>
							</PopoverContent>
						</Popover>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
