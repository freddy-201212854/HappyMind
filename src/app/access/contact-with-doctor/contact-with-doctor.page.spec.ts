import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactWithDoctorPage } from './contact-with-doctor.page';

describe('ContactWithDoctorPage', () => {
  let component: ContactWithDoctorPage;
  let fixture: ComponentFixture<ContactWithDoctorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactWithDoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
