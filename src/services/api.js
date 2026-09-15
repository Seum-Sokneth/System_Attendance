import axios from "axios";

const apiBaseUrl =
    import.meta.env.VITE_API_URL ||
    "https://system-attendace.onrender.com/api";

const api = axios.create({
    baseURL: apiBaseUrl,
});

// ===============================
// Axios Request Interceptor
// ===============================
api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    console.log("===== AXIOS REQUEST =====");
    console.log("URL:", config.baseURL + config.url);
    console.log("TOKEN:", token);

    // Don't send JWT to login/register
    const isAuthRequest =
        config.url?.includes("/auth/login") ||
        config.url?.includes("/auth/register");

    if (token && !isAuthRequest) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    console.log(
        "AUTH HEADER:",
        config.headers.Authorization
    );

    return config;
});

// ===============================
// Reports
// ===============================
api.getReports = (params) => {
    return api.get("/attendance/report", {
        params
    });
};

export default api;