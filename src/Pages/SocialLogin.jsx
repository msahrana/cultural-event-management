/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const SocialLogin = () => {
    const navigate = useNavigate()
    const { googleLogin} = useContext(AuthContext)

    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                toast.success('User logged in successfully');
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    return (
                <>
            <div className="divider">continue with</div>
            <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn bg-yellow-400 btn-sm">Google</button>
            </div>
        </>
    );
};

export default SocialLogin;