import React, { useState } from 'react';
import image1 from '../images/CardealerappScreenshot.jpg';
import image2 from '../images/Weatherapphomepage.jpg';
import image3 from '../images/webdevBlog.jpg';
import image4 from '../images/BudgetControlCurrencyExchange.jpg';
import image5 from '../images/jatescreen1.jpg';
import image6 from '../images/noteTakerScreenshot.png';
import image7 from '../images/teamGeneratorSCreenshot.jpg';
import image8 from '../images/readmeGeneratorScreenshot.jpg';
import image9 from '../images/employeetrackertable.jpg';
// https://cdennis27.github.io/CezarPortfolio/assets/images/CardealerappScreenshot.jpg



export default function Portfolio() {

  const [projects, setGroup] = useState([
    {
      name: "Classic Whipz",
      link: "https://classiccarwhipz.herokuapp.com/",
      image: image1,
      alt: "Classic Whipz screenshot",
      description: "E-Commerce website using MySQL, Handlebars, Node.JS, Rest.API's, Stripe, Cookies and User Login with encrypted information deployed on Heroku.",
      github: "https://github.com/cdennis27/Carsales-E-commerce-Stripe"
    },
    {
      name: "Weather Spot",
      link: "https://cdennis27.github.io/WeatherApp/",
      image: image2,
      alt: "Weather website screenshot",
      description: "Weather website using 3rd party API's, HTML, CSS, JavaScript and local storage.",
      github: "https://github.com/cdennis27/WeatherApp"
    },
    {
      name: "WebDev Blog",
      link: "https://webdev-blog.herokuapp.com/",
      image: image3,
      alt: "WebDev Blog screenshot",
      description: "Blog website, using MySQL database, RESTful API, HTML, CSS, JavaScript, JQuery, Handlebars and Encrypted user information.",
      github: "https://github.com/cdennis27/WebDev-Blog"
    },
    {
      name: "Budget Tracker",
      link: "https://cdennis27.github.io/budgettrackergroup2/",
      image: image4,
      alt: "Budget Tracker screenshot",
      description: "Budget tracker website, using MongoDB, Mongoose, Express, Node.JS, HTML, CSS, JavaScript and IndexedDB.",
      github: "https://github.com/cdennis27/budgettrackergroup2"
    },
    {
      name: " Text Editor PWA",
      link: "https://just-another-text-editor-27.herokuapp.com/",
      image: image5,
      alt: "Text Editor screenshot",
      description: "Code Snippet Text Editor, under Progressive Web Application guideline.",
      github: "https://github.com/cdennis27/just-another-text-editor-27" 
    },
    {
      name: "Web Notepad",
      link: "https://note-taker-cdennis01.herokuapp.com/notes",
      image: image6,
      alt: "Web Notepad screenshot",
      description: "Website using RESTful API and Express to store notes in the Web.",
      github: "https://github.com/cdennis27/Note-Taker-Application"
    },
    {
      name: "Team Profile Generator",
      link: "https://drive.google.com/file/d/1RlLdP6MMt-HC3ZMa846TSPPexdo_lFF_/view",
      image: image7,
      alt: "Team Profile Generator screenshot",
      description: "Command Line Application using Node.JS, Inquirer and Jest.",
      github: "https://github.com/cdennis27/Team-Profile-Generator"
    },
    {
      name: "Readme File Generator",
      link: "https://drive.google.com/file/d/1Atf7X2BbHruL_EYWvtzk2EqByZ8V3CHU/view",
      image: image8,
      alt: "Readme File Generator screenshot",
      description: "Command Line Application using Node.JS, Inquirer and HTML.",
      github: "https://github.com/cdennis27/Readme-Generator"
    },
    {
      name: "Employee Tracker Application",
      link: "https://drive.google.com/file/d/1yqm3ADj85x0WGhxaKwBq-j4GoGfqV1D6/view",
      image: image9,
      alt: "Employee Tracker Application screenshot",
      description: "Node.JS application using MySQL and Prompts to manage employees database",
      github: "https://github.com/cdennis27/Employee-Tracker"
    }

  ]);



  return (
    <section className="webProjects-container" id="work">
      <div className="webProjects-header">
        <h3>Software Projects / Web development</h3>
      </div>

      <div className="webProjects-cards">


        {projects.map((item, index) => {

          return (
            <div key={index} class="card">
              <h2>{item.name}</h2>
              <a href={item.link}><img src={item.image} alt={item.alt} /></a>
              <p>{item.description}</p>
              <a className="GitHub-link hover" href={item.github}>GitHub Repository, click here!</a>
            </div>
          )
        }
        )}

      
      </div>
    </section>
  );
}
