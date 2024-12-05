import { useContext } from "react";
import { CameraKitContext } from "../utils/CameraKitContext";
import filterStore from "@/store/filterStore";

export const useCameraKit = () => {

  const state = useContext(CameraKitContext);

  if (!state) {
    throw new Error("useCameraKit must be used inside of a CameraKitContext");
  }

  return state;
};
