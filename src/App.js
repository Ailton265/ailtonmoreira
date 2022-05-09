import React, {lazy, Suspense} from 'react'
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./hoc/error/ErrorBoundary";
import Layout from "./hoc/layout/Layout";
import {withTranslation, Trans} from 'react-i18next';
import {Button} from "aida-ui";
import Background from "./components/UI/background/background";

const Home = lazy(() => import('./views/Home'))
const NotFound = lazy(() => import('./views/404'))
const About = lazy(() => import('./views/About'))
const Projects = lazy(() => import('./views/Projects'))
const Carrer = lazy(() => import('./views/Carrer'))
const Contact = lazy(() => import('./views/Contact'))
const Blog = lazy(() => import('./views/Blog'))


function App(props) {
    console.log(props)
    const {i18n, t} = props

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

 /*   return (
        <ErrorBoundary>
            <div className="w-full h-full flex flex-col items-center align-middle justify-center mx-auto">

                <p className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer mx-4 p-2 rounded-lg">
                    {`${t('welcome')}`}
                </p>

                <div className="mx-auto w-48 h-96 my-10">
                    {/!*<img src={perfil} alt={"Logo"}/>*!/}
                </div>

                <div
                    className="my-2 animate-bounce hover:animate-ping text-indigo-500 hover:cursor-pointer capitalize hover:uppercase">
                    {`${t('greats')}`}
                </div>

                <div className={"flex flex-row mx-auto"}>
                    <Button label={'PT'} onClick={() => changeLanguage('pt')} variant={'base'}
                            className={"px-4 py-1 mx-4 cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"}/>
                    <Button label={'EN'} onClick={() => changeLanguage('eng')} variant={'base'}
                            className={"px-4 py-1 mx-4 cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"}/>
                </div>
            </div>
        </ErrorBoundary>
    );*/
    return(
        <ErrorBoundary>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/carrer" element={<Carrer />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
        </ErrorBoundary>
    )
}

export default withTranslation('translations')(App);
