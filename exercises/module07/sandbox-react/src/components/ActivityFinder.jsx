import { useState, useEffect } from "react";
function ActivityFinder() { // Fetches a random activity

    const [participants, setParticipants] = useState(1);
    const [activity, setActivity] = useState('');

    useEffect(() => {

        console.log("Running effect, with internal validation checks...");
        let ignore = false; // flag allowing us to ignore result

        fetch('https://www.boredapi.com/api/activity?' +
            'participants=' + participants)
            .then(response => response.json())
            .then(json => {
                // only update state if the effect is still valid
                // ie. the dependency hasn't changed since the request
                if (!ignore) setActivity(json.activity);
            });

            // providing a cleanup function which runs when unmounted
            // or dependencies change
            return () => {
                ignore = true;
                console.log("Cleanup of effect has been completed.");
            }

        // note the array arg is akin to a state
        // change watcher - if it is empty, nothing to 
        // look for changes against.
        // in this case, the effect depends on 'participants',
        // and will be run when this state is changed!
    }, [participants]);

    return (
        <div className="ActivityFinder componentBox">
            <h3>Activity Finder</h3>
            <label>Choose number of participants:
                <select value={participants}
                    onChange={e => setParticipants(e.target.value)}>
                    <option>1</option><option>2</option><option>3</option>
                </select>
            </label>
            <div><strong>Suggested Activity: </strong>{activity}</div>
        </div>
    )
}

export default ActivityFinder;
// ++ Reference https://www.boredapi.com/documentation and add a
// new dropdown to suggest an activity based on type