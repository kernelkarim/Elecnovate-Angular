import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  imageAlt1: string = 'image'
  @Input()
  imageSrc1: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  imageSrc: string = '/assets/Home/elecnovate-1500w.png'
  @Input()
  imageAlt: string = 'image'
  @Input()
  button: string = 'Buy now'
  constructor() {}
}
