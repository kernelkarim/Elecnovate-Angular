import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { SocialMediaDesign } from './social-media-design.component'

const routes = [
  {
    path: '',
    component: SocialMediaDesign,
  },
]

@NgModule({
  declarations: [SocialMediaDesign],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SocialMediaDesign],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SocialMediaDesignModule {}
