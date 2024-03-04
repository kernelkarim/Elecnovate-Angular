import { Component, Input } from '@angular/core'

@Component({
  selector: 'testimonial-card23',
  templateUrl: 'testimonial-card23.component.html',
  styleUrls: ['testimonial-card23.component.css'],
})
export class TestimonialCard23 {
  @Input()
  name: string = 'John Doe'
  @Input()
  profileAlt: string = 'profile'
  @Input()
  rootClassName: string = ''
  @Input()
  profileSrc: string =
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200'
  @Input()
  quote: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.'
  constructor() {}
}
