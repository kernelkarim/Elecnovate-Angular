import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  text4: string = 'Blog'
  @Input()
  graphicDesign: string = 'Graphic Design'
  @Input()
  websiteDesign: string = 'Website Design'
  @Input()
  socialMediaDesign: string = 'Social Media Design'
  @Input()
  userInterfaceUserExperience: string = 'UI & UX'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
