import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenaiPrincipalScreenComponent } from './kenai-principal-screen.component';

describe('KenaiPrincipalScreenComponent', () => {
  let component: KenaiPrincipalScreenComponent;
  let fixture: ComponentFixture<KenaiPrincipalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenaiPrincipalScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KenaiPrincipalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
