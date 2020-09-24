import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(public httpClient: HttpClient) { }

  get(url) {
    return this.httpClient.get(url);
  }

  post(url, data, options?) {
    return this.httpClient.post(url, data, options);
  }
  put(url, data, options?) {
    return this.httpClient.put(url, data, options);
  }

  delete(url) {
    return this.httpClient.delete(url);
  }
}
