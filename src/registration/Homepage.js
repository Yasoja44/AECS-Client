import React, {Component} from 'react';
import BackToTopButton from "./cards/BackToTopButton/BackToTopButton";
import HeroSection from "./cards/HeroSection/HeroSection";
import './HomePage.css';
class Homepage extends Component {
    render() {
        return (
            <div>
                <BackToTopButton/>
                <HeroSection/>
            </div>
        );
    }
}

export default Homepage;