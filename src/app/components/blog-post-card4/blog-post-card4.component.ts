import { Component, Input } from '@angular/core'

@Component({
  selector: 'blog-post-card4',
  templateUrl: 'blog-post-card4.component.html',
  styleUrls: ['blog-post-card4.component.css'],
})
export class BlogPostCard4 {
  @Input()
  imageSrc: string =
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=900'
  @Input()
  description: string =
    'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  @Input()
  imageAlt: string = 'image'
  @Input()
  label: string = 'Food & Drink'
  @Input()
  date: string = 'JULY 24'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
