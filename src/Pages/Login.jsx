import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('located in login page',location)



    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value 
        console.log(email, password)

        signIn(email,password)
        .then(result =>{
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
            <div>
                <h2 className="text-2xl font-semibold mb-6 my-10  text-center">Please Login </h2>
                <form onSubmit={handleLogin} className="border w-1/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary w-full">Login</button>
                    </div>
                    <p className="text-center mt-4 mb-4">Do not have an account: <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
    );
};

export default Login;