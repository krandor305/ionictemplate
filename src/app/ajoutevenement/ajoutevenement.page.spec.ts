import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutevenementPage } from './ajoutevenement.page';

describe('AjoutevenementPage', () => {
  let component: AjoutevenementPage;
  let fixture: ComponentFixture<AjoutevenementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutevenementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutevenementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
