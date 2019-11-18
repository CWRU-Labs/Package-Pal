import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material-module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComponent } from './upload.component';
import { Router } from '@angular/router';
import { AuthService, AuthServiceConfig } from 'angularx-social-login';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        UploadComponent
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
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
