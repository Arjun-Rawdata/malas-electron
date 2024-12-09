import { bootstrapCameraKit, CameraKitSession, Lens } from "@snap/camera-kit";
import { createContext, useEffect, useRef, useState } from "react";
import { CameraKitState } from "./types";
import filterStore from "@/store/filterStore";
import PageLoading from "@/components/PageLoading";

const apiToken = import.meta.env.VITE_PUBLIC_CAMERA_KIT_API_KEY;
const lensGroupId = "a21f42e4-3c9d-4f0f-9ed2-6205c1aa1ea6";

export const CameraKitContext = createContext<CameraKitState | null>(null);

export const CameraKit: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isInitialized = useRef<boolean>(false);
  const [session, setSession] = useState<CameraKitSession | null>(null);
  const [lenses, setLenses] = useState<Lens[]>([]);
  const setSnapSession = filterStore((state) => state.setSession);
  const setLens = filterStore((state) => state.setLens);
  useEffect(() => {
    console.log("apiToken", apiToken);
    if (apiToken) {
      const initializeCameraKit = async () => {
        const cameraKit = await bootstrapCameraKit({ apiToken });
        const session = await cameraKit.createSession();
        const { lenses } = await cameraKit.lensRepository.loadLensGroups([
          lensGroupId,
        ]);

        setLenses(lenses);
        setSession(session);

        setSnapSession(session);
        setLens(lenses);
      };

      if (isInitialized.current) return;
      isInitialized.current = true;

      initializeCameraKit();
    }
  }, []);

  return !session ? (
    <div>
      <PageLoading />
    </div>
  ) : (
    <CameraKitContext.Provider value={{ session, lenses }}>
      {children}
    </CameraKitContext.Provider>
  );
};
