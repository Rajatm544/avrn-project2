import React, { useRef, useEffect, useState } from "react";
import "../styles/home.css";

import { Power3, TimelineLite, gsap, TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import spinner from "../images/spinner.svg";
import landing1 from "../images/agritech.jpg";
import landing2 from "../images/product-design.jpg";
import landing3 from "../images/manufacturing.jpg";
import side from "../images/side-bars.png";
import side2 from "../images/side-bars-2.png";
import agri from "../images/smart-agri.jpg";
import deli from "../images/smart-delivery.jpg";
import caseStudy1 from "../images/inventory-mgmt.png";
import associate1 from "../images/fix-logo-hp.png";
import caseStudy2 from "../images/item2.webp";

const Home = () => {
    const [caseImgs, setCaseImgs] = useState([caseStudy1, caseStudy2]);
    const [caseTitles, setCaseTitles] = useState([
        "Project Title 1",
        "Project Title 2",
    ]);
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
    let line1 = useRef(null);
    let line2 = useRef(null);

    let section3Initial = useRef(null);
    let section3 = useRef(null);
    let ourAssociates = useRef(null);
    let ourAssociatesList = useRef(null);
    let line3 = useRef(null);

    let caseStudySlider = useRef(null);
    let caseStudyImg = useRef(null);
    let caseStudyTitle = useRef(null);

    let section5Initial = useRef(null);
    let section5 = useRef(null);
    let lastSectionLine1 = useRef(null);
    let lastSectionLine2 = useRef(null);
    let contactBtn = useRef(null);

    let tl = new TimelineLite();
    let CaseStudyTl = new TimelineLite();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(TweenMax);
        gsap.registerPlugin(Power3);
        gsap.registerPlugin(TimelineLite);

        tl.to(homeSection, {
            duration: 0,
            visibility: "visible",
        })
            .to(loader, {
                opacity: 0,
                ease: Power3.easeOut,
                duration: 1.5,
                display: "none",
            })
            .to(initial, {
                opacity: 0,
                xPercent: 100,
                duration: 1,
                ease: Power3.easeIn,
                display: "none",
            })
            .from(startDiv, {
                duration: 1,
                yPercent: 100,
                opacity: 0,
                scale: 2,
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
                    scrub: 0.5,
                    start: "top bottom",
                    toggleActions: "play none pause reset",
                },
            })
            .from(service1, {
                scrollTrigger: {
                    trigger: service1,
                    scrub: 0.5,
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
                    scrub: 0.5,
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
                    scrub: 0.5,
                    start: "top bottom",
                    toggleActions: "play pause resume reset",
                },
                opacity: 0,
                scale: 0.2,
                yPercent: -50,
                ease: Power3.easeInOut,
            })
            .from(line1, {
                opacity: 0,
                xPercent: -100,
                scale: 0.5,
                scrollTrigger: {
                    trigger: service3,
                    start: "top center",
                    scrub: 1,
                },
            })
            .from(line2, {
                opacity: 0,
                xPercent: -100,
                scale: 0.5,
                scrollTrigger: {
                    trigger: line1,
                    start: "top bottom",
                    end: "top center",
                    scrub: 0.5,
                },
            })
            .from(section3Initial, {
                opacity: 0,
                scale: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: line2,
                    start: "top center",
                    scrub: 1,
                    toggleActions: "play reset reverse reset",
                },
            })
            .from(
                section3,
                {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: section3Initial,
                        scrub: 0.2,
                        start: "bottom bottom",
                        end: "bottom center",
                    },
                },
                "+=1"
            )
            .from(ourAssociates, {
                opacity: 0,
                xPercent: -50,
                scale: 0.1,
                scrollTrigger: {
                    trigger: ourAssociates,
                    start: "top bottom",
                    end: "top 30%",
                    scrub: 0.5,
                    toggleActions: "play restart reverse reset",
                },
            })
            .from(ourAssociatesList, {
                opacity: 0,
                xPercent: 100,
                scale: 0.1,
                scrollTrigger: {
                    trigger: ourAssociates,
                    start: "bottom bottom",
                    scrub: 0.5,
                    toggleActions: "play restart reverse reset",
                },
            })
            .from(line3, {
                opacity: 0,
                xPercent: 100,
                scale: 0.5,
                scrollTrigger: {
                    trigger: line3,
                    start: "top bottom",
                    end: "top center",
                    scrub: 1,
                },
            })
            .from(caseStudySlider, {
                opacity: 0,
                yPercent: 100,
                duration: 1,
                scrollTrigger: {
                    trigger: line3,
                    start: "top 30%",
                    scrub: 0.5,
                },
            })
            .from(section5Initial, {
                opacity: 0,
                scale: 0.2,
                scrollTrigger: {
                    trigger: caseStudySlider,
                    start: "top bottom",
                    scrub: 0.5,
                    toggleActions: "play reset reverse reset",
                },
            })
            .from(section5, {
                opacity: 0,
                scale: 0.7,
                background: "white",
                scrollTrigger: {
                    trigger: section5Initial,
                    scrub: 0.5,
                    start: "top bottom",
                    end: "top center",
                    toggleActions: "play reset reverse reset",
                },
            })
            .from(lastSectionLine1, {
                opacity: 0,
                yPercent: 100,
                scale: 1.7,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: section5,
                    end: "top center",
                    scrub: 0.5,
                },
            })
            .from(
                lastSectionLine2,
                {
                    opacity: 0,
                    yPercent: 100,
                    scale: 2,
                    ease: Power3.easeInOut,
                    scrollTrigger: {
                        trigger: lastSectionLine1,
                        end: "top center",
                        scrub: 1,
                    },
                },
                "+=0.5"
            )
            .from(contactBtn, {
                opacity: 0,
                yPercent: -100,
                scale: 0.6,
                ease: Power3.easeInOut,
                scrollTrigger: {
                    trigger: lastSectionLine2,
                    end: "top center",
                    scrub: 1,
                },
            });
        setTimeout(() => {
            document.querySelector("main.home").style.opacity = "1";
        }, 1000);
    }, []);

    useEffect(() => {
        CaseStudyTl.from(caseStudyImg, {
            duration: 1.5,
            ease: Power3.easeOut,
            opacity: 0,
            scale: 0.9,
        }).from(
            caseStudyTitle,
            {
                duration: 0.5,
                xPercent: -10,
                scale: 0.9,
                opacity: 0,
            },
            "-=0.5"
        );
    }, [caseImgs]);

    const handleCaseClick = (event) => {
        const inner = event.target.innerHTML;
        const currentImgsOrder = caseImgs;
        const currentTitleOrder = caseTitles;
        if (inner === "keyboard_arrow_left") {
            currentImgsOrder.push(currentImgsOrder.shift());
            currentTitleOrder.push(currentTitleOrder.shift());
        }
        if (inner === "keyboard_arrow_right") {
            currentImgsOrder.unshift(currentImgsOrder.pop());
            currentTitleOrder.unshift(currentTitleOrder.pop());
        }
        setCaseImgs([...currentImgsOrder]);
        setCaseTitles([...currentTitleOrder]);
    };

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
                            One Stop Solution for all Your
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
                    <div className="section2-end">
                        <p ref={(el) => (line1 = el)}>
                            We have delivered custom-made, high-impact solutions
                            to a host of clients.
                        </p>
                        <p ref={(el) => (line2 = el)} className="find-more">
                            Find Out More.
                        </p>
                        <div
                            ref={(el) => (section3Initial = el)}
                            className="section-3-initial"
                        ></div>
                    </div>
                    <img src={side} alt="decoration" className="side-attr-1" />
                    <img src={side} alt="decoration" className="side-attr-2" />
                </section>
                <section className="section3" ref={(el) => (section3 = el)}>
                    <h1
                        className="associates"
                        ref={(el) => (ourAssociates = el)}
                    >
                        Our <br />
                        Associates
                    </h1>
                    <div
                        ref={(el) => (ourAssociatesList = el)}
                        className="associate-logos"
                    >
                        <img
                            className="associate-logo-img"
                            alt="hp"
                            src={associate1}
                        />
                        <img
                            className="associate-logo-img"
                            alt="hp"
                            src={associate1}
                        />
                        <img
                            className="associate-logo-img"
                            alt="hp"
                            src={associate1}
                        />
                        <img
                            className="associate-logo-img"
                            alt="hp"
                            src={associate1}
                        />
                        <img
                            className="associate-logo-img"
                            alt="hp"
                            src={associate1}
                        />
                        <img
                            className="associate-logo-img"
                            alt="hp"
                            src={associate1}
                        />
                        <img
                            className="associate-logo-img"
                            alt="hp"
                            src={associate1}
                        />
                        <img
                            className="associate-logo-img"
                            alt="hp"
                            src={associate1}
                        />
                        <img
                            className="associate-logo-img"
                            alt="hp"
                            src={associate1}
                        />
                        <img
                            className="associate-logo-img"
                            alt="hp"
                            src={associate1}
                        />
                    </div>
                </section>
                <section className="section4">
                    <h1 className="case-study-title" ref={(el) => (line3 = el)}>
                        We Have Built Highly Optimised Solutions Before
                        <br />
                        and, We Can Do The Same For You.
                    </h1>
                    <div
                        className="case-study-slider"
                        ref={(el) => (caseStudySlider = el)}
                    >
                        <div className="case-study">
                            <img
                                ref={(el) => (caseStudyImg = el)}
                                className="case-study-img"
                                src={caseImgs[0]}
                                alt="inventory management"
                            />
                            <div className="case-study-content">
                                <h3 ref={(el) => (caseStudyTitle = el)}>
                                    {caseTitles[0]}
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat
                                </p>
                            </div>
                            <a className="case-study-link">View Case Study</a>
                        </div>

                        <i
                            className="medium material-icons back-arrow"
                            onClick={handleCaseClick}
                        >
                            keyboard_arrow_left
                        </i>
                        <i
                            className="medium material-icons fwd-arrow"
                            onClick={handleCaseClick}
                        >
                            keyboard_arrow_right
                        </i>
                    </div>
                </section>
                <div className="transition-back">
                    <div className="section5-initial"></div>
                    <div
                        className="section5-initial-2"
                        ref={(el) => (section5Initial = el)}
                    ></div>
                </div>

                <section className="section-5" ref={(el) => (section5 = el)}>
                    <img
                        className="left-side-attr-1"
                        src={side2}
                        alt="side decoration"
                    />
                    <img
                        className="left-side-attr-2"
                        src={side2}
                        alt="side decoration"
                    />
                    <div className="last-section-heading">
                        <h1
                            className="last-section-title"
                            ref={(el) => (lastSectionLine1 = el)}
                        >
                            We are ready to fast track your ideas into <br />
                            real world projects.
                        </h1>
                        <h2
                            className="last-section-subtitle"
                            ref={(el) => (lastSectionLine2 = el)}
                        >
                            With the help our associate companies, there is no
                            idea that will remain just a pipedream. So hop on
                            board and get started with your dream project!
                        </h2>
                        <button
                            ref={(el) => (contactBtn = el)}
                            className="contact"
                        >
                            Get In Touch
                        </button>
                    </div>
                </section>
                <footer className="footer">
                    <h1 className="footer-brand">Brand Name</h1>
                    <div className="col-footer">
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Partners</p>
                    </div>
                    <div className="col-footer">
                        <p>In the News</p>
                        <p>Our Policies</p>
                        <p>IOT Services</p>
                    </div>
                    <div className="col-footer">
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                    </div>
                    <p className="copyright-logo">
                        &#169;2020 Brand Name. All Rights Reserved.
                    </p>
                </footer>
            </main>
        </div>
    );
};

export default Home;
