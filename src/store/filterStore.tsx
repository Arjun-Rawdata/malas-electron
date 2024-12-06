import { CameraKitSession, Lens } from "@snap/camera-kit/";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CameraKitState } from "../utils/types";

interface FilterStore extends CameraKitState {
  session: CameraKitSession | null;
  lenses: Lens[] | null;
  setSession: (session: CameraKitSession) => void;
  setLens: (lenses: Lens[]) => void;
}

const filterStore = create<FilterStore>()(
  persist(
    (set) => ({
      session: null,
      lenses: null,
      setSession: (session: CameraKitSession) => set({ session }),
      setLens: (lenses: Lens[]) => set({ lenses }),
    }),
    {
      name: "filter-store", // Key to store in local storage
      partialize: (state) => ({ lenses: state.lenses }), // Only persist 'lenses'
    }
  )
);

export default filterStore;
