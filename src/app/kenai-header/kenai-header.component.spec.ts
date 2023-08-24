import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenaiHeaderComponent } from './kenai-header.component';

describe('KenaiHeaderComponent', () => {
  let component: KenaiHeaderComponent;
  let fixture: ComponentFixture<KenaiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenaiHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KenaiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
