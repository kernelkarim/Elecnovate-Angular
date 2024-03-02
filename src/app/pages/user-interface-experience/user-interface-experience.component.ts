import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'user-interface-experience',
  templateUrl: 'user-interface-experience.component.html',
  styleUrls: ['user-interface-experience.component.css'],
})
export class UserInterfaceExperience {
  raw8riz: string = ' '
  rawnugy: string = ' '
  raw0x22: string = ' '
  rawtbao: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('User-Interface-Experience - Elecnovate')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'User-Interface-Experience - Elecnovate',
      },
    ])
  }
}
