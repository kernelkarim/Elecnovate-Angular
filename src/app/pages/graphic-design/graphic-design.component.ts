import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'graphic-design',
  templateUrl: 'graphic-design.component.html',
  styleUrls: ['graphic-design.component.css'],
})
export class GraphicDesign {
  raw8jn3: string = ' '
  rawy2gx: string = ' '
  rawx8aa: string = ' '
  raw9ppa: string = ' '
  rawyifl: string = ' '
  rawk6ug: string = ' '
  rawz408: string = ' '
  rawb5nf: string = ' '
  raw49n9: string = ' '
  raw2tn6: string = ' '
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
