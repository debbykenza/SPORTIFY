import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListsComponent } from './customers-lists.component';

describe('CustomersListsComponent', () => {
  let component: CustomersListsComponent;
  let fixture: ComponentFixture<CustomersListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
