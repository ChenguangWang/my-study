import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicLoadComponent } from './dynamic-load.component';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DynamicLoadComponent,
        HeroProfileComponent,
        HeroJobAdComponent,
        AdBannerComponent,
        AdDirective
    ]
})
export class DynamicLoadModule { }
