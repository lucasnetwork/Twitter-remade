import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Home from './Components/Pages/Home'
import BookMaker from './Components/Pages/Bookmaker'
import Header from './Components/Layout/Header'


export default function Routes(){
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/bookMark" component={BookMaker}/>
            </Switch>
        </BrowserRouter>
    )
}