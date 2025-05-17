import { useState } from 'react';
function App(){
    const {
        petState,
        mood,
        achievements,
        feed,
        play,
        clean,
        sleep
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