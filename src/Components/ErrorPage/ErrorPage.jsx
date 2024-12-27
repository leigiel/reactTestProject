import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center text-3xl font-bold'>
            <h1>This page is not Valid</h1>
            <Link to='/'><button>Go To Home</button></Link>
        </div>
    );
};

export default ErrorPage;