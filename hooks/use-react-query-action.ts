"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import instance from "services/instace";

const useReactQueryAction = <T>(url: string) => {
  let params: any = useParams();

  Object.keys(params).map((key) => {
    url = url.replace(`[${key}]`, params[key]);
  });

  instance.interceptors.request.use((config) => {
    config.headers["Accept-Language"] = params.locale;
    return config;
  });

  return useQuery<T>({
    queryKey: [url],
    queryFn: async () => {
      try {
        let { data } = await instance.get(url);
        return data;
      } catch (error) {
        return null;
      }
    },
  });
};

export default useReactQueryAction;
