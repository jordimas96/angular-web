import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppbarComponent } from './components/appbar/appbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImatgeScrollComponent } from './components/imatge-scroll/imatge-scroll.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TargetBlankDirective } from './directives/target-blank.directive';
import { SkillComponent } from './components/skill/skill.component';
import { GoogleAnalyticsModule } from './google-analytics/google-analytics.module';
import { QRCodeModule } from 'angularx-qrcode';
import { NavegacioTabComponent } from './components/navegacio-tab/navegacio-tab.component';
import { MadJumpgateComponent } from './components/mad-jumpgate/mad-jumpgate.component';
import { DetallsAndroidAppsComponent } from './pages/projects-page/detalls-android-apps/detalls-android-apps.component';

@NgModule({
    declarations: [
        AppComponent,

        // Components //
        AppbarComponent,
        FooterComponent,
        ImatgeScrollComponent,
    
        // Pages //
        HomePageComponent,
        ExperiencePageComponent,
        ProjectsPageComponent,

        // Directives //
        TargetBlankDirective,
        SkillComponent,
        NavegacioTabComponent,
        MadJumpgateComponent,
        DetallsAndroidAppsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        GoogleAnalyticsModule,
        QRCodeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
