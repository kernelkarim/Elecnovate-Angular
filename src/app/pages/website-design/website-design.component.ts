import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'website-design',
  templateUrl: 'website-design.component.html',
  styleUrls: ['website-design.component.css'],
})
export class WebsiteDesign {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Website-Design - Elecnovate')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Website-Design - Elecnovate',
      },
    ])
  }
}
