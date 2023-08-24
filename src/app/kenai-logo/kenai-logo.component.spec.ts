import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenaiLogoComponent } from './kenai-logo.component';

describe('KenaiLogoComponent', () => {
  let component: KenaiLogoComponent;
  let fixture: ComponentFixture<KenaiLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenaiLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KenaiLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
