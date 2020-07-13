import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RodizioPage } from './rodizio.page';

describe('RodizioPage', () => {
  let component: RodizioPage;
  let fixture: ComponentFixture<RodizioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodizioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RodizioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
