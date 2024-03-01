import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card11',
  templateUrl: 'feature-card11.component.html',
  styleUrls: ['feature-card11.component.css'],
})
export class FeatureCard11 {
  @Input()
  imageSrc: string =
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000'
  @Input()
  title: string = 'Lorem ipsum'
  @Input()
  rootClassName: string = ''
  @Input()
  imageAlt: string = 'image'
  constructor() {}
}
