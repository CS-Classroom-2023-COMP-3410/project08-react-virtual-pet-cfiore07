import { useEffect } from "react";

function useLocalStorage(petState, setPetState) {
    useEffect(() => {
        const savedPet = localStorage.getItem('petData');
        if(savedPet) {
            try {
                setPetState(JSON.parse(savedPet));
            }
            catch (error){
                console.log("Failed to parse data from local storage", error);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('petData', JSON.stringify(petState));
    }, [petState]);
}

export default useLocalStorage;