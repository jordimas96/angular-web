import { Component } from '@angular/core';
import { PageComponent } from '../page.component';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience-page.component.html',
    styleUrls: ['./experience-page.component.scss', '../page.scss']
})
export class ExperiencePageComponent extends PageComponent {

    override async ngOnInit() {
        super.ngOnInit();
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }

}
