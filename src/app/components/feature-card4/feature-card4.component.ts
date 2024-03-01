import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card4',
  templateUrl: 'feature-card4.component.html',
  styleUrls: ['feature-card4.component.css'],
})
export class FeatureCard4 {
  @Input()
  title: string = 'Lorem ipsum'
  @Input()
  rootClassName: string = ''
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.'
  constructor() {}
}
