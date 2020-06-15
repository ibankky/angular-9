import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialCardComponent } from './official-card.component';

describe('OfficialCardComponent', () => {
  let component: OfficialCardComponent;
  let fixture: ComponentFixture<OfficialCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
