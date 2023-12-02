import { useEffect, useState } from "react";


export interface IValues {
    error: null | string;
    isOffline: boolean;
    isOnline: boolean;
}
const NOT_BROWSER_ENV_ERROR = "useOnlineStatus only works in a browser environment.";

const notABrowserEnv = typeof window === 'undefined';

const navigatorNotPresent = typeof navigator === 'undefined';


export const useOnlineStatus = () => {
    const [online, setOnline] = useState(typeof window !== "undefined" ? window.navigator.onLine : true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        if (typeof window === "undefined" || typeof navigator === "undefined") {
            setError(NOT_BROWSER_ENV_ERROR);
            return;
        }

        const handleStatusChange = () => {
            setOnline(navigator.onLine);
        };

        window.addEventListener("online", handleStatusChange);
        window.addEventListener("offline", handleStatusChange);

        return () => {
            window.removeEventListener("online", handleStatusChange);
            window.removeEventListener("offline", handleStatusChange);
        };
    }, []);

    return { online, error };
};
