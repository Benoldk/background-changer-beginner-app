import React from 'react';
import '../stylesheets/backgroundchanger.css';

export default function ColorChanger({ colorStyle, setBackgroundStyle }) {
    return (
        <div className='color-changer'>
            <div className={`color ${colorStyle}`}
                onClick={() => setBackgroundStyle(colorStyle)}></div>
            {/* <div className='color-codes'>
                <div>RGB</div>
                <div>HEX</div>
            </div> */}
        </div>
    )
}