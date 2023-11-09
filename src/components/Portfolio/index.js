import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    };

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {portfolio.map((port, idx) => {
                    return (
                        <div className="project-box" key={idx}>
                            <img src={port.image} className="portfolio-image" alt="portfolio" />
                            <div className="content">
                                <p className="Real-time Object Detection and Classification">{port.name}</p>
                                <p className="Object Detection & Classification: Employs YOLO (You Only Look Once) for real-time object detection and
                                    classification.
                                    • Video Input Versatility: Processes video streams from both webcams and video files for versatile input sources.
                                    • Precise Object Recognition: Swiftly identifies a variety of objects within the video feed.
                                    • Informative Visual Feedback: Enhances object detection with bounding boxes and labels, displaying class names
                                    and confidence scores.
                                    • Performance Metrics: Computes and showcases the Frames Per Second (FPS) achieved by the real-time object
                                    detection process.
                                    • User-Friendly Interface: Offers a user-friendly interface for intuitive real-time object recognition.">{port.description}
                                </p>
                                <button
                                    className="btn"
                                    onClick={() => window.open(port.url)}
                                >
                                    View Project
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">Portfolio</h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Portfolio;
