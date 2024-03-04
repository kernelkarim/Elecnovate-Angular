import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { TestimonialCard43 } from './testimonial-card43/testimonial-card43.component'
import { TestimonialCard42 } from './testimonial-card42/testimonial-card42.component'
import { TestimonialCard421 } from './testimonial-card421/testimonial-card421.component'
import { TestimonialCard4 } from './testimonial-card4/testimonial-card4.component'
import { TestimonialCard23 } from './testimonial-card23/testimonial-card23.component'
import { TestimonialCard41 } from './testimonial-card41/testimonial-card41.component'
import { TestimonialCard2 } from './testimonial-card2/testimonial-card2.component'
import { TestimonialCard21 } from './testimonial-card21/testimonial-card21.component'
import { TestimonialCard221 } from './testimonial-card221/testimonial-card221.component'
import { TestimonialCard22 } from './testimonial-card22/testimonial-card22.component'

@NgModule({
  declarations: [
    TestimonialCard43,
    TestimonialCard42,
    TestimonialCard421,
    TestimonialCard4,
    TestimonialCard23,
    TestimonialCard41,
    TestimonialCard2,
    TestimonialCard21,
    TestimonialCard221,
    TestimonialCard22,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TestimonialCard43,
    TestimonialCard42,
    TestimonialCard421,
    TestimonialCard4,
    TestimonialCard23,
    TestimonialCard41,
    TestimonialCard2,
    TestimonialCard21,
    TestimonialCard221,
    TestimonialCard22,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
