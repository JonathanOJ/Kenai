import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenaiUsersComponent } from './kenai-users.component';

describe('KenaiUsersComponent', () => {
  let component: KenaiUsersComponent;
  let fixture: ComponentFixture<KenaiUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenaiUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KenaiUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
