import { BrowserRouter, Route, Routes } from "react-router"
import Dashboard from "./components/dashboard"
import "./index.css"
import Home from "./components/home"
import Blog from "./components/blogs"
import About from "./components/about"
import Login from "./components/login"
import SignIn from "./components/signup"
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/signup" element={<SignIn />}></Route>
                    <Route path="/dashboard" element={<Dashboard />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App