// hook for extracting bitcoin rate data from external api

import { useEffect } from "react"

export function useData(url) {
    // hold fetched data (cache) locally inside the hook
    const [data, setData] = useState(null)

    // effect hook to fetch the data
    useEffect(() => {
        
    })
}