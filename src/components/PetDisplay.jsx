import React from 'react';
import ReactDOM from 'react-dom/client';
function PetDisplay({ stats, mood, activity }){
    const GROWTH_STAGES = {
      baby: { min: 0, max: 5, emoji: '🥚' },   // First 5 minutes
      child: { min: 6, max: 10, emoji: '🐣' },  // Next 5 minutes
      teen: { min: 11, max: 20, emoji: '🐥' },  // Next 10 minutes
      adult: { min: 21, max: Infinity, emoji: '🐤' } // After 20 minutes
    };

    let stage = 'baby';
    if (stats.age >= GROWTH_STAGES.adult.min) {
        stage = 'adult';
    }
    else if (stats.age >= GROWTH_STAGES.teen.min) {
        stage = 'teen';
    }
    else if (stats.age >= GROWTH_STAGES.child.min) {
        stage = 'child';
    }

    return (
        <div className="pet-display">
            <div className="pet-emoji">{GROWTH_STAGES[stage].emoji}</div>
            <div className="pet-info">
                <div className="pet-stage"> {stage}</div>
                <div className="pet-mood">Mood: {mood}</div>
            </div>
        </div>
    );
}

export default PetDisplay;