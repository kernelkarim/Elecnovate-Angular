import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card16',
  templateUrl: 'feature-card16.component.html',
  styleUrls: ['feature-card16.component.css'],
})
export class FeatureCard16 {
  @Input()
  imageAlt: string = 'image'
  @Input()
  imageSrc: string =
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000'
  @Input()
  rootClassName: string = ''
  @Input()
  title: string = 'Lorem ipsum'
  constructor() {}
}
