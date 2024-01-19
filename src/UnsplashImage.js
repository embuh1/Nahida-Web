// src/components/UnsplashImage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UnsplashImage = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/photos/random', {
                    params: {
                        client_id: 'M0ajjgkyWJh0B1pOTlL6axG9EFBiKF2n5EuIlYOAP9E',
                    },
                });

                setImageUrl(response.data.urls.regular);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, []);

    return (
        <div>
            {imageUrl && <img src={imageUrl} alt="Unsplash" />}
        </div>
    );
};

export default UnsplashImage;
