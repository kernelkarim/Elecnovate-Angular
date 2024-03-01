import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { DevelopmentExcellenceHub } from './development-excellence-hub.component'

const routes = [
  {
    path: '',
    component: DevelopmentExcellenceHub,
  },
]

@NgModule({
  declarations: [DevelopmentExcellenceHub],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [DevelopmentExcellenceHub],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DevelopmentExcellenceHubModule {}
