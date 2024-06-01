// hook for extracting bitcoin rate data from external api

import { useEffect } from "react"
import { useState } from "react";

export function useData(url) {
    // hold fetched json data
    const [data, setData] = useState(null)

    // effect hook to fetch the data
    useEffect(() => {
        console.log('running effect');

        // for preventing race condition
        // https://reacttraining.com/blog/useEffect-cleanup
        let ignore = false;

        // effect
        if (url) {
            console.log('doing fetch');
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (!ignore) {
                        const currKey = Object.keys(json.bitcoin)[0];
                        // migdataht need to flesh this out - return reset method??
                        setData(json.bitcoin[currKey]);
                    }
                }), { mode: 'cors' };
        };

        // cleanup when umounted || when dependency array changes
        return () => {
            console.log('cleaning up');
            // this will prevent the currently executing effect from setting state when the promise above resolves!
            ignore = true;
        }

        // dependencies
    }, [url]) // only run effect when url changes

    return data;
}