import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";


const navStyle = ({ isActive }) => 
    isActive 
    ? "text-green-600 font-bold underline decoration-green-600 underline-offset-[26px] decoration-4" 
    : "hover:underline underline-offset-[26px] decoration-slate-200 decoration-4 font-semibold text-slate-900";

const iconStyle = " rounded-full hover:bg-slate-200 p-2"


const Header = () => {
    const [isMenu , setisMenu] = useState(true)
 
    const toggleFunction =  () => {
        setisMenu(!isMenu)
    }
    return (
        <Fragment>
           <header className="flex justify-center px-10 py-4 border-b-2">
            <nav className="flex justify-between w-[92%] items-center">
                <div>
                    <h1 className="text-green-600 font-bold text-2xl">RemoteDevs</h1>
                </div>
                <div className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${isMenu ? "top-[-100%]" : "top-[8%]"} w-full flex items-center md:auto justify-center px-5`}>
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
                    <div>
                        <FontAwesomeIcon onClick={toggleFunction} icon={isMenu ? faBars : faClose  } size="lg" className="md:hidden cursor-pointer"/>
                    </div>
                </div>
            </nav>
           </header>
        </Fragment>
    );
}

export default Header;
