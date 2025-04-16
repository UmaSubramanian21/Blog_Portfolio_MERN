import { signOut } from "firebase/auth"
import { useNavigate } from "react-router"
import auth from "../config/firebase"
import { useEffect } from "react"

function Dashboard() {
    const navigate = useNavigate()

    function logoutbtn() {
        signOut(auth)
        navigate('/')
    }

    useEffect(function () {
        auth.onAuthStateChanged(function (stateChanged) {
            if (stateChanged) {
                navigate('/dashboard')
                console.log("Login")
            }
            else {
                console.log("Logout")
            }
        })
    }, [])

    return (
        <>
            <div className="p-10">
                <div className="flex justify-between items-center">
                    <div className="text-3xl font-extrabold">Dashboard</div>
                    <div className="flex gap-5 font-bold items-center">
                        <p
                            className="cursor-pointer"
                            onClick={() => { navigate('/home') }}>Home</p>
                        <p
                            className="cursor-pointer"
                            onClick={() => { navigate('/blog') }}>Blogs</p>
                        <p
                            className="cursor-pointer"
                            onClick={() => { navigate('/about') }}>About</p>
                        <p className="border border-orange-400 cursor-pointer
                        p-2 bg-orange-400 text-white rounded-md"
                            onClick={logoutbtn}>Logout</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard