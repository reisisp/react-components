import { useState } from "react"

export const useFetching = (cb) => {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState('')

    const fetching = async (...args) => {
        try {
            setLoading(true);
            await cb(...args)
        }
        catch (e) {
            setErr(e.message);
        } finally {
            setLoading(false);
        }
    }

    return [fetching, loading, err]
}