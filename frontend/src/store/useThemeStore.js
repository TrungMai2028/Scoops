import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem('preferred-theme') || 'valentine', // Default theme
  setTheme: (theme) => set({ theme }),
}));