import { request } from "@/utils/axios";
import { AxiosResponse } from "axios";

type HttpMethod = "get" | "post";

export const imageApi = async <T>(
  method: HttpMethod,

  qrCode: number,
  scannerId: number,
  images?: [string]
): Promise<T> => {
  let url = "/selfies/";
  const params = {
    qrcode: qrCode,
    scanner_id: scannerId,
  };

  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    let response: AxiosResponse<T> | null = null;
    if (method == "get" && images) {
      response = await request.get<T>(url, { params: { ...params, images } });
    }
    if (method === "post") {
      response = await request.post<T>(url, { params }, headers);
    }

    if (response === null) {
      throw new Error("Response is null");
    }
    return response.data;
  } catch (error) {
    console.error(`Error in ${method.toUpperCase()} request to ${url}:`, error);
    throw error;
  }
};
