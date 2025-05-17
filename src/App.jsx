import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { useEffect } from 'react';
import PetDisplay from './components/PetDisplay';
import usePet from './hooks/usePet';
import StatusBars from './components/StatusBars';
import ActionButtons from './components/ActionButtons';
function App(){
    const {
        petState,
        mood,
        achievements,
        feed,
        play,
        clean,
        sleep,
    } = usePet();
    return (
        <div>
            <PetDisplay
                stats={petState.stats}
                mood={mood}
                activity={petState.activity}
            />
            <StatusBars stats={petState.stats} />
            <ActionButtons
                feed={feed}
                play={play}
                clean={clean}
                sleep={sleep}
            />
        </div>
    );
}

export default App;