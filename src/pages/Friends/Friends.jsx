import React, {useEffect, useState} from 'react';
import AsideBaRMain from "../../components/asideBar/AsideBaRMain";
import {BiSearch} from 'react-icons/bi'
import {Icon} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {changeUser, findAllUser} from "../../redux/reducers/findUser";
import {AiOutlineUserAdd} from "react-icons/ai";
import axios from "../../utils/axios";
import { useToast } from '@chakra-ui/react'
import {fillUser} from "../../redux/reducers/user";
const Friends = () => {
    const dispatch = useDispatch()

    const {user} = useSelector(store => store.user)
    const {data,filter} = useSelector(store => store.findUser)

    const [search,setSearch] = useState(filter.search || '')

    const toast = useToast()

    useEffect(() => {
        dispatch(findAllUser({login: user.login,search}))
        dispatch(changeUser(search))
    },[search])


    const sendRequest = (id) => {
        axios.patch(`/request/${user._id}`,{request: id})
            .then((res) => {
                toast({
                    title: 'request is sent',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
                dispatch(fillUser(res.data))
            })
            .catch(() => toast({
            title: 'error',
            status: 'error',
            duration: 5000,
            isClosable: true,
        }))

    }

    return (
        <section className={'friends'}>
            <div className="container">
                <div className="friends__row">
                    <AsideBaRMain/>
                    <div className="friends__content">
                        <h1 className="friends__title">
                            Find Friends
                        </h1>
                        <label className={'friends__label'}>
                            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={'search'} type="text" className="friends__input"/>
                            <span className={'friends__search'}>
                                <Icon as={BiSearch}/>
                            </span>
                        </label>
                        <div className="friends__users">
                            {
                                data.map(item => (
                                    <div key={item._id} className="friends__card">
                                        <img  style={{borderRadius: "5px"}} width={'100%'} height={'200px'} src={`${process.env.REACT_APP_URL}${item.image}`} alt=""/>
                                        <div className="friends__users__cont">
                                            <div className="friends__users__cont2">
                                                <h2 className={'friends__users__cont2__title'}>{item.name} {item.surname}</h2>
                                                <p className={'friends__users__cont2__subtitle'}>no mutual friend</p>
                                            </div>
                                            {
                                                user.requests.includes(item._id) ? '' :
                                                    <button style={{cursor:'pointer'}} onClick={() => sendRequest(item._id)}>
                                                        <Icon fontSize={'24px'} as={AiOutlineUserAdd}/>
                                                    </button>
                                            }

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <aside className="friends__filtration">

                    </aside>
                </div>

            </div>
        </section>
    );
};

export default Friends;