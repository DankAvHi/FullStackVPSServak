import { useCallback, useState } from "react";
import { IHttpHook } from "../interfaces/http.hook/IHttp.hook";

export const useHttp = () => {
     const [loading, setLoading] = useState<IHttpHook["loading"]>(false);
     const [error, setError] = useState<IHttpHook["error"]>(null);

     const request = useCallback(
          async (
               url: IHttpHook["url"],
               method: IHttpHook["method"] = "GET",
               body: IHttpHook["body"] = {},
               headers = {} as Headers
          ) => {
               setLoading(true);
               try {
                    if (body) {
                         body = JSON.stringify(body);
                         headers["Content-Type"] = "application/json";
                    }

                    const response = await fetch(url, {
                         method,
                         body,
                         headers,
                    });

                    const data: any = await response.json();

                    if (!response.ok) {
                         if (data && data.message) {
                              throw new Error(data.message || "Что-то пошло не так");
                         }
                         throw new Error("Что-то пошло не так");
                    }

                    setLoading(false);

                    return data;
               } catch (e: any) {
                    setLoading(false);
                    setError(e.message);
                    throw e;
               }
          },
          []
     );

     const clearError = useCallback(() => setError(null), []);

     return { loading, request, error, clearError };
};
