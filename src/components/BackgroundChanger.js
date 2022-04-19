import React from 'react'
import ColorChanger from './ColorChanger'
import '../stylesheets/backgroundchanger.css'

export default function BackgroundChanger({ setBackgroundStyle }) {
    return (
        <div className='background-changer'>
            <ColorChanger colorStyle='background-black' colorName='BLACK' setBackgroundStyle={setBackgroundStyle} />
            <ColorChanger colorStyle='background-red' colorName='RED' setBackgroundStyle={setBackgroundStyle} />
            <ColorChanger colorStyle='background-green' colorName='GREEN' setBackgroundStyle={setBackgroundStyle} />
            <ColorChanger colorStyle='background-blue' colorName='BLUE' setBackgroundStyle={setBackgroundStyle} />
            <ColorChanger colorStyle='background-purple' colorName='PURPLE' setBackgroundStyle={setBackgroundStyle} />
        </div>
    )
}