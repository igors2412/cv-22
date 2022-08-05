import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
@NgModule({
    declarations: [AppComponent, CvComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatSliderModule,
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: 'de-DE',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(private readonly iconRegistry: MatIconRegistry) {
        this.iconRegistry.setDefaultFontSetClass('material-icons-outlined');
    }
}
