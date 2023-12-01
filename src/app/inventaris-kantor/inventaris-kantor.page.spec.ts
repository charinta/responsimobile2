import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventarisKantorPage } from './inventaris-kantor.page';

describe('InventarisKantorPage', () => {
  let component: InventarisKantorPage;
  let fixture: ComponentFixture<InventarisKantorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InventarisKantorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
