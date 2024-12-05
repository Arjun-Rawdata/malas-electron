import { CameraKitSession, Lens } from "@snap/camera-kit/.";
import { create } from "zustand";
import { CameraKitState } from "../utils/types";

interface FilterStore extends CameraKitState {
  setSession: (session: CameraKitSession) => void;
  setLens: (lenses: Lens[]) => void;
}

const filterStore = create<FilterStore>((set) => ({
  session: null,
  lenses: null,
  setSession: (session: CameraKitSession) => set({ session }),
  setLens: (lenses: Lens[]) => set({ lenses }),
}));

export default filterStore;
