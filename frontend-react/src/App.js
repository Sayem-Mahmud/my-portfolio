import React from 'react';
// import { Skills, Header, Footer, Work, Testimonial, About } from './container'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from './components/Home/Home';
import Work from './container/Work/Work';
import AllWork from './components/AllWork/AllWork';
// import { Navbar } from './components';

const App = () => {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="work" element={<AllWork />} />
                    {/* <Route path="*" element={<NotFound />} />  */}
                </Routes>
            </Router>
        </div>



        // <div className="app">
        //     <Navbar />
        //     <Header />
        //     <About />
        //     <Work />
        //     <Skills />
        //     <Testimonial />
        //     <Footer />
        // </div>
    );
};

export default App;