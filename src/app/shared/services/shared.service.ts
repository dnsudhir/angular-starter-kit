import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService extends BaseService {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  login(email, password): Observable<any> {
    return this.post('', { email, password });
  }

  signup(email, password): Observable<any> {
    return this.post('', { email, password });
  }


}

