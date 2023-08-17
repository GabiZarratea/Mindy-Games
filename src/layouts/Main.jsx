import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import { Outlet } from "react-router-dom"

export default function Main(){
    return (
        <div className='bg-[url("/fondo.jpg")]'>
            <NavBar />
                <Outlet />
            <Footer />
        </div>
    )
}