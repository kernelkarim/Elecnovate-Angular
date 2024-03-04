import { Component, Input } from '@angular/core'

@Component({
  selector: 'testimonial-card421',
  templateUrl: 'testimonial-card421.component.html',
  styleUrls: ['testimonial-card421.component.css'],
})
export class TestimonialCard421 {
  @Input()
  pictureAlt: string = 'John Doe'
  @Input()
  role: string = 'Software Engineer'
  @Input()
  quote: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo nec. Integer egestas, quam eu convallis ultrices, est nisl rutrum tellus, sed posuere velit nisi sit amet ante. In a augue porttitor, porta sapien sed, faucibus felis.'
  @Input()
  pictureSrc: string =
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200'
  @Input()
  rootClassName: string = ''
  @Input()
  name: string = 'John Doe'
  constructor() {}
}
