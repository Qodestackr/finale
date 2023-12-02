export const LOGIN_URL = "/api/auth/login";
export const LOGOUT_URL = "/api/auth/logout";
export const REGISTER_URL = "/api/auth/register";
export const RESET_PASSWORD_URL = "/api/auth/reset-password";
export const CHANGE_PASSWORD_URL = "/api/auth/change-password";

export const MATATUS_URL = "/api/matatus";
export const SINGLE_MATATU_URL = (matatuId: string) => `/api/matatus/${matatuId}`;
export const MATATU_ROUTE_URL = (matatuId: string) => `/api/matatus/${matatuId}/route`;

export const ROUTES_URL = "/api/routes";
export const SINGLE_ROUTE_URL = (routeId: string) => `/api/routes/${routeId}`;
export const PLAN_TRIP_URL = "/api/routes/plan";

export const REAL_TIME_URL = "/api/real-time";
export const SINGLE_REAL_TIME_URL = (matatuId: string) => `/api/real-time/${matatuId}`;

export const ANALYTICS_URL = "/api/analytics";
export const REPORTS_URL = "/api/reports";

export const PREFERENCES_URL = "/api/preferences";
export const FAVORITES_URL = "/api/preferences/favorites";

export const NOTIFICATIONS_URL = "/api/notifications";
export const NOTIFICATION_SETTINGS_URL = "/api/notifications/settings";

export const ADMIN_URL = "/api/admin";
export const ADMIN_MATATUS_URL = "/api/admin/matatus";
export const ADMIN_ROUTES_URL = "/api/admin/routes";
export const ADMIN_USERS_URL = "/api/admin/users";


// Favorites
export const ADD_FAVORITE_URL = (userId: string) => `/api/favorites/add/${userId}`;
export const REMOVE_FAVORITE_URL = (userId: string, favoriteId: string) => `/api/favorites/remove/${userId}/${favoriteId}`;
export const GET_FAVORITES_URL = (userId: string) => `/api/favorites/${userId}`;

// Offline Caching
export const CACHE_URL = "/api/cache";
export const CLEAR_CACHE_URL = "/api/cache/clear";

// Analytics
export const TRACK_EVENT_URL = "/api/analytics/track-event";
export const GET_ANALYTICS_URL = "/api/analytics/get";

// Notifications
// export const GET_NOTIFICATIONS_URL = (userId: string) => `/api/notifications/${userId}`;
// export const MARK_NOTIFICATION_READ_URL = (notificationId: string) => `/api/notifications/mark-read/${notificationId}`;
// export const DELETE_NOTIFICATION_URL = (notificationId: string) => `/api/notifications/delete/${notificationId}`;

// User Profile
export const USER_PROFILE_URL = (userId: string) => `/api/user/${userId}`;

// Search
export const SEARCH_URL = "/api/search";

// Analytics Reports
export const GET_ANALYTICS_REPORTS_URL = "/api/analytics/reports";
export const GENERATE_ANALYTICS_REPORT_URL = "/api/analytics/reports/generate";