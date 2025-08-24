// src/redux/endPoints/url.js

export const baseUriBackend = "http://localhost:8000/";

// API Base
export const API_BASE_URL = baseUriBackend + "api/v1/";

// All Endpoints URL
export const BANNER_URL = API_BASE_URL + "get-all-bannar";
export const CLIENTS_URL = API_BASE_URL + "get-all-clients";
export const TESTIMONIALS_URL = API_BASE_URL + "get-all-testimonial";
export const CREATE_CV_URL = API_BASE_URL + "create-cv";
