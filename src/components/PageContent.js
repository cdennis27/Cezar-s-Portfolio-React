import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PortfolioContainer from './PortfolioContainer';


export default function PageContent() {
    
    console.log({NavTabs});
    return (
        <div>
            <Blog  />
        </div>


    );

}

