import { useState } from 'react';
function App(){
    
    const [petStats, setPetStats] = useState({
        hunger: 80,
        energy: 75,
        happiness: 90,
        health: 85,
        cleanliness: 70,
        age: 0,
        bond: 50
    });

    const [petActivity, setPetActivity] = useState(null)

    const [lastInteracted, setLastInteracted] = useState({/*get timestamp of last button press*/})

    const [lastVisited, setLastVisited] = useState(Date.now())
}

export default App;