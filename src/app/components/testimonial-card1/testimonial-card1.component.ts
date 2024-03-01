import { Component, Input } from '@angular/core'

@Component({
  selector: 'testimonial-card1',
  templateUrl: 'testimonial-card1.component.html',
  styleUrls: ['testimonial-card1.component.css'],
})
export class TestimonialCard1 {
  @Input()
  role: string = 'SOFTWARE ENGINEER'
  @Input()
  pictureSrc: string =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200'
  @Input()
  pictureAlt: string = 'profile'
  @Input()
  rootClassName: string = ''
  @Input()
  name: string = 'Jane Doe'
  @Input()
  quote: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.'
  constructor() {}
}
