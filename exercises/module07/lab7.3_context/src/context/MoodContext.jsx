// mood context

import React from "react";
import { useContext } from "react";
import { useState } from "react";

// create a context object
const MoodContext = React.createContext();

// posssible moods
const moodDictionary = {
    'happy': 'happy',
    'concerned': 'concerned'
}

// context provider
export const MoodProvider = (props) => {
    const [currentMood, setCurrentMood] = useState(moodDictionary.happy);

    // toggle between moods (mode this is still a props object, but would conflict with existing props)
    const handleToggleMood = (mood) => {
        if (!mood.mood) {
            if (currentMood == moodDictionary.happy) {
                setCurrentMood(moodDictionary.concerned)
            } else if (currentMood == moodDictionary.concerned) {
                setCurrentMood(moodDictionary.happy);
            }
        }

        // handle explicit mood from context consumers
        if (mood.mood == 'happy') { setCurrentMood(moodDictionary.happy) };
        if (mood.mood == 'concerned') { setCurrentMood(moodDictionary.concerned) }
    }

    return (
        // return the provider component, alongside data we want context consumers to access
        <MoodContext.Provider value={{ currentMood, handleToggleMood }}>
            {/* childeren will be able to consume context */}
            {props.children}
        </MoodContext.Provider>
    )
}

// hook for consuming context
export const useMoodContext = () => {
    // need to pass a context object to the useContext hook
    return useContext(MoodContext)
}