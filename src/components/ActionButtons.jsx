import React from 'react';
import ReactDOM from 'react-dom/client';
function ActionButtons({ feed, play, clean, sleep, showAchievements }) {
    
    return (
        <div>
            <button onClick={() => feed()}>Feed</button>
            <button onClick={() => play()}>Play</button>
            <button onClick={() => clean()}>Clean</button>
            <button onClick={() => sleep()}>Sleep</button>
        </div>
    );
}

export default ActionButtons;