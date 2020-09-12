import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOpenmrsHttpclientServiceComponent } from './ngx-openmrs-httpclient-service.component';

describe('NgxOpenmrsHttpclientServiceComponent', () => {
  let component: NgxOpenmrsHttpclientServiceComponent;
  let fixture: ComponentFixture<NgxOpenmrsHttpclientServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOpenmrsHttpclientServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOpenmrsHttpclientServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
