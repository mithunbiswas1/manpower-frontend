// src/redux/endPoints/url.js

export const baseUriBackend = "http://localhost:8000/";

// API Base
export const API_BASE_URL = baseUriBackend + "api/v1/";

// All Endpoints URL
export const BANNER_URL = API_BASE_URL + "get-all-bannar";

export const CLIENTS_URL = API_BASE_URL + "get-all-clients";

export const TESTIMONIALS_URL = API_BASE_URL + "get-all-testimonial";

export const PROJECTS_URL = API_BASE_URL + "get-all-projects";

export const CREATE_CV_URL = API_BASE_URL + "create-cv";

export const CREATE_APPLICATION_URL = API_BASE_URL + "create-application";

export const JOBS_URL = API_BASE_URL + "all-jobs";

export const JOBS_SINGLE_URL = API_BASE_URL + "single-job";

export const CREATE_CONTACT_URL = API_BASE_URL + "create-contact";

export const CREATE_QUOTATION_URL = API_BASE_URL + "create-quotation";

export const CREATE_BOOKING_URL = API_BASE_URL + "create-booking";

export const BUSINESS_SETTINGS = API_BASE_URL + "get-bs";

export const SERVICES_URL = API_BASE_URL + "get-all-service";
