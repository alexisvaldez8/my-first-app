import { TestBed, getTestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('UserService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
  });

  it('should return an Observable<User[]>', () => {
    const service: UsersService = TestBed.inject(UsersService);
    const dummyUsers = [{ name: 'John' }, { name: 'Doe' }];

    service.getUsers().subscribe((users: any) => {
      expect(users).toEqual(dummyUsers);
    });

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/users'
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
  });

  it('should return an Error', () => {
    const service: UsersService = TestBed.inject(UsersService);
    const dummyError = { errorCode: 'error' };

    service.getUsersWithError().subscribe((users: any) => {
      expect(users).toEqual(dummyError);
    });

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/users' + 'withError'
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyError);
  });
});