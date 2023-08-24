import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenaiListComponent } from './kenai-list.component';

describe('KenaiListComponent', () => {
  let component: KenaiListComponent;
  let fixture: ComponentFixture<KenaiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenaiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KenaiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
