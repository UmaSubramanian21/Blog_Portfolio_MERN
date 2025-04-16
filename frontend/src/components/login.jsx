import auth from "../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router"


function Login() {
    const navigate = useNavigate()
    const [user, setuser] = useState()
    const [pass, setpass] = useState()

    // check login or logout
    // 

    useEffect(() => {
        window.scrollTo(0,0)
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate('/dashboard')
            }
            else{
                navigate('/')
            }
        })
    }, [])

    // 


    // login btn 
    function login() {
        signInWithEmailAndPassword(auth, user, pass).then(
            function () {
                console.log("Login Sucessfull")
                navigate('/dashboard')
            }
        ).catch(function () {
            console.log("Login failed , try again")
            navigate('/')
        })
    }

    return (
        <>
            {/* login page  */}
            <div className="p-5 flex flex-col justify-center items-center">
                <h1 className="text-3xl mb-5 font-bold text-blue-700">Welcome to Blog Portfolio</h1>

                <h1 className="font-bold text-2xl mb-10">Login Here </h1>
                <div className="flex flex-col gap-10 items-center">
                    <input
                        onChange={(e) => { setuser(e.target.value) }}
                        className="w-[100%] outline-none border border-green-500 p-2"
                        placeholder="Username"></input>

                    <input
                        onChange={(e) => { setpass(e.target.value) }}
                        className="w-[100%] outline-none border border-green-500 p-2"
                        placeholder="Password"></input>


                    <button
                        onClick={login}
                        className="bg-blue-800 p-2 w-[50%] text-white rounded-md">Login
                    </button>

                    {/* <button
                            onClick={login}
                            className="bg-blue-800 p-2 w-[50%] text-white rounded-md">Logout</button>

                     */}
                </div>
                {/* signup page */}
                <div className="mt-5">
                    <h1> New user? , <Link to="/signup" className="text-blue-900 underline">SignIn</Link>  here</h1>
                </div>
            </div>
        </>
    )
}

export default Login