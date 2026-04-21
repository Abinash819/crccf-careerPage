import { create } from 'zustand';

// Define the shape of our job search state
interface JobState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

// Create the Zustand store
// Using "create" to initialize the store with a searchQuery and its setter
export const useJobStore = create<JobState>((set) => ({
  // Initialize searchQuery as an empty string
  searchQuery: '',
  // Function to update the search query state
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
