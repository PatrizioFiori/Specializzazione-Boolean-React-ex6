import { useState, useEffect } from "react";

function useDate() {

    const [dateTime, setDateTime] = useState(new Date());
    const [stopTimer, setStopTimer] = useState(false);

    useEffect(() => {
        if (stopTimer) return;

        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, [stopTimer]);

    return { dateTime, stopTimer, setStopTimer };
}

export default useDate;