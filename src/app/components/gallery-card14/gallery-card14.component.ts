import { Component, Input } from '@angular/core'

@Component({
  selector: 'gallery-card14',
  templateUrl: 'gallery-card14.component.html',
  styleUrls: ['gallery-card14.component.css'],
})
export class GalleryCard14 {
  @Input()
  subtitle: string = 'Lorem ipsum dolor sit amet'
  @Input()
  rootClassName: string = ''
  @Input()
  imageAlt: string = 'image'
  @Input()
  title: string = 'Project Title'
  @Input()
  imageSrc: string =
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200'
  constructor() {}
}
