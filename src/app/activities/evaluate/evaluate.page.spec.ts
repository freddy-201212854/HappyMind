import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvaluatePage } from './evaluate.page';

describe('EvaluatePage', () => {
  let component: EvaluatePage;
  let fixture: ComponentFixture<EvaluatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EvaluatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
