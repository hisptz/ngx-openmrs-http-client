import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { HttpConfig } from "../models/http-config.model";
import {
  HTTP_HEADER_OPTIONS,
  HTTP_CONFIG,
  DEFAULT_ROOT_URL
} from "../constants/http.constant";
import { ErrorMessage } from "../models/error-message.model";

@Injectable({
  providedIn: "root"
})
export class NgxOpenmrsHttpclientServiceService {
  constructor(private httpClient: HttpClient) {}

  get(url: string, httpConfig?: HttpConfig): Observable<any> {
    console.log("url:::::", url);
    const newHttpConfig = this._getHttpConfig(httpConfig);

    const httpOptions = this._getHttpOptions(newHttpConfig.httpHeaders);

    return this._getFromServer(url, newHttpConfig, httpOptions);
  }

  post(url: string, data: any, httpConfig?: HttpConfig) {
    const newHttpConfig = this._getHttpConfig(httpConfig);

    const httpOptions = this._getHttpOptions(newHttpConfig.httpHeaders);
    const rootUrl = this._getRootUrl(newHttpConfig);

    return httpOptions
      ? this.httpClient.post(rootUrl + url, data, httpOptions)
      : this.httpClient.post(rootUrl + url, data);
  }

  put(url: string, data: any, httpConfig?: HttpConfig) {
    const newHttpConfig = this._getHttpConfig(httpConfig);

    const httpOptions = this._getHttpOptions(newHttpConfig.httpHeaders);
    const rootUrl = this._getRootUrl(newHttpConfig);
    return httpOptions
      ? this.httpClient.put(rootUrl + url, data, httpOptions)
      : this.httpClient.put(rootUrl + url, data);
  }

  delete(url: string, httpConfig?: HttpConfig) {
    const newHttpConfig = this._getHttpConfig(httpConfig);

    const httpOptions = this._getHttpOptions(newHttpConfig.httpHeaders);
    const rootUrl = this._getRootUrl(newHttpConfig);
    return httpOptions
      ? this.httpClient.delete(rootUrl + url, httpOptions)
      : this.httpClient.delete(rootUrl + url);
  }

  private _getFromServer(url, httpConfig: HttpConfig, httpOptions: any) {
    const rootUrl = this._getRootUrl(httpConfig);
    return httpOptions
      ? this.httpClient.get(rootUrl + url, httpOptions)
      : this.httpClient.get(rootUrl + url);
  }

  private _getHttpConfig(httpConfig: HttpConfig) {
    return { ...HTTP_CONFIG, ...(httpConfig || {}) };
  }

  private _getRootUrl(httpConfig: HttpConfig) {
    const rootUrl = DEFAULT_ROOT_URL;
    return this._getApiRootUrl(rootUrl, httpConfig.includeVersionNumber);
  }
  private _handleError(err: HttpErrorResponse) {
    let error: ErrorMessage = null;
    if (err.error instanceof ErrorEvent) {
      error = {
        message: err.error.toString(),
        status: err.status,
        statusText: err.statusText
      };
    } else {
      error = {
        message:
          err.error instanceof Object
            ? err.error.message
            : err.error || err.message,
        status: err.status,
        statusText: err.statusText
      };
    }
    return throwError(error);
  }

  private _getApiRootUrl(
    rootUrl: string,
    includeVersionNumber: boolean = false
  ) {
    const version = "V1/";
    return rootUrl + version;
  }

  private _getHttpOptions(httpHeaderOptions: any) {
    return httpHeaderOptions
      ? {
          headers: new HttpHeaders({
            ...HTTP_HEADER_OPTIONS,
            ...(httpHeaderOptions || {})
          })
        }
      : null;
  }
}
