import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import PageContent from './PageContent';
import Header from './Header';
import '../styles/PortfolioContainer.css';
import myDrawing from './images/myDrawing.gif';
import Footer from './Footer';



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const hidden = () => {
    if (currentPage === 'Home') {
      return "aboutme";
    }
    return "aboutme hidden";
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="html">
      <div className="">

        <div className="header">
          {/* We are passing the currentPage from state and the function to update it */}
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* Here we are calling the renderPage method which will return a component  */}

        </div>

      </div>
      <div className={hidden()}>
        <div className="aboutme-left-container">
          <h1>Cezar Amaral</h1>
          <p>Software Developer</p>
          <p>Marketing Consultant</p>
          <p>Web Design</p>
          <p>I.T.</p>
        </div>
        <div className="aboutme-right-container">
          <img className="myDrawing" src={myDrawing} alt="Cezar Amaral" />
        </div>
      </div>
      <div className="page">
        {renderPage()}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
