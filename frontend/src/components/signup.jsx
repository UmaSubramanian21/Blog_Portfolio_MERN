import { useEffect, useState } from "react"
import auth from "../config/firebase"
import { Link, useNavigate } from "react-router"
import { createUserWithEmailAndPassword } from "firebase/auth"


function SignIn() {
    const navigate = useNavigate()
    const [user, setuser] = useState()
    const [pass, setpass] = useState()
    const [err, setErr] = useState("")

    function signin() {
        createUserWithEmailAndPassword(auth, user, pass).then(function (data) {
            console.log("Credentials send to firebase", data)
            navigate('/')
        }).catch(function () {
            console.log("Failed to send signin details to firebase")
            setErr("Error signing in please try again")
        })
    }

    // 

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate('/dashboard')
            }
        })
    }, [])

    return (
        <>
            {/* login page  */}
            <div className="p-5 flex flex-col justify-center items-center">

                <h1 className="font-bold text-2xl mb-10">SignIn Here </h1>
                <div className="flex flex-col gap-10 items-center">
                    <input
                        className="w-[100%] outline-none border border-green-500 p-2"
                        placeholder="Username"
                        onChange={(e) => { setuser(e.target.value) }}></input>

                    <input
                        className="w-[100%] outline-none border border-green-500 p-2"
                        placeholder="Password"
                        onChange={(e) => { setpass(e.target.value) }}>
                    </input>
                    <h1 className="text-red-500">{err}</h1>
                    <span className="text-red-500"> Password must be atleast 6 characters </span>
                    <button
                        onClick={signin}
                        className="bg-blue-800 p-2 w-[50%] text-white rounded-md">SignIn</button>
                </div>

            </div>
        </>
    )
}

export default SignIn