import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  age: string;
  gender: string;
  fruit: string;
  email: string;
  mob: string;
  scanner_id: string;
  qrcode: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  images: string[];
  addImage: (url: string) => void;
  clearImages: () => void;
}

const userStore = create<UserState>()(
  persist(
    (set) => ({
      user: {
        name: "Ganesh Bhosle3",
        age: "21-ABOVE",
        gender: "MALE",
        fruit: "mango",
        email: "gane123@gmail.com",
        mob: "9765164723",
        scanner_id: "101",
        qrcode: "222222",
      },
      setUser: (user) => set(() => ({ user })),

      images: [],
      addImage: (url) =>
        set((state) => {
          const updatedImages =
            state.images.length >= 3
              ? [...state.images.slice(1), url]
              : [...state.images, url];
          return { images: updatedImages };
        }),
      clearImages: () => set(() => ({ images: [] })),
    }),
    {
      name: "user-store",
      partialize: (state) => ({ user: state.user, images: state.images }),
    }
  )
);

export default userStore;
