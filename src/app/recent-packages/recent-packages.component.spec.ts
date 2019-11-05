import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPackagesComponent } from './recent-packages.component';

describe('RecentPackagesComponent', () => {
  let component: RecentPackagesComponent;
  let fixture: ComponentFixture<RecentPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
