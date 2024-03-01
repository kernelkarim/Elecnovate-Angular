import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { GraphicDesin } from './graphic-desin.component'

const routes = [
  {
    path: '',
    component: GraphicDesin,
  },
]

@NgModule({
  declarations: [GraphicDesin],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [GraphicDesin],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GraphicDesinModule {}
