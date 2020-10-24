import React, { useEffect, useRef } from "react";
import { TimelineLite, gsap } from "gsap";
import "../styles/navbar.css";

const Navbar = () => {
    let tl = new TimelineLite();
    let navbar = useRef(null);
    let item1 = useRef(null);
    let item2 = useRef(null);
    let item3 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(TimelineLite);
        tl.from(navbar, {
            opacity: 0,
            yPercent: -100,
            duration: 1,
            delay: 2,
        });
        tl.from(
            item1,
            {
                opacity: 0,
                yPercent: -10,
                duration: 0.5,
            },
            "+=0.3"
        );
        tl.from(
            item2,
            {
                opacity: 0,
                yPercent: -10,
                duration: 0.5,
            },
            "+=0.3"
        );
        tl.from(
            item3,
            {
                opacity: 0,
                yPercent: -10,
                duration: 0.5,
            },
            "+=0.3"
        );
    });
    return (
        <nav ref={(el) => (navbar = el)} className="navbar">
            <h2>Brand Logo</h2>
            <ul>
                <li ref={(el) => (item1 = el)}>Our Products</li>
                <li ref={(el) => (item2 = el)}>Services</li>
                <li ref={(el) => (item3 = el)}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
