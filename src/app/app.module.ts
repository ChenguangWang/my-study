import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdBannerComponent } from './ad-banner.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';


@NgModule({
    declarations: [
        AppComponent,
        AdBannerComponent,
        HeroJobAdComponent,
        HeroProfileComponent,
        AdDirective,
    ],
    imports: [
        BrowserModule,
        CKEditorModule,
        FormsModule
    ],
    entryComponents: [HeroJobAdComponent, HeroProfileComponent],
    providers: [AdService],
    bootstrap: [AppComponent]
})
export class AppModule { }
