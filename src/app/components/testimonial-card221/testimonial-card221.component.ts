import { Component, Input } from '@angular/core'

@Component({
  selector: 'testimonial-card221',
  templateUrl: 'testimonial-card221.component.html',
  styleUrls: ['testimonial-card221.component.css'],
})
export class TestimonialCard221 {
  @Input()
  quote: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.'
  @Input()
  name: string = 'John Doe'
  @Input()
  profileAlt: string = 'profile'
  @Input()
  rootClassName: string = ''
  @Input()
  profileSrc: string =
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200'
  constructor() {}
}
