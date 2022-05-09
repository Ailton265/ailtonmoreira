import React, {lazy, Suspense} from 'react'
import {Outlet} from "react-router-dom";

const Home = lazy(() => import('../../views/Home'))
const NotFound = lazy(() => import('../../views/404'))
const About = lazy(() => import('../../views/About'))
const Projects = lazy(() => import('../../views/Projects'))
const Carrer = lazy(() => import('../../views/Carrer'))
const Blog = lazy(() => import('../../views/Blog'))
const Contact = lazy(() => import('../../views/Contact'))
const Navbar = lazy(() => import('../../components/UI/navbar/navbar'))
const Footer = lazy(() => import('../../components/UI/footer/footer'))


function Layout(props) {
    console.log('layout', props)
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;