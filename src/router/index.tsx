import useLazy from "@/hooks/useLazy";
const Home = useLazy(import('@/pages/Home'))
const Abstract = useLazy(import('@/pages/Abstract'))
const About = useLazy(import('@/pages/About'))
import { Navigate } from "react-router-dom";

const routes = [
    {
        path: '/',
        element: <Navigate to='./abstract' />
    },
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/abstract',
                element: <Abstract />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
]

export default routes