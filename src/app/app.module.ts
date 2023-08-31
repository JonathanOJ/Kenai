import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KenaiBodyComponent } from './kenai-body/kenai-body.component';
import { KenaiHeaderComponent } from './kenai-header/kenai-header.component';
import { KenaiFooterComponent } from './kenai-footer/kenai-footer.component';
import { KenaiLogoComponent } from './kenai-logo/kenai-logo.component';
import { KenaiHeaderButtonsComponent } from './kenai-header-buttons/kenai-header-buttons.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { KenaiListComponent } from './kenai-list/kenai-list.component';
import { KenaiInformationComponent } from './kenai-information/kenai-information.component';
import { KenaiGalleryComponent } from './kenai-gallery/kenai-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    KenaiBodyComponent,
    KenaiHeaderComponent,
    KenaiFooterComponent,
    KenaiLogoComponent,
    KenaiHeaderButtonsComponent,
    KenaiListComponent,
    KenaiInformationComponent,
    KenaiGalleryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private sanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    matIconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    );
  }
}
