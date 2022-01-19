import { useEffect, useState } from "react";

export default function useRequest(request) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState('')


    useEffect(() => {
        setLoading(true)
        request()
            .then(res => setData(res.data))
            .catch(err => setErr(err))
            .finally(() => setLoading(false))
    }, [])

    return [data, loading, err]
}