import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Home from './Components/Pages/Home'
import BookMaker from './Components/Pages/Bookmaker'
import Header from './Components/Layout/Header'
import Title from './Components/Layout/Title'
import Trends from './Components/Pages/Home/Trends'
import {Main} from './styles/Global'
export default function Routes(){
    return(
        <BrowserRouter>
            <Header />
            <Main>
                <Title />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/bookMark" component={BookMaker}/>
                </Switch>
            </Main>
            <Trends/>
        </BrowserRouter>
    )
}