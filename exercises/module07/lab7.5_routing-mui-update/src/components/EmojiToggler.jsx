import { useState } from "react"

// access the context hook in consumer components
import { useMoodContext } from "../context/MoodContext";

function EmojiToggler() {

    // consume the MoodContext
    const { currentMood, handleToggleMood } = useMoodContext();

    // mood to emoji unicode
    const emojiDictionary = {
        'happy': '\u{1F600}',
        'concerned': '\u{1F928}'
    }

    return (
        <>
            <h2>
                {/* get the emoji based on the mood in the context */}
                {emojiDictionary[currentMood]}
            </h2>
            <div>
                {/* toggle the mood stored in the context */}
                <button onClick={() => handleToggleMood({})}>Toggle mood</button>
            </div>

            {/* exxample to explicitly alter the context */}
            <div>
                {/* toggle the mood stored in the context */}
                <button onClick={() => handleToggleMood({ mood: 'happy' })}>Make happy</button>
            </div>
            <div>
                {/* toggle the mood stored in the context */}
                <button onClick={() => handleToggleMood({ mood: 'concerned' })}>Make concerned</button>
            </div>
        </>
    )
}

export default EmojiToggler;