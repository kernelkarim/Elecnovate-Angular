import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { DesignFeatures } from './design-features.component'

const routes = [
  {
    path: '',
    component: DesignFeatures,
  },
]

@NgModule({
  declarations: [DesignFeatures],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [DesignFeatures],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DesignFeaturesModule {}
