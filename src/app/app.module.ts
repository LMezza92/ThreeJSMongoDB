import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FrameComponent } from './frame/frame.component';
import { FooterComponent } from './footer/footer.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HorizonComponent } from './horizon/horizon.component';
import { AdDirective } from './ad-banner/ad.directive';
import { AdService } from './services/ad.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemComponent } from './item/item.component';
import { ItemsDraggableComponent } from './items-draggable/items-draggable.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingPageComponent,
    FrameComponent,
    AdDirective,
    FooterComponent,
    ContactPageComponent,
    HorizonComponent,
    DashboardComponent,
    ItemComponent,
    ItemsDraggableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
