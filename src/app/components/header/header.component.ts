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
  rootClassName: string = ''
  @Input()
  imageSrc: string = '/assets/Home/elecnovate-200h.png'
  @Input()
  elecnovate: string = 'elecnovate'
  @Input()
  button: string = 'Buy now'
  constructor() {}
}
