import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TestDataService {

  constructor(private httpClient: HttpClient) {

  }

  getIntervalStream() {
    return Observable.interval(1000);
  }

  getHttpStream() {
    return this.httpClient.get('https://swapi.co/api/people/1');
  }
}
