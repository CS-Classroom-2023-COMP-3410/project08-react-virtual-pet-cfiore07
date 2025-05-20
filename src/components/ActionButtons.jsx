import React from 'react';
import ReactDOM from 'react-dom/client';
function ActionButtons({ feed, play, clean, sleep, toggleAchievements }) {
    
    return (
        <div>
            <div className="action-buttons">
                <button className="action-button " onClick={() => feed()}>
                    <div className="action-icon">🍔</div>
                    <div className="action-label">Feed</div>
                </button>
                <button className="action-button " onClick={() => play()}>
                    <div className="action-icon">🎮</div>
                    <div className="action-label">Play</div>
                </button>
                <button className="action-button " onClick={() => clean()}>
                    <div className="action-icon">🧼</div>
                    <div className="action-label">Clean</div>
                </button>
                <button className="action-button " onClick={() => sleep()}>
                    <div className="action-icon">😴</div>
                    <div className="action-label">Sleep</div>
                </button>
            </div>
            <div className="achievements-container">
                <button className="achievements-toggle" onClick={() => toggleAchievements()}>Show Achievements (1/8) </button>
            </div>
        </div>
    );
}

export default ActionButtons;