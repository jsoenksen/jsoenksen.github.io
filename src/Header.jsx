import React, {Component} from 'react';
import aartvark from './images/aartvark.png';
import './styles.css';

//This Component simply contains all of the graphics and content in the top of
//the page, including the logo and introduction
class Header extends Component {
    render() {
        return (
            <div className="header">
                {/* Logo created by Jenna Soenksen */}
                <img src={aartvark} alt=""/>
                <h2> Imagine. Create. Build.</h2>
                <p> Curious beginner? Intriguied amateur? Here you'll find a list
                of dependable and affordable art supplies for aspiring artists.
                Go ahead. Take a look around. Be inspired. </p>
            </div>
        );
    }
}
export default Header
