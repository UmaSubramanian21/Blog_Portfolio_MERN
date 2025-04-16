import { Link } from "react-router"

function About() {
    return (
        <>
            <div className="p-10">
                <h1 className="text-blue-800 underline text-right"><Link to='/dashboard'>Back to Dashboard</Link></h1>
                <h1 className="text-4xl font-bold">About</h1>
            </div>
        </>
    )
}
export default About