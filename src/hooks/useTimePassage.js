import { useEffect } from "react";

function useTimePassage(petState, setPetState) {
    useEffect(() => {
        if(petState.lastVisited) {
            const minutesElapsed = (Date.now() - petState.lastVisited) / (1000 * 60);
            if(minutesElapsed > 0){ 
                applyTimePassage(minutesElapsed); //implement applyTimePassage
            }
        }

        setPetState(prev => ({
            ...prev,
            lastVisited: Date.now()
        }));

        const interval = setInterval(() => {
            applyStatDecay();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    function applyStatDecay() {
        setPetState(prev => {
            const newStats = {...prev.stats };
            newStats.hunger = Math.max(newStats.hunger - 2, 0);
            newStats.energy = Math.max(newStats.energy - 1.5, 0);
            newStats.happiness = Math.max(newStats.happiness - 1, 0);
            newStats.cleanliness = Math.max(newStats.cleanliness - 1.5, 0);
            //more stat updates?
            
            return {
                ...prev,
                stats: newStats
            };
        });
    }

    function applyTimePassage(minutes) {
        //apply stat decay over long periods of time
    }
}


export default useTimePassage;