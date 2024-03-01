import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'development-excellence-hub',
  templateUrl: 'development-excellence-hub.component.html',
  styleUrls: ['development-excellence-hub.component.css'],
})
export class DevelopmentExcellenceHub {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Development-Excellence-Hub - Elecnovate')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Development-Excellence-Hub - Elecnovate',
      },
    ])
  }
}
