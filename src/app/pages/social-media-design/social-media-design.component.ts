import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'social-media-design',
  templateUrl: 'social-media-design.component.html',
  styleUrls: ['social-media-design.component.css'],
})
export class SocialMediaDesign {
  raw01on: string = ' '
  rawmm13: string = ' '
  rawu9ru: string = ' '
  rawn2ud: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(
      'Social-Media-Design -  Elevate Your Brand with Stunning Graphic Design | Graphic Design'
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
          'Social-Media-Design -  Elevate Your Brand with Stunning Graphic Design | Graphic Design',
      },
      {
        property: 'og:description',
        content:
          "Elevate your brand with captivating designs. 🚀 Offering expert Graphic Design, Social Media Creatives, UI/UX Excellence, and Seamless Website Design. Let's bring your ideas to life! 💡🎨",
      },
    ])
  }
}
