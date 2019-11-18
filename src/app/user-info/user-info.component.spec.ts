import { Config } from './../../assets/auth-config';
import { AuthService, AuthServiceConfig } from 'angularx-social-login';
import { MaterialModule } from './../material-module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule
      ],
      declarations: [ 
        UserInfoComponent
      ],
      providers: [
        {
          provide: AuthService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
