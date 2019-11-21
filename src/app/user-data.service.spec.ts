import { AuthServiceConfig, AuthService } from 'angularx-social-login';
import { TestBed } from '@angular/core/testing';

import { UserDataService } from './user-data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: AuthService
        }
      ]
    });
  });

  it('should be created', () => {
    const service: UserDataService = TestBed.get(UserDataService);
    expect(service).toBeTruthy();
  });
});
