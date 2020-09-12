import { HttpConfig } from "../models/http-config.model";

export const HTTP_CONFIG: HttpConfig = {
  includeVersionNumber: false,
  useRootUrl: false,
  httpHeaders: {}
};

export const DEFAULT_ROOT_URL = "../../../openmrs/";

export const HTTP_HEADER_OPTIONS = {
  "Content-Type": "application/json"
};
