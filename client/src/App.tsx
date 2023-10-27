import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import {
    Routes,
    Route
} from 'react-router-dom'
import {Register} from "./components/Register";
import {
    Login
} from "./components/Login";
import MyBlog from "./components/MyBlog";

function App() {

    return (
        <div className="relative h-screen w-screen bg-background text-foreground">
            <Navbar/>
            <Routes>
                <Route path='/'
                    element={<Blog/>}/>
                <Route path='/login'
                    element={<Login/>}/>
                <Route path='/register'
                    element={<Register/>}/>
                <Route path='/my-blog'
                    element={<MyBlog/>}/>
            </Routes>
        </div>
    )
}

export default App
