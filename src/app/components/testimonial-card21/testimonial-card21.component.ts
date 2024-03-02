import { Component, Input } from '@angular/core'

@Component({
  selector: 'testimonial-card21',
  templateUrl: 'testimonial-card21.component.html',
  styleUrls: ['testimonial-card21.component.css'],
})
export class TestimonialCard21 {
  @Input()
  rootClassName: string = ''
  @Input()
  quote: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.'
  @Input()
  profileSrc: string =
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200'
  @Input()
  profileAlt: string = 'profile'
  @Input()
  name: string = 'John Doe'
  constructor() {}
}
