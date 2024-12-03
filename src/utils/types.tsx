import React from "react";

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

type crudApiResponse = {
  data: User;
  message: string;
  status: boolean;
};

type FruitColorMap = {
  [key: string]: string;
};

type ObjWithString = {
  [key: string]: string;
};

type CanvasRefType = React.RefObject<HTMLCanvasElement>;
type VideoRefType = React.RefObject<HTMLVideoElement>;

export type { User, FruitColorMap, ObjWithString, CanvasRefType, VideoRefType ,crudApiResponse};
