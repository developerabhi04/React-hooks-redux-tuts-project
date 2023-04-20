import React from 'react';
import ReactDOM from 'react-dom';

const name = "abhishek";
const lname = "kumar";

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();



ReactDOM.render(
    <>
        <h1>
            {`Hello, my name is ${name} ${lname}`}
        </h1>
        <p>
            todays date is = {currDate}
        </p>
        <p>
            current time is = {currTime}
        </p>
    </>,
    document.getElementById('root')
);