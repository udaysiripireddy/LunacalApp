import React, { useState } from "react";
import "./SecondComponent.css";

const images = [
    "https://lunacal-app.vercel.app/images/image1.jpg",
    "https://lunacal-app.vercel.app/images/image2.jpg",
    "https://lunacal-app.vercel.app/images/image3.jpg",
    "https://lunacal-app.vercel.app/images/image4.jpg",
];

const GalleryComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleAddImage = () => {
        alert("Add image functionality to be implemented");
    };

    return (
        <div className="gallery-container">
            <div className="gallery-header">
                <div className="gallery-title">Gallery</div>
                <button className="add-image-btn" onClick={handleAddImage}>
                    ADD IMAGE
                </button>
                <div className="gallery-navigation">
                    <button className="nav-btn" onClick={handlePrev}>
                        &lt;
                    </button>
                    <button className="nav-btn" onClick={handleNext}>
                        &gt;
                    </button>
                </div>
            </div>

            <div className="gallery-images">
                <img src={images[currentIndex]} alt="Current" className="gallery-image" />
            </div>


        </div>
    );
};

export default GalleryComponent;
