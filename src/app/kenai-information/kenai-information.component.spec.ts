import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenaiInformationComponent } from './kenai-information.component';

describe('KenaiInformationComponent', () => {
  let component: KenaiInformationComponent;
  let fixture: ComponentFixture<KenaiInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenaiInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KenaiInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
