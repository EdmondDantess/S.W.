import React from 'react';
import preloader from '../../assets/images/preloader.gif';

export const Preloader = React.memo(() => {
        return (
            <div style={{position: 'absolute'}}>
                <img src={preloader} alt="loading...." style={{height: '100px'}}/>
            </div>
        );
    }
)
