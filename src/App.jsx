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

}

export default App;