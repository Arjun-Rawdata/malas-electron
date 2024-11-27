import { request } from "@/utils/axios";
import { AxiosResponse } from "axios";

type HttpMethod = "get" | "post";

export const userCrudApi = async <T>(
  method: HttpMethod,

  qrCode?: number,
  scannerId?: number
): Promise<T> => {
  let url = "/get-malas-profile/";
  const params = {
    qrcode: qrCode,
    scanner_id: scannerId,
  };
  try {
    let response: AxiosResponse<T> | null = null;
    if (method === "post") {
      response = await request.post<T>(url, { params });
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



