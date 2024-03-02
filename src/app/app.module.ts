import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'user-interface-experience',
    loadChildren: () =>
      import(
        './pages/user-interface-experience/user-interface-experience.module'
      ).then((m) => m.UserInterfaceExperienceModule),
  },
  {
    path: 'development-excellence-hub',
    loadChildren: () =>
      import(
        './pages/development-excellence-hub/development-excellence-hub.module'
      ).then((m) => m.DevelopmentExcellenceHubModule),
  },
  {
    path: 'graphic-desin',
    loadChildren: () =>
      import('./pages/graphic-desin/graphic-desin.module').then(
        (m) => m.GraphicDesinModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'website-design',
    loadChildren: () =>
      import('./pages/website-design/website-design.module').then(
        (m) => m.WebsiteDesignModule
      ),
  },
  {
    path: 'design-features',
    loadChildren: () =>
      import('./pages/design-features/design-features.module').then(
        (m) => m.DesignFeaturesModule
      ),
  },
  {
    path: 'our-story',
    loadChildren: () =>
      import('./pages/our-story/our-story.module').then(
        (m) => m.OurStoryModule
      ),
  },
  {
    path: 'social-media-design',
    loadChildren: () =>
      import('./pages/social-media-design/social-media-design.module').then(
        (m) => m.SocialMediaDesignModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
