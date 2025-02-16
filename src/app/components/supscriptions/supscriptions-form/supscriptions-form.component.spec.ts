import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupscriptionsFormComponent } from './supscriptions-form.component';

describe('SupscriptionsFormComponent', () => {
  let component: SupscriptionsFormComponent;
  let fixture: ComponentFixture<SupscriptionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupscriptionsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupscriptionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
