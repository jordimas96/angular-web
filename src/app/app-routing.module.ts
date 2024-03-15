import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "experience",
        component: ExperiencePageComponent
    },
    {
        path: "projects",
        component: ProjectsPageComponent
    },
    {
        path: "**",
        redirectTo: ""
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
