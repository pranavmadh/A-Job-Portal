import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import UserSignupError from "./UserSignupError";

const UserSignup = () => {
    const [errors, setErrors] = useState({})
    const [signupError,setSignupError] = useState(false)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (signupError) {
            setShowError(true);
            const timer = setTimeout(() => {
                setShowError(false);
                setSignupError(false); // Reset signupError after fade-out
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [signupError]);

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let newError = {}

        const usernameRegex = /^[a-zA-Z0-9]+$/
        const emailRegex = /^[a-zA-Z0-9_\-\.]+[@]{1}[a-z]+[\.][a-z]{2,3}$/
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        
        if (!usernameRegex.test(formData.username)) {
            newError.username = "Username should contain only letters and numbers, no spaces or special characters are allowed"
        }

        if (!emailRegex.test(formData.email)) {
            newError.email = "Please enter a valid email address"
        }
        
        if (!passwordRegex.test(formData.password)) {
            newError.password = "Password must contain at least 8 characters, one uppercase, one lowercase, and one special character"
        }

        if (formData.password !== formData.confirmPassword) {
            newError.confirmPassword = "Passwords do not match"
        }

        setErrors(newError)
        return Object.keys(newError).length === 0
    }

    
    const submitHandler = async (e) => {
        e.preventDefault()

        if (validate()) {
            try {
                const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
                    name:  formData.name,
                    username : formData.username,
                    email : formData.email,
                    password : formData.password
                })
                console.log(response.data.success)
                
                if(!response.data.success) {
                    setSignupError(true);
                } 
                
                if(response.data.success) {
                    navigate('/auth/login')
                    return
                }
            } catch (error) {
                setSignupError(true); // Handle network or server errors
            }
        } 
    }

    const inputStyle = "h-9 w-full rounded-lg pl-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-remotego focus:border-transparent"
    const errorStyle = "text-red-500 text-xs mt-1 w-full"

    return (
        <div className="flex min-h-[85vh] justify-center items-center p-4 relative">
            {showError && <UserSignupError className="fade-out" />}
            <div className="max-w-7xl flex flex-col md:flex-row shadow-lg rounded-xl overflow-hidden">
                <div className="w-full bg-slate-50 p-4 md:p-8">
                    <div className="mb-4 md:mb-6">
                        <h1 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Signup to RemoteGo</h1>
                        <h2 className="text-sm md:text-base text-gray-600">Signup with your google account or create a new account</h2>
                    </div>
                    <form className="flex flex-col text-remotego font-semibold" onSubmit={submitHandler}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                            <div>
                                <label className="mb-1">Your Name</label>
                                <input type="text" placeholder="Name" name="name" className={inputStyle} onChange={handleChange} />
                            </div>
                            <div>
                                <label className="mb-1">Your Username</label>
                                <input type="text" placeholder="Username" name="username" className={inputStyle} onChange={handleChange} />
                                {errors.username && <p className={errorStyle}>{errors.username}</p>}
                            </div>
                        </div>
                        
                        <label className="mt-3 mb-1">Your Email Address</label>
                        <input type="email" placeholder="Email" name="email" className={inputStyle} onChange={handleChange} />
                        {errors.email && <p className={errorStyle}>{errors.email}</p>}
                        
                        <label className="mt-3 mb-1">Your Password</label>
                        <input type="password" placeholder="Password" name="password" className={inputStyle} onChange={handleChange} />
                        {errors.password && <p className={errorStyle}>{errors.password}</p>}
                        
                        <label className="mt-3 mb-1">Confirm Your Password</label>
                        <input type="password" placeholder="Confirm Password" name="confirmPassword" className={inputStyle} onChange={handleChange} />
                        {errors.confirmPassword && <p className={errorStyle}>{errors.confirmPassword}</p>}
                        
                        <button type="submit" className="mt-6 bg-remotego text-white font-bold py-2 px-4 rounded-xl hover:bg-remotego-dark transition duration-300">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserSignup
