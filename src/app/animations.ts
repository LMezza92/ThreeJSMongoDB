import { trigger, query, style, group, animateChild, animate, transition } from '@angular/animations';

export const slideInAnimation =

  trigger('routeAnimations', [
    transition('HomePage => ContactPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('800ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('800ms ease-out', style({ left: '0%' }))
        ]),
      ]),
    ]), 
    transition('ContactPage => HomePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('800ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('800ms ease-out', style({ left: '0%' }))
        ]),
      ]),
    ])
    //, more transitions('HomePage <=> ContactPage')
  ]);