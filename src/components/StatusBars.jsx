import React from 'react';
import ReactDOM from 'react-dom/client';
function StatusBars({ stats }) {
    return (
        <div className="status-bars">
            <div className="status-bar">
                <div className="status-label">Hunger: {stats.hunger}</div>
            </div>
            <div className="status-bar">
                <div className="status-label">Energy: {stats.energy}</div>
            </div>
            <div className="status-bar">
                <div className="status-label">Happiness: {stats.happiness}</div>
            </div>
            <div className="status-bar">
                <div className="status-label">Cleanliness: {stats.cleanliness}</div>
            </div>
        </div>
    );
}

export default StatusBars;