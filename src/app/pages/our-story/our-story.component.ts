import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'our-story',
  templateUrl: 'our-story.component.html',
  styleUrls: ['our-story.component.css'],
})
export class OurStory {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Our-Story - Elecnovate')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Our-Story - Elecnovate',
      },
    ])
  }
}
