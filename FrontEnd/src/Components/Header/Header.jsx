import { Fragment, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";


const navStyle = ({ isActive }) => 
    isActive 
    ? "text-remotego font-bold underline decoration-remotego underline-offset-[28px] decoration-4" 
    : "hover:underline underline-offset-[28px] decoration-slate-200 decoration-4 font-semibold text-slate-900";

const iconStyle = "rounded-full hover:bg-slate-200 p-2"

const buttonStyle = "text-nowrap border-2 border-remotego w-40 bg-remotego text-white h-10 rounded-3xl font-medium hover:bg-white hover:text-remotego"

 

const Header = () => {
    const [isMenu, setIsMenu] = useState(false)
 
    const navigate = useNavigate()
    const toggleFunction = () => {
        setIsMenu(!isMenu)
    }

    const [isAuthenticate, setIsAuthenticated] = useState(false)

    return (
        <Fragment>
           <header className="sticky top-0 z-50 bg-white w-full border-b-2">
                <nav className="flex flex-wrap justify-between items-center px-4 py-4 md:px-10 relative">
                    <div className="flex items-center">
                        <NavLink className="text-black font-bold text-2xl" to={'/'}>Go<span className="text-remotego">Remote</span></NavLink>
                    </div>
                    <div className="md:hidden">
                        <FontAwesomeIcon 
                            onClick={toggleFunction} 
                            icon={isMenu ? faClose : faBars} 
                            size="lg" 
                            className="cursor-pointer"
                        />
                    </div>
                    <div className={`${isMenu ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 md:static absolute bg-white top-16`}>
                        <ul className="flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-[4vh]">
                            <li><NavLink to="/community" className={navStyle}>Community</NavLink></li>
                            <li><NavLink to="/jobs" className={navStyle}>Jobs</NavLink></li>
                            <li><NavLink to="/companies" className={navStyle}>Companies</NavLink></li>
                            <li><NavLink to="/salaries" className={navStyle}>Salaries</NavLink></li>
                            <li><NavLink to="/auth" className={`${navStyle} md:hidden`}>Signup</NavLink></li>
                            <li><NavLink to="/auth/login" className={`${navStyle} md:hidden`}>Login</NavLink></li>
                        </ul>
                    </div>
                    {isAuthenticate ? 
                        <div className="flex gap-[2vw] mt-4 md:mt-0">
                            <div className={`flex items-center ${iconStyle}`}>
                                <FontAwesomeIcon icon={faSearch} size="lg" />
                                <span className="ml-1">Search</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faBell} size="lg" className={`hover:rotate-45 ${iconStyle}`}/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faUser} size="lg" className={iconStyle} />
                            </div>
                        </div> 
                    :
                        <div className="hidden md:flex gap-4 mt-4 md:mt-0">
                            <button className={buttonStyle} onClick={() => navigate('/auth')}>Sign Up</button>
                            <button className={buttonStyle} onClick={() => navigate('/auth/login')}>Login</button>
                        </div> 
                    }
                </nav>
           </header>
        </Fragment>
    );
}

export default Header;
