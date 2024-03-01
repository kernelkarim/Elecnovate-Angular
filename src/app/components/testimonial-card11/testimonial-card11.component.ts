import { Component, Input } from '@angular/core'

@Component({
  selector: 'testimonial-card11',
  templateUrl: 'testimonial-card11.component.html',
  styleUrls: ['testimonial-card11.component.css'],
})
export class TestimonialCard11 {
  @Input()
  pictureSrc: string =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200'
  @Input()
  quote: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.'
  @Input()
  rootClassName: string = ''
  @Input()
  pictureAlt: string = 'profile'
  @Input()
  name: string = 'Jane Doe'
  @Input()
  role: string = 'SOFTWARE ENGINEER'
  constructor() {}
}
