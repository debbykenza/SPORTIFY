import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksListsComponent } from './packs-lists.component';

describe('PacksListsComponent', () => {
  let component: PacksListsComponent;
  let fixture: ComponentFixture<PacksListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacksListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
