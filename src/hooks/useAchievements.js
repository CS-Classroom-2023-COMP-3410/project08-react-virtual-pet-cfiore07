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