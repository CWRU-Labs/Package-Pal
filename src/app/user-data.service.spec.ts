import { AuthServiceConfig, AuthService } from 'angularx-social-login';
import { TestBed } from '@angular/core/testing';

import { UserDataService } from './user-data.service';

describe('UserDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthService,
      AuthServiceConfig
    ]
  }));

  it('should be created', () => {
    const service: UserDataService = TestBed.get(UserDataService);
    expect(service).toBeTruthy();
  });
});
