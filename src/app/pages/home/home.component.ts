import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawztkh: string = ' '
  rawxulq: string = ' '
  raw4ufg: string = ' '
  rawonf6: string = ' '
  rawb3d5: string = ' '
  rawrins: string = ' '
  rawtfob: string = ' '
  rawe3mi: string = ' '
  rawob8t: string = ' '
  rawbgcq: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(
      ' Elevate Your Brand with Stunning Graphic Design | Graphic Design'
    )
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Elevate your brand with our comprehensive solutions. From graphic designs and websites to captivating social media visuals we bring your vision to life.',
      },
      {
        property: 'og:title',
        content:
          ' Elevate Your Brand with Stunning Graphic Design | Graphic Design',
      },
      {
        property: 'og:description',
        content:
          "Elevate your brand with captivating designs. 🚀 Offering expert Graphic Design, Social Media Creatives, UI/UX Excellence, and Seamless Website Design. Let's bring your ideas to life! 💡🎨",
      },
    ])
  }
}
