import React from 'react'
import ColorChanger from './ColorChanger'
import '../stylesheets/backgroundchanger.css'

export default function BackgroundChanger({ setBackgroundStyle }) {
    return (
        <div className='background-changer'>
            <ColorChanger colorStyle='background-black' setBackgroundStyle={setBackgroundStyle} />
            <ColorChanger colorStyle='background-red' setBackgroundStyle={setBackgroundStyle} />
            <ColorChanger colorStyle='background-green' setBackgroundStyle={setBackgroundStyle} />
            <ColorChanger colorStyle='background-blue' setBackgroundStyle={setBackgroundStyle} />
            <ColorChanger colorStyle='background-purple' setBackgroundStyle={setBackgroundStyle} />
        </div>
    )
}