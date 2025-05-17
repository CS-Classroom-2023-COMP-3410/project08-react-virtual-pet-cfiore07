import { useState } from "react";
import { useEffect } from "react";
function useAchievements(petState) {
    const [achievements, setAchievements] = useState([
        { id: 'firstFeed', unlocked: false, name: 'First Meal' },
        { id: 'fullSleep', unlocked: false, name: 'Well Rested' },
        { id: 'clean5Times', unlocked: false, name: 'Squeaky Clean' },
        { id: 'fullBond', unlocked: false, name: 'Best Friends' },
        { id: 'teenStage', unlocked: false, name: 'Growing Up' },
        { id: 'adultStage', unlocked: false, name: 'Adulthood' },
        { id: 'allStatsAbove80', unlocked: false, name: 'Balanced Diet' },
        { id: 'play10Times', unlocked: false, name: 'Playful Pal' },
        { id: 'secret', unlocked: false, name: '?????' },
        //add extra achievements?
    ]);
    const [notification, setNotification] = useState(null);
    const [stats, setStats] = useState({
        feedCount: 0,
        playCount: 0,
        cleanCount: 0,
        sleepCount: 0
    });
    // Check for newly unlocked achievements
    useEffect(() => {
        checkAchievements();
    }, [petState, stats]);
    function checkAchievements() {
        // Check if any achievements should be unlocked
        if(stats.feedCount >= 1 && achievements[0].unlocked === false) {
            setAchievements(prev => {
                const newAchievements = [...prev];
                newAchievements[0].unlocked = true;
                return newAchievements;
            });
            setNotification('Achievement Unlocked: First Meal!');
        }
        if(petState.energy >= 100 && achievements[1].unlocked === false) {
            setAchievements(prev => {
                const newAchievements = [...prev];
                newAchievements[1].unlocked = true;
                return newAchievements;
            });
            setNotification('Achievement Unlocked: Well Rested!');
        }
        if(stats.cleanCount >= 5 && achievements[2].unlocked === false) {
            setAchievements(prev => {
                const newAchievements = [...prev];
                newAchievements[2].unlocked = true;
                return newAchievements;
            });
            setNotification('Achievement Unlocked: Squeaky Clean!');
        }
        if(petState.bond >= 100 && achievements[3].unlocked === false) {
            setAchievements(prev => {
                const newAchievements = [...prev];
                newAchievements[3].unlocked = true;
                return newAchievements;
            });
            setNotification('Achievement Unlocked: Best Friends!');
        }
        if(petState.age >= 25 && achievements[4].unlocked === false) {
            setAchievements(prev => {
                const newAchievements = [...prev];
                newAchievements[4].unlocked = true;
                return newAchievements;
            });
            setNotification('Achievement Unlocked: Growing Up!');
        }
        if(petState.age >= 50 && achievements[5].unlocked === false) {
            setAchievements(prev => {
                const newAchievements = [...prev];
                newAchievements[5].unlocked = true;
                return newAchievements;
            });
            setNotification('Achievement Unlocked: Adulthood!');
        }
        if(petState.hunger >= 80 && petState.energy >= 80 && petState.happiness >= 80 && petState.cleanliness >= 80 && petState.age >= 1 && achievements[6].unlocked === false) {
            setAchievements(prev => {
                const newAchievements = [...prev];
                newAchievements[6].unlocked = true;
                return newAchievements;
            });
            setNotification('Achievement Unlocked: Balanced Diet!');
        }
        if(stats.playCount >= 10 && achievements[7].unlocked === false) {
            setAchievements(prev => {
                const newAchievements = [...prev];
                newAchievements[7].unlocked = true;
                return newAchievements;
            });
            setNotification('Achievement Unlocked: Playful Pal!');
        }

        
    }
    function trackInteraction(type) {
        // Count interactions for achievement tracking
        setStats(prev => {
            if (type === 'feed') {
                return { ...prev, feedCount: prev.feedCount + 1 };
            }
            if (type === 'play') {
                return { ...prev, playCount: prev.playCount + 1 };
            }
            if (type === 'clean') {
                return { ...prev, cleanCount: prev.cleanCount + 1 };
            }
            if (type === 'sleep') {
                return { ...prev, sleepCount: prev.sleepCount + 1 };
            }
            return prev;
        });
    }
    return { achievements, notification, trackInteraction };
}

export default useAchievements;