import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregandoAdminComponent } from './agregando-admin.component';

describe('AgregandoAdminComponent', () => {
  let component: AgregandoAdminComponent;
  let fixture: ComponentFixture<AgregandoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregandoAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregandoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
