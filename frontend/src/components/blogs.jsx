import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import auth from "../config/firebase"

function Blog() {

    const [title, setTitle] = useState([])
    const [Content, setContent] = useState([])
    const [dbtitle, setDbTit] = useState([])
    const [dbBlog, setDbBlog] = useState([])
    const [admin, setAdmin] = useState(false)
    useEffect(function () {
        auth.onAuthStateChanged(function (stateChanged) {
            if (stateChanged) {
                console.log("Logged in")
                console.log("Current user's Id : ", stateChanged.uid)
                if (stateChanged.uid === 'J2NWNuOtTmc4tQ3GHwbbeLTTzOl2') {
                    console.log("Admin Logged in")
                    setAdmin(true)
                }
                else {
                    console.log("Not a Admin")
                    setAdmin(false)
                }
            }
            else {
                console.log("Logged out")
            }
        })
    }, [])

    var data;
    function submitBlog() {
        // own api

        axios.post('http://localhost:7000/api/blog', { title: title, blog: Content }).then(
            function (data) {
                console.log("Data send to server successfully")
                console.log(data.data[0].title)

                data.data.map(function (item) {
                    setDbTit([item.title])
                    console.log(dbtitle)
                    data = [title]
                    return <p>Title:{item.title}</p>
                })
            }
        )
    }

    return (
        <>
            <div className="p-10">
                <h1 className="text-blue-800 underline text-right"><Link to='/dashboard'> Back to Dashboard</Link></h1>
                <h1 className="text-2xl font-bold">Blog</h1>

                {/* blog creation form */}

                {admin ? <div className="mt-10 flex flex-col gap-5">
                    <h1 className="text-2xl font-bold">Hello Admin</h1>
                    <input
                        placeholder="Title"
                        className="outline-none"
                        onChange={(e) => { setTitle(...title, e.target.value) }}
                    ></input>

                    <input
                        placeholder="Content"
                        className="outline-none"
                        onChange={(e) => { setContent(...Content, e.target.value) }}
                    ></input>
                    <button
                        onClick={submitBlog}
                        className="w-[50%] bg-blue-600 rounded-md text-white p-2 outline-none"> Submit Blog</button>
                </div> : ""}

                {/* db data */}
                <div>
                    {
                        dbtitle.map(function (data) {
                            return <p> {data} </p>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Blog