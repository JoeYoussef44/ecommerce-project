import React from 'react';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <div>
        <h1>How BeiruTreaT works</h1>
        <ul className='figures__item '>
            <figure className='figure'>
                <img
                src='images/manBox.png'
                className='figure-img img-fluid rounded shadow-3 mb-3'
                alt='...'
                />
                <figcaption className='figure-caption'>Choose your plan and start your snack adventure!</figcaption>
            </figure>
            <figure className='figure'>
                <img
                src='images/lebaneseTreat.png'
                className='figure-img img-fluid rounded shadow-3 mb-3'
                alt='...'
                />
                <figcaption className='figure-caption'>We hand-pick awesome, limited edition Lebanese snacks that change every month!</figcaption>
            </figure>
            <figure className='figure'> 
                <img
                src='images/manBox.png'
                className='figure-img img-fluid rounded shadow-3 mb-3'
                alt='...'
                />
                <figcaption className='figure-caption'>Try all kinds of Lebanese-exclusive snacks at home!</figcaption>
            </figure>
        </ul>
    </div>
  );
}