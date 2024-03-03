import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawstdv: string = ' '
  raw03p3: string = ' '
  rawzh1b: string = ' '
  rawrtjf: string = ' '
  rawgujx: string = ' '
  rawx7m6: string = ' '
  rawvcw2: string = ' '
  rawipjh: string = ' '
  raw81u6: string = ' '
  raw1lbu: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Elecnovate')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Elecnovate',
      },
    ])
  }
}
