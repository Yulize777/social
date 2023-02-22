import React from 'react'
import { useSelector } from 'react-redux'
import AsideBaRMain from "../../components/asideBar/AsideBaRMain";
import {BsPencil} from 'react-icons/bs'
import {SlLocationPin} from 'react-icons/sl'
import {RiErrorWarningLine} from 'react-icons/ri'
import {BiChevronDown} from 'react-icons/bi'
import {Icon} from "@chakra-ui/react";
import {Image} from '@chakra-ui/react'
const MyProfile = () => {
	const { user } = useSelector(state => state.user)
	return (
		<div className='myProfile'>
			<div className='container'>
				<div className="myProfile__row">
					<AsideBaRMain/>
					<div className="myProfile__wrapper">
						<div className="myProfile__profile">
							<button className="myProfile__profile__btn">
								<Icon as={BsPencil}/>
								change cover
							</button>
						</div>
						<div className="myProfile__profile__end">
							<div className="myProfile__profile__end__cont1">
								<Image width={'144px'} height={'145px'} borderRadius={'50%'} src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
							</div>
							<div className="myProfile__profile__end__cont2">
								<p className="myProfile__profile__end__cont2__name">
									ruslan yunuza
								</p>
								<div className="myProfile__profile__end__local">
									<span className="myProfile__profile__end__local__span">
										<Icon color={'gray'} as={SlLocationPin}/>
										bishkek
									</span>
									<span className="myProfile__profile__end__local__span">
										<Icon as={RiErrorWarningLine}/>
										learn more
									</span>
								</div>
							</div>
							<div className="myProfile__profile__cont">
								<button className="myProfile__profile__cont__edit">edit profile</button>
								<button className="myProfile__profile__cont__edit">
									more
									<Icon as={BiChevronDown}/>
								</button>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyProfile
