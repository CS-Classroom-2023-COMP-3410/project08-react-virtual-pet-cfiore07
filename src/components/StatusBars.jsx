import React from 'react';
import ReactDOM from 'react-dom/client';
function StatusBars({ stats }) {
    return (
        <div className="status-bars">
            <div className="status-bar">
                <div className="status-label">Hunger: {stats.hunger}</div>
                <div className="status-bar-container">
                    <div
                        className="status-bar-fill"
                        style={{
                            width: `${Math.max(0, Math.min(100, stats.hunger))}%`,
                            backgroundColor: 'rgb(255, 152, 0)'
                        }}
                    ></div>
                </div>
            </div>
            <div className="status-bar">
                <div className="status-label">Energy: {stats.energy}</div>
                <div className="status-bar-container">
                    <div
                        className="status-bar-fill"
                        style={{
                            width: `${Math.max(0, Math.min(100, stats.energy))}%`,
                            backgroundColor: 'rgb(33, 150, 243)'
                        }}
                    ></div>
                </div>
            </div>
            <div className="status-bar">
                <div className="status-label">Happiness: {stats.happiness}</div>
                <div className="status-bar-container">
                    <div
                        className="status-bar-fill"
                        style={{
                            width: `${Math.max(0, Math.min(100, stats.happiness))}%`,
                            backgroundColor: 'rgb(233, 30, 99)'
                        }}
                    ></div>
                </div>
            </div>
            <div className="status-bar">
                <div className="status-label">Health: {stats.health}</div>
                <div className="status-bar-container">
                    <div
                        className="status-bar-fill"
                        style={{
                            width: `${Math.max(0, Math.min(100, stats.health))}%`,
                            backgroundColor: 'rgb(76, 175, 80)'
                        }}
                    ></div>
                </div>
            </div>
            <div className="status-bar">
                <div className="status-label">Cleanliness: {stats.cleanliness}</div>
                <div className="status-bar-container">
                    <div
                        className="status-bar-fill"
                        style={{
                            width: `${Math.max(0, Math.min(100, stats.cleanliness))}%`,
                            backgroundColor: 'rgb(0, 188, 212)'
                        }}
                    ></div>
                </div>
            </div>
            <div className="status-bar">
                <div className="status-label">Bond: {stats.bond}</div>
                <div className="status-bar-container">
                    <div
                        className="status-bar-fill"
                        style={{
                            width: `${Math.max(0, Math.min(100, stats.bond))}%`,
                            backgroundColor: 'rgb(156, 39, 176)'
                        }}
                    ></div>
                </div>
            </div>
            <div className="pet-age">Age: {stats.age}</div>
        </div>
    );
}

export default StatusBars;