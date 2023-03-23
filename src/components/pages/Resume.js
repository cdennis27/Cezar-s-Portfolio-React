import React from 'react';
import resumePdf from '../../assets/resume.pdf';

export default function Resume() {
    return (
        <section className="resume">
            <button className="button-resume">
                <a className="" href={resumePdf} download="resume.pdf">
                    Download Resume
                </a>
            </button>
            <h1>Cezar's Resume</h1>
            <div className="resume-header">
                <h2>Work Experience</h2>
            </div>
            <span>2015-2022</span>
            <p>
                Co-owner and manager of an automotive restoration and body shop in San Mateo
                California,
                managed employees, sublet service providers, parts and materials suppliers and deployed marketing
                strategies to attract customers and sell products and services. Customer service at highest level on
                Yelp at 5 stars and frequent repeat customers, multiple classic car sold on internationally
                acclaimed
                auctions like at Mecum Pebble Beach, California. Products and services from 100's dollars to over
                100
                thousand dollars classic and custom cars.
            </p>

            <span>2005-2022</span>
            <p>
                Website and electronic products designer and manager, including instrument gauges
                that look like classic vintage components with modern parts providing accurate readings to the
                customer
                as highly desired.
            </p>

            <span>2013-2015</span>
            <p>
                Managed projects at Downtown Auto Collision in Toronto, Ontario. Managed employees
                and suppliers. Dealt with customers and insurance companies to provide best quality service and
                products
                on time to all customers. Managed purchase of parts and sublet services with costs and delivery time
                in
                mind.
            </p>

            <span>2011-2013</span>
            <p>
                EnviroCar in Aurora, Ontario as a Collision Center Manager, and estimator. Managed employees,
                suppliers,
                and dealt with customers and insurance company representatives. Organized work orders and schedules
                to
                optimize resources and time.
            </p>

            <span>2009-2011</span>
            <p>
                Ontario Chrysler in Mississauga, Ontario as a Body Shop Manager assistant and estimator, lots
                of experience with customer service and project management on a Fierce Industry.
            </p>

            <span>2003-2009</span>
            <p>
                Downtown Fine Cars, Toronto, Ontario, started washing cars and few months later got promoted to
                parts
                representative, service consultant, shop foreman and service manager assistant within the company.
                Known
                for good customer service and work orders management.
            </p>

            <span>2000-2003</span>
            <p>
                Worked on own family business in Brazil, Ostrich Farm and Small Construction Company. Managed
                supplies, final products sales, suppliers and employees.
            </p>

            <div class="resume-header">
                <h2>Education</h2>
            </div>
            <p>
                Full Stack Web Development bootcamp at University of Toronto. Software development, Robotics and
                Electronics training at Techshop in San Francisco, California. Several project management courses from
                companies
                like: Porsche, Nissan and Chrysler. Multiple customer service, marketing, computer science and robotics
                short
                courses from Stanford, Harvard, College of San Mateo California. 4 years of Law School at University
                Pontifical Catholic of Campinas in Brazil. Computer science and I.T. self thought training at own family
                software company in the 90's. A lot of time spent on self training and learning computer software,
                hardware and project management.
            </p>

            <div class="resume-header">
                <h2>Skills</h2>
            </div>
            <p>
                Product Manager experience for almost 20 years, in the automotive business, from pitch to sale, customer
                research, planning, developing, advertising, delivering, selling, and collecting payments.
                Experience dealing with low to high end customers, dealt with government and insurance companies,
                managed several projects with several employees and suppliers, organized scheduling, and supplies.
                Learned from failures and success, organization and commitment go a long way.
                Other skills: JavaScript, HTML, CSS, SQL, Heroku, Figma, Inventor, Office, Git, PC hardware, Bootstrap,
                API's, REST, C++, VSC, Slack, Zoom, Agile, Scrum, Node.js, JQuery, Database management, Heroku, Debugging,
                Website design and maintenance, hardware setup (PCs to microcontrollers with actuators and sensors), 3D
                printing, CNC machining, laser cutting, welding, electronics, customer feedback on UI and UX.
            </p>

            




        </section>

    );
}