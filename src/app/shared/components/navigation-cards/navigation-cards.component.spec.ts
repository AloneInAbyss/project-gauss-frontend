import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCardsComponent } from './navigation-cards.component';
import { NavigationCard } from './models/navigation-card.model';
import { getTranslocoModule } from '../../modules/transloco-testing.module';
import { SharedComponentsModule } from '../shared-components.module';

const mockNavigationCards: NavigationCard[] = [
  {
    title: 'Title',
    subtitle: 'Subtitle',
    content: 'Card content',
    button: 'Button label',
    route: '/route'
  }
];

describe('NavigationCardsComponent', () => {
  let component: NavigationCardsComponent;
  let fixture: ComponentFixture<NavigationCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule, getTranslocoModule()],
      declarations: [NavigationCardsComponent]
    });

    fixture = TestBed.createComponent(NavigationCardsComponent);
    component = fixture.componentInstance;

    component.cards = mockNavigationCards;
    fixture.detectChanges();
  });

  it('should create with navigation card', () => {
    const nativeElement = fixture.nativeElement as HTMLElement;

    const title = nativeElement.querySelectorAll(
      'mat-card mat-card-header mat-card-title'
    )[0] as HTMLElement;

    const subtitle = nativeElement.querySelectorAll(
      'mat-card mat-card-header mat-card-subtitle'
    )[0] as HTMLElement;

    const content = nativeElement.querySelectorAll(
      'mat-card mat-card-content p'
    )[0] as HTMLParagraphElement;

    const button = nativeElement.querySelectorAll(
      'mat-card mat-card-actions button'
    )[0] as HTMLButtonElement;

    expect(title.textContent).toBe(mockNavigationCards[0].title);
    expect(subtitle.textContent).toBe(mockNavigationCards[0].subtitle);
    expect(content.textContent).toBe(mockNavigationCards[0].content);
    expect(button.textContent).toBe(mockNavigationCards[0].button);
  });

  it('should call navigate when card button clicked', () => {
    spyOn(component.router, 'navigate').and.stub();

    const nativeElement = fixture.nativeElement as HTMLElement;

    const button = nativeElement.querySelectorAll(
      'mat-card mat-card-actions button'
    )[0] as HTMLButtonElement;

    button.click();

    expect(component.router.navigate).toHaveBeenCalledOnceWith([
      mockNavigationCards[0].route
    ]);
  });
});
