import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenaiFooterComponent } from './kenai-footer.component';

describe('KenaiFooterComponent', () => {
  let component: KenaiFooterComponent;
  let fixture: ComponentFixture<KenaiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenaiFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KenaiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
