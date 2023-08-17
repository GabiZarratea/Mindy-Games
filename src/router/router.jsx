import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import BenefitsAndTips from '../pages/BenefitsAndTips'
import Contact from '../pages/Contact'
import MoreInformation from '../pages/MoreInformation'
import Raffle from '../pages/Raffle'
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/AboutUs',
                element: <AboutUs />
            },
            {
                path:'/BenefitsAndTips',
                element: <BenefitsAndTips />
            },
            {
                path:'/Contact',
                element: <Contact />
            },
            {
                path:'/MoreInformation',
                element: <MoreInformation />
            },
            {
                path:'/Raffle',
                element: <Raffle />
            }
        ]
    }
])

export default router