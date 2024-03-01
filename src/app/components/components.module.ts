import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { NavigationLinks1 } from './navigation-links1/navigation-links1.component'
import { Header } from './header/header.component'
import { FeatureCard3 } from './feature-card3/feature-card3.component'
import { TestimonialCard11 } from './testimonial-card11/testimonial-card11.component'
import { GalleryCard1 } from './gallery-card1/gallery-card1.component'
import { FeatureCard31 } from './feature-card31/feature-card31.component'
import { GalleryCard11 } from './gallery-card11/gallery-card11.component'
import { NavigationLinks } from './navigation-links/navigation-links.component'
import { FeatureCard12 } from './feature-card12/feature-card12.component'
import { NavigationLinks2 } from './navigation-links2/navigation-links2.component'
import { TestimonialCard1 } from './testimonial-card1/testimonial-card1.component'
import { FeatureCard4 } from './feature-card4/feature-card4.component'
import { FeatureCard1 } from './feature-card1/feature-card1.component'
import { FeatureCard11 } from './feature-card11/feature-card11.component'
import { Header1 } from './header1/header1.component'
import { FeatureCard13 } from './feature-card13/feature-card13.component'

@NgModule({
  declarations: [
    NavigationLinks1,
    Header,
    FeatureCard3,
    TestimonialCard11,
    GalleryCard1,
    FeatureCard31,
    GalleryCard11,
    NavigationLinks,
    FeatureCard12,
    NavigationLinks2,
    TestimonialCard1,
    FeatureCard4,
    FeatureCard1,
    FeatureCard11,
    Header1,
    FeatureCard13,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavigationLinks1,
    Header,
    FeatureCard3,
    TestimonialCard11,
    GalleryCard1,
    FeatureCard31,
    GalleryCard11,
    NavigationLinks,
    FeatureCard12,
    NavigationLinks2,
    TestimonialCard1,
    FeatureCard4,
    FeatureCard1,
    FeatureCard11,
    Header1,
    FeatureCard13,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
