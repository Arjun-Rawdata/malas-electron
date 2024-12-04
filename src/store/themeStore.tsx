import { create } from "zustand";

interface ThemeStore {
  theme: string;
  setTheme: (theme: string) => void;
}

const themeStore = create<ThemeStore>((set) => ({
  // strawberry, orange, kiwi, mango
  theme: "strawberry",
  setTheme: (theme: string) => set({ theme }),
}));

export default themeStore;
