import { HttpClientModule } from '@angular/common/http';
import { RecentPackagesComponent } from './../recent-packages/recent-packages.component';
import { UploadComponent } from './../upload/upload.component';
import { UserInfoComponent } from './../user-info/user-info.component';
import { MaterialModule } from './../material-module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AuthService, AuthServiceConfig } from 'angularx-social-login';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        HomeComponent,
        UserInfoComponent,
        UploadComponent,
        RecentPackagesComponent
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
