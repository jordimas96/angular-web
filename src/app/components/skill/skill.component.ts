import { Component, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Utils } from 'src/app/shared/utils';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss']
})
export class SkillComponent {

    constructor(public m: MainService) { }

    @Input("n") nom: string;
    @Input("showTime") showTime: boolean;
    @Input("ampladaNom") ampladaNom: number;

    normalitzar(s) {
        return s
            .normalize()
            .toLowerCase()
            .replaceAll("#", "sharp")
            .replaceAll("/", "")
            .replaceAll(" ", "")
    }
    buscarGoogle(s) {
        s = s
            .replaceAll(" ", "+")
            .replaceAll("#", "sharp");
        
        s = `https://www.google.com/search?btnI&q=${s}`;
        window.open(s, "_blank");
    }

    getAnysExp() {
        return this.m.exp.getTextExp(this.nom);
    }
    getTextCurt() {
        if (!this.m.exp.experienciaPerSkills[this.nom])
            return "";
        else
            return this.m.exp.construirCadenaTempsExpCurta(this.m.exp.experienciaPerSkills[this.nom].anysMesosDies);
    }
    getText_anysMesosDies() {
        if (!this.m.exp.experienciaPerSkills[this.nom])
            return "";
        else
            return this.m.exp.construirCadenaTempsExp(this.m.exp.experienciaPerSkills[this.nom].anysMesosDies);
    }
    getText_anysMesos() {
        if (!this.m.exp.experienciaPerSkills[this.nom])
            return "";
        else
            return this.m.exp.construirCadenaTempsExp_anysMesos(this.m.exp.experienciaPerSkills[this.nom].anysMesosDies);
    }
    getNivellBarra() {
        return (this.m.exp.getSkill(this.nom).diesTotals || 0) / this.m.exp.getSkill("_total").diesTotals * 100;
    }
    getTextTooltip() {
        if (this.m.exp.getSkill(this.nom).empreses?.length) {
            return this.getText_anysMesosDies() + // 2 years, 6 months and 9 days //
                "\n" +
                ["en", "en", "in"][this.m.idiomaIndex] + " " + // in //
                Utils.addConjunctionBetweenThe2Last(this.m.exp.getSkill(this.nom).empreses, this.m.conjuncio); // Evora, Orange and In2art //
        } else {
            return [
                "Experiència només en projectes personals",
                "Experiencia sólo en proyectos personales",
                "Experience in personal projects only"
            ][this.m.idiomaIndex];
        }
    }


    // Strings //
    experienciaEn_string() {
        return ["Experiència en", "Experiencia en", "Experience in"][this.m.idiomaIndex];
    }
    en_string() {
        return ["en", "en", "in"][this.m.idiomaIndex];
    }
};
