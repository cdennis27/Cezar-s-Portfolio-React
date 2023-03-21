import React from 'react';
import gitHubWhite from './images/githubwhite.png';
import lilogo from './images/lilogo.png';

export default function Footer() {
    return (
        <footer>
            <h3>Contact</h3>
            <h3>Phone: (647) 627-0815 <a class="hover" href="mailto:cezardenis20@gmail.com">Email: cezardenis20@gmail.com</a></h3>
            <h3><a href="https://github.com/cdennis27"><img src={ gitHubWhite }/></a><a
        href="https://www.linkedin.com/in/cezar-amaral-203414251/"><img src={ lilogo }/></a></h3>

        </footer>
    );
}