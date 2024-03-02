import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { UserInterfaceExperience } from './user-interface-experience.component'

const routes = [
  {
    path: '',
    component: UserInterfaceExperience,
  },
]

@NgModule({
  declarations: [UserInterfaceExperience],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [UserInterfaceExperience],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserInterfaceExperienceModule {}
