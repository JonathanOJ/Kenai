import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenaiAvaliationComponent } from './kenai-avaliation.component';

describe('KenaiAvaliationComponent', () => {
  let component: KenaiAvaliationComponent;
  let fixture: ComponentFixture<KenaiAvaliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenaiAvaliationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KenaiAvaliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
