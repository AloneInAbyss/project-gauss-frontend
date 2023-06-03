import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRailComponent } from './star-rail.component';
import { StarRailModule } from './star-rail.module';

describe('StarRailComponent', () => {
  let component: StarRailComponent;
  let fixture: ComponentFixture<StarRailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StarRailModule],
      declarations: [StarRailComponent]
    });
    fixture = TestBed.createComponent(StarRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
