import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VbSetComponent } from './vb-set.component';

describe('VbSetComponent', () => {
  let component: VbSetComponent;
  let fixture: ComponentFixture<VbSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VbSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VbSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
