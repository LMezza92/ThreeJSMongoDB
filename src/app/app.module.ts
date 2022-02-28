import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FrameComponent } from './frame/frame.component';
import { AdDirective } from './ad.directive';
import { AdService } from './services/ad.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingPageComponent,
    FrameComponent,
    AdDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
