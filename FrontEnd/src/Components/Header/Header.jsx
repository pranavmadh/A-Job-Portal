import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";


const navStyle = ({ isActive }) => 
    isActive 
    ? "text-remotego font-bold underline decoration-remotego underline-offset-[28px] decoration-4" 
    : "hover:underline underline-offset-[28px] decoration-slate-200 decoration-4 font-semibold text-slate-900";

const iconStyle = " rounded-full hover:bg-slate-200 p-2"

const buttonStyle = "text-nowrap border-2 border-remotego w-40 bg-remotego text-white h-10 rounded-3xl font-medium hover:bg-white hover:text-remotego"


const Header = () => {
    const [isMenu , setisMenu] = useState(true)
 
    const toggleFunction =  () => {
        setisMenu(!isMenu)
    }

    const [isAuthenticate,setisAuthenticated] = useState(false)
    return (
        <Fragment>
           <header className="flex justify-center px-10 py-4 border-b-2">
            <nav className="flex justify-between w-[92%] items-center ">
                <div>
                    <NavLink className="text-black font-bold text-2xl" to={'/'}>Go<span className="text-remotego">Remote</span></NavLink>
                </div>
                <div className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${isMenu ? "top-[-100%]" : "top-[8%]"} w-full flex items-center md:auto justify-center px-5 z-10`}>
                    <ul className="flex md:items-center md:gap-[4vw] gap-[8vh] flex-col md:flex-row">
                        <li>
                            <NavLink 
                                to="/community" 
                                className={navStyle}
                            >
                                Community
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/jobs" 
                                className={navStyle}>
                                Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/companies" 
                                className={navStyle}>
                                Companies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/salaries" 
                                className={navStyle}>
                                Salaries
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {isAuthenticate ? 
                <div className="flex gap-[2vw]">
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
                </div> :
                <div className="hidden gap-4 w-[20%] md:flex">
                    <button className={buttonStyle}>Sign Up</button>
                    <button className={buttonStyle}>Login</button>
                </div> 
                }
                <div>
                    <FontAwesomeIcon onClick={toggleFunction} icon={isMenu ? faBars : faClose  } size="lg" className="md:hidden cursor-pointer"/>
                </div>
            </nav>
           </header>
        </Fragment>
    );
}

export default Header;
