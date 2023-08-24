import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenaiBodyComponent } from './kenai-body.component';

describe('KenaiBodyComponent', () => {
  let component: KenaiBodyComponent;
  let fixture: ComponentFixture<KenaiBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenaiBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KenaiBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
