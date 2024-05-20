import { useState } from "react"

function Emoji() {

    // dictionary of emoji name to unicode
    const emojiDictionary = {
        'grinning_face': '\u{1F600}',
        'concerned_face': '\u{1F928}'
    }

    // track the emoji state
    const [emoji, setEmoji] = useState(emojiDictionary.grinning_face);

    // toggle between moods, changing the emoji state
    function toggleMood() {
        if (emoji == emojiDictionary.grinning_face) {
            setEmoji(emojiDictionary.concerned_face)            
        } else if (emoji == emojiDictionary.concerned_face) {
            setEmoji(emojiDictionary.grinning_face);
        }
    }

    return (
        <>
            <h2>
                {emoji}
            </h2>
            <div>
                <button onClick={toggleMood}>Change mood</button>
            </div>
        </>
    )
}

export default Emoji;