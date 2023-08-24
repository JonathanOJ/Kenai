import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenaiHeaderButtonsComponent } from './kenai-header-buttons.component';

describe('KenaiHeaderButtonsComponent', () => {
  let component: KenaiHeaderButtonsComponent;
  let fixture: ComponentFixture<KenaiHeaderButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenaiHeaderButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KenaiHeaderButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
