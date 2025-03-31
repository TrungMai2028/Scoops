import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem('preferred-theme') || 'forest', // Default theme
  setTheme: (theme) => set({ theme }),
}));