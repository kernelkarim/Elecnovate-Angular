import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { OurStory } from './our-story.component'

const routes = [
  {
    path: '',
    component: OurStory,
  },
]

@NgModule({
  declarations: [OurStory],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [OurStory],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OurStoryModule {}
