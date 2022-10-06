import type { AxiosRequestConfig } from "axios";

// client
import { apiClient } from "./client";

interface Options {
  withAuthorization?: boolean;
}

interface Params<Body = any> {
  url: string;
  body?: Body;
  config?: AxiosRequestConfig | undefined;
  options?: Options;
}

class ApiMoudle {
  authorized(options?: Partial<Options>) {
    if (!options?.withAuthorization) return null;

    const authorization = localStorage.getItem("auth_token");
    if (!authorization) return null;
    return authorization;
  }

  baseConfig = (
    config: AxiosRequestConfig | undefined,
    options: Partial<Options>
  ) => {
    const authorization = this.authorized(options);
    return {
      headers: {
        "Content-Type": "application/json",
        ...(authorization && {
          Authorization: authorization,
        }),
        ...(config && config.headers),
      },
    };
  };

  delete<D = any>({
    url,
    config = undefined,
    options = { withAuthorization: true },
  }: Params) {
    return apiClient.delete<D>(url, this.baseConfig(config, options));
  }

  post<D = any>({
    url,
    body,
    config = undefined,
    options = { withAuthorization: true },
  }: Params) {
    return apiClient.post<D>(url, body, this.baseConfig(config, options));
  }

  put<D = any>({
    url,
    body = {},
    config = undefined,
    options = { withAuthorization: true },
  }: Params) {
    return apiClient.put<D>(url, body, this.baseConfig(config, options));
  }

  get<D = any>({
    url,
    config = undefined,
    options = { withAuthorization: true },
  }: Params) {
    return apiClient.get<D>(url, this.baseConfig(config, options));
  }
}

export const api = new ApiMoudle();
