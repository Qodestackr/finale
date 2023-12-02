import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Create a custom Axios instance with default configuration.
 * @param config Additional configuration to be used for the instance.
 * @returns Custom Axios instance.
 */
export function createAxiosInstance(
    config: AxiosRequestConfig = {}
): AxiosInstance {
    return axios.create({
        method: "GET",
        baseURL: "http://localhost:8000",
        ...config,
    });
}

/**
 * Axios instance with default settings.
 * Used for making general API requests.
 */
export const axiosDefaultInstance = createAxiosInstance({});

/**
 * Axios instance for private API requests.
 * Includes authentication token and other necessary headers.
 */
export const axiosPrivateInstance = createAxiosInstance({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

/**
 * Global response interceptor for error handling.
 */
axiosDefaultInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        // Transform any relevant error data here if needed
        throw error;
    }
);

/**
 * Request interceptor to add an authentication token.
 */
axiosDefaultInstance.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {
        const authToken = getAuthTokenFromLocalStorage(); // Replace with your logic

        if (authToken) {
            if (!config.headers) {
                config.headers = {}; // Initialize headers if not defined
            }
            config.headers["Authorization"] = `Bearer ${authToken}`;
        }

        return config;
    }
);

/**
 * Get authentication token from local storage.
 * @returns Authentication token or null if not available.
 */
function getAuthTokenFromLocalStorage(): string | null {
    // Implement your logic to retrieve the token from local storage
    // Return the token or null if not available
    return localStorage.getItem("authToken");
}
