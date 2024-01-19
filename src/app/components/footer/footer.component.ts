import { Component, ElementRef } from '@angular/core';
import * as $ from "jquery";
import { MainService } from 'src/app/services/main.service';
import { Utils } from '../../shared/utils';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    public colorFirma = Math.floor(Math.random() * 360);
    public bateria = 100;
    public carregant = true;
    

    constructor(
        public m: MainService,
        public rootElement: ElementRef,
    ) {
        // m.footer = this;
    }

    ngOnInit() {
        this.m.afterRootFadeIn(this.afterRootFadeIn.bind(this));

        // Fill battery info //
        try {
            (navigator as any).getBattery().then(bateria => {
                this.bateria = bateria.level * 100;
                this.carregant = bateria.charging;
            })
        } catch (e) { }
    }

    afterRootFadeIn() {
        $(this.rootElement.nativeElement).find(".contact-icons a").each((i, e) => {
            Utils.fadeIn(e, i * 100);
        });
    }

}
