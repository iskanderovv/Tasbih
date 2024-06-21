import React, { useState } from 'react';
import './Tasbih.scss';
import countAudio from '../../audio/count.wav';
import vibrationAudio from '../../audio/vibration.mp3';

const Tasbih = () => {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    const [audioCount] = useState(new Audio(countAudio));
    const [audioVibration] = useState(new Audio(vibrationAudio))

    const playAudioCount = () => {
        audioCount.play();
    }

    const playAudioVibration = () => {
        audioVibration.play();
    }

    const handleCount = () => {
        setCount(prevCount => prevCount + 1);
        setTotal(prevCount => prevCount + 1);
        playAudioCount();

        if (count === 32 || count === 65 || count === 98) {
            playAudioVibration();
        }
        if (count === 99) {
            setCount(0);
        }
    }

    const handleReset = () => {
        setCount(0);
        setTotal(0);
    }

    return (
        <div className='tasbih'>
            <div className='tasbih__content'>
                <div className='tasbih-content__tools'>
                    <p className='tasbih-content-tools__total'>Total: {total}</p>
                    <button className='tasbih-content-tools__reset' onClick={handleReset}>Reset</button>
                </div>
                <h1 className='tasbih-content__counter'>{count}</h1>
                <div className='tasbih-content__button' onClick={handleCount}>
                    <i className="bi bi-chevron-up"></i>
                </div>
            </div>
        </div>
    );
}

export default Tasbih;
