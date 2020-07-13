import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalarioPage } from './salario.page';

describe('SalarioPage', () => {
  let component: SalarioPage;
  let fixture: ComponentFixture<SalarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
