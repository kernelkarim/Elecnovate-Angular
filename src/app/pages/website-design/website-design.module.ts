import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { WebsiteDesign } from './website-design.component'

const routes = [
  {
    path: '',
    component: WebsiteDesign,
  },
]

@NgModule({
  declarations: [WebsiteDesign],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [WebsiteDesign],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WebsiteDesignModule {}
