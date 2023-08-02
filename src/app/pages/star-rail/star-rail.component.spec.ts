import { ComponentFixture, TestBed } from '@angular/core/testing';

import { getTranslocoModule } from 'src/app/shared/modules/transloco-testing.module';
import { StarRailComponent } from './star-rail.component';
import { StarRailModule } from './star-rail.module';

describe('StarRailComponent', () => {
  let component: StarRailComponent;
  let fixture: ComponentFixture<StarRailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StarRailModule, getTranslocoModule()],
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
