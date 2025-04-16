import { Link } from "react-router"

function Home() {
    return (
        <>
            <div className="p-10">
                <h1 className="text-blue-800 underline text-right"><Link to='/dashboard'>Back to Dashboard</Link></h1>
                <h1 className="text-5xl font-extrabold mb-5 text-blue-800" >Hi !  i am UmaSubramanian</h1>
                <h1 className="text-4xl font-extrabold mb-5 text-blue-700">A MERN Full Stack Developer</h1>
                <div className="text-blue-600">
                    <p>I am Uma, a passionate MERN stack developer eager to build innovative and scalable we
                        solutions.
                        With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I thrive on solving
                        complex
                        challenges.
                        I love transforming ideas into functional, user-friendly applications with clean and efficient
                        code.
                        Constantly exploring new technologies, I stay ahead in the ever-evolving world of web
                        development.
                        My experience includes internships where I enhanced system efficiency and improved user
                        experiences.
                        I have a strong problem-solving mindset and a keen eye for detail in frontend and backend
                        development.
                        <br></br>
                        <br></br>
                        Collaboration and continuous learning drive me to create impactful digital experiences.
                        Certified in Oracle APEX and web development, I am committed to professional growth.
                        Beyond coding, I enjoy delving into AI, automation, and innovative tech solutions.
                        I aspire to contribute my skills to a dynamic team, turning challenges into opportunities.
                    </p>
                </div>
            </div>
            <footer className="text-center bg-black text-white p-2">
                <h1
                    className="">@2025 Your website all rights reserved</h1>
            </footer>
        </>
    )
}
export default Home