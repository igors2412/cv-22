import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DATA_DE } from '../data-de';
import { DATA_EN } from '../data-en';
import { ICurriculumVitae, SupportedLanguage } from '../models';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
    data!: ICurriculumVitae;
    currentLang: SupportedLanguage = 'de-DE';

    constructor(private readonly translateService: TranslateService) {
        this.switchLanguage('de-DE');
    }

    switchLanguage(lang: SupportedLanguage): void {
        this.data = lang === 'de-DE' ? DATA_DE : DATA_EN;
        this.currentLang = lang;
        this.translateService.use(lang);
    }

    isCurrentLanguage(lang: SupportedLanguage): boolean {
        return this.currentLang === lang;
    }

    print(): void {}
}
