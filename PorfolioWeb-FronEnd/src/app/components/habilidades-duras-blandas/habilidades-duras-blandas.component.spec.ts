import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesDurasBlandasComponent } from './habilidades-duras-blandas.component';

describe('HabilidadesDurasBlandasComponent', () => {
  let component: HabilidadesDurasBlandasComponent;
  let fixture: ComponentFixture<HabilidadesDurasBlandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesDurasBlandasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesDurasBlandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
