import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissiondetailsComponent } from './missiondetails.component';

describe('MissiondetailsComponent', () => {
  let component: MissiondetailsComponent;
  let fixture: ComponentFixture<MissiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissiondetailsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MissiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize the mission details component properly', () => {
    expect(component).toBeTruthy();
  });
});
