import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, Router} from '@angular/router';
import {DesktopFormComponent} from './Desktop/desktop-form/desktop-form.component';
import {DesktopHomeComponent} from './Desktop/desktop-home/desktop-home.component';
import {MobileHomeComponent} from './Mobile/mobile-home/mobile-home.component';
import {MobileFormComponent} from './Mobile/mobile-form/mobile-form.component';
import {ApplicationStateService} from './application-state.service';


const desktopRoutes: Routes = [
  {path: '', component: DesktopHomeComponent},
  {path: 'desktopForm', component: DesktopFormComponent},
  {path: '**', redirectTo: ''}
];

const mobileRoutes: Routes = [
  {path: '', component: MobileHomeComponent},
  {path: 'mobileForm', component: MobileFormComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(desktopRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

  public constructor(private router: Router,
                     private applicationStateService: ApplicationStateService) {

    if (applicationStateService.getIsMobileResolution()) {
      router.resetConfig(mobileRoutes);
    }
  }
}
