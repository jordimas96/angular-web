import { Component } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/services/utils.service';

@Component({
    selector: 'app-experience-page',
    templateUrl: './experience-page.component.html',
    styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent {

    constructor(public m: MainService) { }

    async ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Moviment i animació fons //
        $("body").css({ "background-position": "center center" });
        await Utils.wait(0);
        $("body").css({ "transition": "background-position 0.3s ease" });

        // Google Analytics //
        this.m.gas.pageView(window.location.pathname);
    }

    afterRootFadeIn() {
        $(".content>.ocult-animacio:not([hidden])").each((i, e) => {
            Utils.fadeIn(e, i * 250);
        });
        $("app-skill").each((i, e) => {
            Utils.fadeIn(e, i * 20);
        });
    }

}
