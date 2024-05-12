import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutuserComponent } from './aboutuser.component';

describe('AboutuserComponent', () => {
  let component: AboutuserComponent;
  let fixture: ComponentFixture<AboutuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
