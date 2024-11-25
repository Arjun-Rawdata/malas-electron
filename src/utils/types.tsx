import React from "react";

type FruitColorMap = {
  [key: string]: string;
};

type ObjWithString = {
  [key: string]: string;
};

type CanvasRefType = React.RefObject<HTMLCanvasElement>;
type VideoRefType = React.RefObject<HTMLVideoElement>;

export type { FruitColorMap, ObjWithString, CanvasRefType , VideoRefType  };
