import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value 
        const email = e.target.email.value 
        const password = e.target.password.value 
        console.log(name, email, password)

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6 my-10  text-center">Please Register </h2>
            <form onSubmit={handleRegister} className="border w-1/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                 </div>
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
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary w-full">Sign Up</button>
                </div>
                <p className="text-center mt-4 mb-4">Already have an account: <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;