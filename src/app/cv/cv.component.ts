import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DATA_DE } from '../data-de';
import { DATA_EN } from '../data-en';
import { ICurriculumVitae } from '../models';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
    data: ICurriculumVitae;

    constructor(private readonly translateService: TranslateService) {
        this.data = DATA_DE;
    }

    switchLanguage(lang: 'de-DE' | 'en-US'): void {
        this.data = lang === 'de-DE' ? DATA_DE : DATA_EN;
        this.translateService.use(lang);
    }
}
