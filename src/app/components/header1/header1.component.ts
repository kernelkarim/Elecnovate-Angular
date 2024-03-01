import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header1',
  templateUrl: 'header1.component.html',
  styleUrls: ['header1.component.css'],
})
export class Header1 {
  @Input()
  imageAlt1: string = 'image'
  @Input()
  button: string = 'Buy now'
  @Input()
  imageSrc1: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  imageSrc: string = '8ff9e524-e6e1-4b69-890a-50d10e43fe74'
  @Input()
  imageAlt: string = 'image'
  constructor() {}
}
