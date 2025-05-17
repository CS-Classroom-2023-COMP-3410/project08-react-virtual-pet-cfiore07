import { useState } from "react";
import { useEffect } from "react";

import useLocalStorage from "./useLocalStorage";
import useTimePassage from "./useTimePassage";
import useAchievements from "./useAchievements";


function usePet() {

  const [petState, setPetState] = useState({
    stats: {
      health: 80,
      hunger: 80,
      energy: 75,
      happiness: 90,
      cleanliness: 70,
      age: 0,
      bond : 50
    },
    activity: null,
    age: 'baby',
    lastVisited: Date.now()
  });

  
  
  useLocalStorage(petState, setPetState);
  useTimePassage(petState, setPetState);
  const { achievements, notification, trackInteraction } = useAchievements(petState);

  const mood = calculateMood(petState.stats, petState.activity); //implement calculateMood

    // State and logic implementation...
    function feed() {
      setPetState(prev => ({
        ...prev,
        stats: {
          ...prev.stats,
          hunger: Math.min(prev.stats.hunger + 20, 100),
          energy: Math.min(prev.stats.energy + 5, 100),
          happiness: Math.min(prev.stats.happiness + 5, 100),
          bond: Math.min(prev.stats.bond + 3, 100)
        },
        activity: 'eating',
        lastInteraction: Date.now()
      }));

      trackInteraction('feed'); //implement trackInteraction


      setTimeout(() => {
        setPetState(prev => ({
        ...prev,
        activity: null
        }));
        }, 3000);
    }

    function sleep() {
      setPetState(prev => ({
        ...prev,
        stats: {
          ...prev.stats,
          energy: Math.min(prev.stats.energy + 5, 100),
        },
        activity: 'sleeping',
        lastInteraction: Date.now()
      }));

      trackInteraction('sleep');


      setTimeout(() => {
        setPetState(prev => ({
        ...prev,
        activity: null
        }));
        }, 3000);
    }

    function play() {
      setPetState(prev => ({
        ...prev,
        stats: {
          ...prev.stats,
          energy: Math.min(prev.stats.energy - 5, 100),
          happiness: Math.min(prev.stats.happiness + 5, 100),
          bond: Math.min(prev.stats.bond + 3, 100)
        },
        activity: 'playing',
        lastInteraction: Date.now()
      }));

      trackInteraction('play'); //implement trackInteraction


      setTimeout(() => {
        setPetState(prev => ({
        ...prev,
        activity: null
        }));
        }, 3000);
    }

    function clean() {
      setPetState(prev => ({
        ...prev,
        stats: {
          ...prev.stats,
          health: Math.min(prev.stats.health - 3, 100),
          cleanliness: Math.min(prev.stats.hunger + 20, 100),
          bond: Math.min(prev.stats.bond + 2, 100)
        },
        activity: 'cleaning',
        lastInteraction: Date.now()
      }));

      trackInteraction('clean'); //implement trackInteraction


      setTimeout(() => {
        setPetState(prev => ({
        ...prev,
        activity: null
        }));
        }, 3000);
    }

    function calculateMood(stats, activity) {
      if (activity === 'sleeping') {
        return 'sleeping';
      } 
      else if (stats.hunger < 50) {
        return 'hungry';
      } 
      else if (stats.energy < 50) {
        return 'tired';
      }
      else if (stats.happiness < 40) {
        return 'sad';
      }  
      else {
        return 'happy';
      }
    }

    return {
      petState,
      mood,
      achievements,
      notification,
      feed,
      play,
      clean,
      sleep,
    };

  }
export default usePet;
