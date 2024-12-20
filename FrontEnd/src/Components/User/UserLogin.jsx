import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserLoginError from "./UserLoginError";
const UserLogin = () => {
    const navigate= useNavigate()
    const [axiosError , setAxiosError] = useState(false)
    const [showError,setShowError] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        if(axiosError) {
            setShowError(true)
            const timer = setTimeout(() => {
                setShowError(false)
                setAxiosError(false)
            },5000)

            return () => clearTimeout(timer)
        }
    },[axiosError])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/login', {
                email: formData.email,
                password: formData.password
            });

            if (!response.data.success) {
                setAxiosError(true);
            } else {
                localStorage.setItem("token",response?.data?.cookies)
                navigate('/community');
            }
        } catch (error) {
            console.log("Error:", error);
            setAxiosError(true);
        }
    };

    const inputStyle = "h-10 w-full rounded-lg border border-gray-300 focus:ring-remotego focus:ring-2 focus:outline-none px-3";
    const buttonStyle = "bg-remotego text-white h-10 rounded-lg hover:bg-remotego-dark transition duration-300";

    return (
        <div className="flex h-[85vh] justify-center items-center p-4 relative">
            {showError && <UserLoginError/>}
            <div className="w-full max-w-md bg-slate-50 shadow-lg rounded-xl p-6 sm:p-8 md:p-10">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-2">Login to RemoteGo</h1>
                    <h2 className="text-sm text-gray-600">Login using your Account Details</h2>
                </div>
                <form className="flex flex-col text-remotego font-semibold" onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label className="mb-1">Your Email</label>
                        <input 
                            type="email" 
                            name="email"
                            className={inputStyle} 
                            placeholder="Email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="mb-1">Your Password</label>
                        <input 
                            type="password" 
                            name="password"
                            className={inputStyle} 
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className={buttonStyle}>Login</button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account? <NavLink className="text-remotego hover:underline" to={'/auth/signup'}>Sign up</NavLink>
                </p>
            </div>  
        </div>
    );
};

export default UserLogin;
