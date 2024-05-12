import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutuseroneComponent } from './aboutuserone.component';

describe('AboutuseroneComponent', () => {
  let component: AboutuseroneComponent;
  let fixture: ComponentFixture<AboutuseroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutuseroneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutuseroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
