// Import the axios library to make HTTP requests to the backend
import axios from 'axios';

// Define the base URL for the backend API
// Use environment variables for production flexibility, defaulting to local port 5000
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://crccf-carrerpage-backend.onrender.com/api';

// Create an axios instance with default configuration
// This instance can be reused across the application
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to attach the JWT token to outgoing requests
// This ensures protected routes (like posting jobs) work correctly
api.interceptors.request.use((config) => {
  // Retrieve the authentication token from local storage
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  
  if (token) {
    // If a token exists, add it to the Authorization header in Bearer format
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  // Return the modified configuration
  return config;
});

// Auth API methods for user registration, login, and profile fetching
export const authApi = {
  // Register a new user
  register: (userData: any) => api.post('/auth/register', userData),
  // Login an existing user
  login: (credentials: any) => api.post('/auth/login', credentials),
  // Get the current user's profile info
  getProfile: () => api.get('/auth/profile'),
};

// Job API methods for listing and managing career openings
export const jobApi = {
  // Fetch a list of all jobs with optional filters (category, search)
  getJobs: (params?: any) => api.get('/jobs', { params }),
  // Fetch details for a specific job by its ID
  getJobById: (id: string) => api.get(`/jobs/${id}`),
  // Create a new job listing (Admin only)
  createJob: (jobData: any) => api.post('/jobs', jobData),
  // Update an existing job (Admin only)
  updateJob: (id: string, jobData: any) => api.put(`/jobs/${id}`, jobData),
  // Delete a job (Admin only)
  deleteJob: (id: string) => api.delete(`/jobs/${id}`),
};

// Application API methods for submitting resumes and checking status
export const appApi = {
  // Submit a new job application
  submitApplication: (appData: any) => api.post('/applications', appData),
  // Fetch all applications (Admin only)
  getApplications: () => api.get('/applications'),
  // Check the status of applications submitted by a specific email
  checkStatus: (email: string) => api.get(`/applications/status/${email}`),
  // Update the status of an application (Admin only)
  updateStatus: (id: string, status: string) => api.put(`/applications/${id}`, { status }),
};

// Export the default axios instance for general use
export default api;
