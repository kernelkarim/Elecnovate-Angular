import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'development-excellence-hub',
  templateUrl: 'development-excellence-hub.component.html',
  styleUrls: ['development-excellence-hub.component.css'],
})
export class DevelopmentExcellenceHub {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(
      'Development-Excellence-Hub -  Elevate Your Brand with Stunning Graphic Design | Graphic Design'
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
          'Development-Excellence-Hub -  Elevate Your Brand with Stunning Graphic Design | Graphic Design',
      },
      {
        property: 'og:description',
        content:
          "Elevate your brand with captivating designs. 🚀 Offering expert Graphic Design, Social Media Creatives, UI/UX Excellence, and Seamless Website Design. Let's bring your ideas to life! 💡🎨",
      },
    ])
  }
}
