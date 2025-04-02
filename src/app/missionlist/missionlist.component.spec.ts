import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionlistComponent } from './missionlist.component';

describe('MissionlistComponent', () => {
  let component: MissionlistComponent;
  let fixture: ComponentFixture<MissionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionlistComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MissionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load the mission list component properly', () => {
    expect(component).toBeTruthy();
  });
});
