import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'

const Header = () => {
    let navigate = useNavigate();

    // const _allCustomers = () => navigate('/');
    // const _addCustomer = () => navigate('/customers/new/detail')

    return (
        <header className="flex flex-row justify-between items-center pt-6 pb-6 pl-5 pr-5 bg-SOLINK_NYANZA h-10 shadow">
            <div className="block">
                <Link to='/'>
                    <img src={logo} alt="logo" className="w-40" />
                </Link>
            </div>

            <div className="block">

                <ul className="flex flex-row list-none">
                    <li className="text-xl capitalize text-black mr-6">
                        <Link to='/' className="no-underline">
                            home
                        </Link>
                    </li>
                    <li className="text-xl capitalize text-black mr-6">
                        <Link to='/' className="no-underline">
                            about
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header