import { Component } from '@angular/core';
import { PageComponent } from './../page/page.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends PageComponent {

    public salutacions = {
        "ca": ["Bon dia!", "Bona tarda!", "Bona nit!"],
        "es": ["¡Buenos días!", "¡Buenas tardes!", "¡Buenas noches!"],
        "en": ["Good morning!", "Good afternoon!", "Good evening!"],
    };
    
    
    override async ngOnInit() {
        super.ngOnInit();

        // Moviment i animació fons //
        $("body").css({ "background-position": "top left" });

        // Google Analytics //
        this.m.gas.pageView("/home");
    }

    override afterRootFadeIn() {
        super.afterRootFadeIn();
    }


    getSalutacioSegonsHora() {
        let horaActual = new Date().getHours();
        let index: number;

        const primeraHoraMati = 5;
        const primeraHoraTarda = 15;
        const primeraHoraVespre = 19;

        if (horaActual >= primeraHoraMati && horaActual < primeraHoraTarda)
            index = 0;
        else if (horaActual >= primeraHoraTarda && horaActual < primeraHoraVespre)
            index = 1;
        else
            index = 2;
        
        return this.salutacions[this.m.idioma][index] || "Hey!";
    }

    getRutaCV() {
        return `assets/CV/${this.m.idioma.toUpperCase()}/CV Jordi Mas Parramon.pdf`;
    }

    obrirVeureMesSkills() {
        $("#seccioBotoVeureMes").slideUp();
        $(".skills-ocultes").slideDown();
    }

}
