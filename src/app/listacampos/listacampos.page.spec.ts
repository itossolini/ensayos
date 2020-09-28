import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListacamposPage } from './listacampos.page';

describe('ListacamposPage', () => {
  let component: ListacamposPage;
  let fixture: ComponentFixture<ListacamposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacamposPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListacamposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
