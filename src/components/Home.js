import React, { useRef, useEffect, useState } from "react";
import "../styles/home.css";

import { Power3, TimelineLite, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import spinner from "../images/spinner.svg";
import landing1 from "../images/agritech.jpg";
import landing2 from "../images/product-design.jpg";
import landing3 from "../images/manufacturing.jpg";
import side from "../images/side-bars.png";
import agri from "../images/smart-agri.jpg";
import deli from "../images/smart-delivery.jpg";

const Home = () => {
    let initial = useRef(null);
    let loader = useRef(null);
    let homeSection = useRef(null);
    let startDiv = useRef(null);
    let img1 = useRef(null);
    let img2 = useRef(null);
    let img3 = useRef(null);
    let whatWeDo = useRef(null);
    let service1 = useRef(null);
    let service2 = useRef(null);
    let service3 = useRef(null);
    let moreLine1 = useRef(null);
    let moreLine2 = useRef(null);

    let tl = new TimelineLite();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(Power3);
        gsap.registerPlugin(TimelineLite);

        tl.to(homeSection, {
            duration: 0,
            visibility: "visible",
        })
            .to(loader, {
                opacity: 0,
                ease: Power3.easeOut,
                duration: 1,
                display: "none",
            })
            .to(initial, {
                opacity: 0,
                xPercent: 100,
                duration: 1,
                zIndex: -100,
                ease: Power3.easeIn,
                display: "none",
            })
            .from(startDiv, {
                duration: 1,
                y: 600,
                opacity: 0,
                scale: 1.5,
                ease: Power3.easeOut,
            })
            .from(img1, {
                duration: 1,
                opacity: 0,
                y: 500,
            })
            .from(
                img2,
                {
                    duration: 1,
                    opacity: 0,
                    y: 500,
                },
                "-=0.5"
            )
            .from(
                img3,
                {
                    duration: 1,
                    opacity: 0,
                    y: 500,
                },
                "-=0.5"
            )
            .from(whatWeDo, {
                opacity: 0,
                yPercent: -50,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: whatWeDo,
                    scrub: 1,
                    start: "top bottom",
                    toggleActions: "play none pause reset",
                },
            })
            .from(service1, {
                scrollTrigger: {
                    trigger: service1,
                    scrub: 1,
                    start: "bottom center",
                    toggleActions: "play none none reset",
                },
                opacity: 0,
                scale: 0.2,
                yPercent: -70,
                ease: Power3.easeInOut,
            })
            .from(service2, {
                scrollTrigger: {
                    trigger: service2,
                    scrub: 1,
                    start: "bottom bottom",
                    toggleActions: "play none none reset",
                },
                opacity: 0,
                scale: 0.2,
                yPercent: -50,
                ease: Power3.easeInOut,
            })
            .from(service3, {
                scrollTrigger: {
                    trigger: service3,
                    scrub: 1,
                    start: "top bottom",
                    toggleActions: "play pause resume reset",
                },
                opacity: 0,
                scale: 0.2,
                yPercent: -50,
                ease: Power3.easeInOut,
            })
            .from(
                moreLine1,
                {
                    duration: 1,
                    xPercent: -100,
                    opacity: 0,
                    scale: 1.5,
                    ease: Power3.easeIn,
                },
                ">1"
            )
            .from(
                moreLine2,
                {
                    duration: 1,
                    opacity: 0,
                    scale: 1.5,
                    xPercent: -100,
                    ease: Power3.easeInOut,
                },
                "+=1"
            );

        setTimeout(() => {
            document.querySelector("main.home").style.opacity = "1";
        }, 1000);
    }, []);

    return (
        <div>
            <div className="initial" ref={(el) => (initial = el)}></div>
            <img
                className="spinner"
                ref={(el) => (loader = el)}
                src={spinner}
                alt="spinner"
            />
            <main ref={(el) => (homeSection = el)} className="home">
                <section className="section1">
                    <div ref={(el) => (startDiv = el)} className="left-text">
                        <h1>Brand Name</h1>

                        <h2>
                            One Stop Solution for
                            <br />
                            all Your
                            <br />
                            <span style={{ color: "#8a2be2" }}>IOT </span>
                            Needs.
                        </h2>
                    </div>
                    <div className="imgs-carousel">
                        <img
                            className="img1"
                            ref={(el) => (img1 = el)}
                            src={landing1}
                            alt="landing page"
                        />

                        <img
                            className="img2"
                            ref={(el) => (img2 = el)}
                            src={landing2}
                            alt="landing page"
                        />
                    </div>
                </section>
                <section className="section2">
                    <img
                        ref={(el) => (img3 = el)}
                        src={landing3}
                        alt="landing page"
                        className="img3"
                    />
                    <h1 className="what-we-do" ref={(el) => (whatWeDo = el)}>
                        Everything We Do.
                    </h1>
                    <div className="services">
                        <div className="service" ref={(el) => (service1 = el)}>
                            <h2>Product Design</h2>
                            <img src={landing2} alt="product design" />
                            <p>
                                We are capable of converting your ideas into
                                tangible products, and let you handle only the
                                ideation part
                            </p>
                        </div>
                        <div className="service" ref={(el) => (service2 = el)}>
                            <h2>Smart Agriculture</h2>
                            <img src={agri} alt="product design" />
                            <p>
                                We have revolutionised how agriculture runs,{" "}
                                <br />
                                by injecting smart automation at every crucial
                                step!
                            </p>
                        </div>
                        <div className="service" ref={(el) => (service3 = el)}>
                            <h2>Smart Product Delivery</h2>
                            <img src={deli} alt="product design" />
                            <p>
                                We have used our technical prowess to ease the
                                process of delivering packages in and around
                                your very own city!
                            </p>
                        </div>
                    </div>
                    <p className="lots-more" ref={(el) => (moreLine2 = el)}>
                        Keep a Tab On This Space to Stay Informed.
                    </p>
                    <p className="lots-more" ref={(el) => (moreLine1 = el)}>
                        And There is a Lot More That We Are Branching Out to!
                    </p>

                    <img src={side} alt="decoration" className="side-attr-1" />

                    <img src={side} alt="decoration" className="side-attr-2" />
                </section>
                <br />
                
                <section className="section3">
                    <div className="all-company-logo">
                        <h5>All Client Logos Go In Here</h5>
                    </div>
                </section>
                <footer className="footer">
                    <p>Brand Name</p>
                </footer>
            </main>
        </div>
    );
};

export default Home;
