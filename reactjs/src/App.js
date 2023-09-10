import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import SecondComponent from './components/SecondComponent'
import FirstComponent from './components/FirstComponent'
import ThirdComponent from './components/ThirdComponent'
import FourthComponent from './components/FourthComponent'
import Header from './Header'
import Footer from "./components/Footer"
 
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<ul>
                    <br />
                    <Header/>
                    
                    <li>
                        <Link to='geeks/first' target='_blank'>
                            Dermal Fillers
                        </Link>
                    </li>
                    <br />
                    <li>
                        <Link to='geeks/second' target='_blank'>
                            Secret RF
                        </Link>
                    </li>
                    <br />
                    <li>
                        <Link to='geeks/third' target='_blank'>
                            Facials
                        </Link>
                    </li>
                    <br />
                    <li>
                        <Link to='geeks/fourth' target='_blank'>
                            Consultation
                        </Link>
                    </li>
                    <br />
                </ul>}>
                </Route>
                <Route exact path='/geeks/second' element={<SecondComponent />}>
                </Route>
                <Route exact path='/geeks/first' element={<FirstComponent />}>
                </Route>
                <Route exact path='/geeks/third' element={<ThirdComponent />}>
                </Route>
                <Route exact path='/geeks/fourth' element={<FourthComponent />}>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default App