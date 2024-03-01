import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'design-features',
  templateUrl: 'design-features.component.html',
  styleUrls: ['design-features.component.css'],
})
export class DesignFeatures {
  rawca6x: string = ' '
  rawiw0w: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Design-Features - Elecnovate')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Design-Features - Elecnovate',
      },
    ])
  }
}
