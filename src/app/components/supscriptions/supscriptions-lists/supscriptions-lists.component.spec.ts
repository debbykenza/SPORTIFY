import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupscriptionsListsComponent } from './supscriptions-lists.component';

describe('SupscriptionsListsComponent', () => {
  let component: SupscriptionsListsComponent;
  let fixture: ComponentFixture<SupscriptionsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupscriptionsListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupscriptionsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
