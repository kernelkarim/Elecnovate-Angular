import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'graphic-design',
  templateUrl: 'graphic-design.component.html',
  styleUrls: ['graphic-design.component.css'],
})
export class GraphicDesign {
  raw9ti0: string = ' '
  rawko33: string = ' '
  raw094f: string = ' '
  rawk370: string = ' '
  rawbzwp: string = ' '
  rawt9bl: string = ' '
  rawmupm: string = ' '
  rawqblu: string = ' '
  rawgq16: string = ' '
  rawdrfx: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(
      'Graphic-Design -  Elevate Your Brand with Stunning Graphic Design | Graphic Design'
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
          'Graphic-Design -  Elevate Your Brand with Stunning Graphic Design | Graphic Design',
      },
      {
        property: 'og:description',
        content:
          "Elevate your brand with captivating designs. 🚀 Offering expert Graphic Design, Social Media Creatives, UI/UX Excellence, and Seamless Website Design. Let's bring your ideas to life! 💡🎨",
      },
    ])
  }
}
