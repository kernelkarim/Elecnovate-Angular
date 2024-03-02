import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { GraphicDesign } from './graphic-design.component'

const routes = [
  {
    path: '',
    component: GraphicDesign,
  },
]

@NgModule({
  declarations: [GraphicDesign],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [GraphicDesign],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GraphicDesignModule {}
