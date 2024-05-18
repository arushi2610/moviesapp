import React from 'react';

const MovieListHeading = (props) => {
    return (
        <div className='col'>
            <img src='/Images/logo.jpg' alt='logo' className='logo' />
            <h1>{props.heading}</h1>
        </div>
    );
};

export default MovieListHeading;