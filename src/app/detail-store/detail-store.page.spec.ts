import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailStorePage } from './detail-store.page';

describe('DetailStorePage', () => {
  let component: DetailStorePage;
  let fixture: ComponentFixture<DetailStorePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
