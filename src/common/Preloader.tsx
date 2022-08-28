import React from 'react';
import preloader from '../assets/images/preloader.gif';

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt="loading...." style={{height: '100px'}}/>
        </div>
    );
};