import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'social-media-design',
  templateUrl: 'social-media-design.component.html',
  styleUrls: ['social-media-design.component.css'],
})
export class SocialMediaDesign {
  rawucz0: string = ' '
  raw6dmj: string = ' '
  raw5q5o: string = ' '
  raw1w9y: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Social-Media-Design - Elecnovate')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Social-Media-Design - Elecnovate',
      },
    ])
  }
}
