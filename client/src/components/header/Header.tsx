import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../../images/logo.png'

interface STATE {
    home: boolean
    past: boolean
}

const DEFAULT_STATE: STATE = { 
    home: false,
    past: false
}

const Header = () => {
    let location = useLocation();
    console.log(location.pathname === '/m')

    const [state, setState] = useState<STATE>({...DEFAULT_STATE})

    // const _allCustomers = () => navigate('/');
    // const _addCustomer = () => navigate('/customers/new/detail')

    useEffect(() => {
       if (location.pathname === '/') {
            setState(prevState => ({ ...prevState, home: true }))
            setState(prevState => ({ ...prevState, past: false }))
       } else {
            setState(prevState => ({ ...prevState, past: true }))
            setState(prevState => ({ ...prevState, home: false }))
       }
    }, [location.pathname])

    console.log('home =>', state.home)
    console.log('past =>', state.past)


    return (
        <header className="flex drop-shadow-2xl fixed w-full flex-row justify-between items-center pt-9 pb-9 pl-5 pr-5 bg-SOLINK_NYANZA h-10 shadow">
            <div className="block">
                <Link to='/'>
                    <img src={logo} alt="logo" className="w-40" />
                </Link>
            </div>

            <div className="block">

                <ul className="flex flex-row list-none">
                    <li className="mr-6">
                        <Link to='/' className={`${state.home && 'bg-SOLINK_GREEN text-SOLINK_NYANZA ease-in duration-300'} capitalize no-underline ease-in duration-300 inline-block px-6 py-2.5 text-SOLINK_BLUE hover:text-SOLINK_NYANZA font-medium text-sm leading-tight rounded hover:bg-SOLINK_GREEN focus:text-SOLINK_NYANZA  focus:outline-none focus:ring-0 active:bg-SOLINK_GREEN active:text-SOLINK_NYANZA transition duration-300 ease-in-out`}>
                            home
                        </Link>
                    </li>
                    <li className="mr-6 ">
                        <Link to='/pastLaunches' className={`${state.past ? 'bg-SOLINK_GREEN text-SOLINK_NYANZA ease-in duration-300' : ''} capitalize no-underline ease-in duration-300 inline-block px-6 py-2.5 text-SOLINK_BLUE hover:text-SOLINK_NYANZA font-medium text-sm leading-tight rounded hover:bg-SOLINK_GREEN focus:text-SOLINK_NYANZA  focus:outline-none focus:ring-0 active:bg-SOLINK_GREEN active:text-SOLINK_NYANZA transition duration-300 ease-in-out`}>
                            past launches
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header