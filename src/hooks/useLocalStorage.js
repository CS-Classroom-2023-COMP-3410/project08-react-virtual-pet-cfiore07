import { useEffect } from "react";

function useLocalStorage(petState, setPetState) {
    useEffect(() => {
        const savedPet = localStorage.getItem('petData');
        if(savedPet) {
            try {
                setPetState(JSON.parse(savedPet));
            }
            catch (error){
                //implement handling the error
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('petData', JSON.stringify(petState));
    }, [petState]);
}