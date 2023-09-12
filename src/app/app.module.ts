import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppCardComponent } from './shared/app-card/app-card.component';
import { AppMenuBarComponent } from './shared/app-menu-bar/app-menu-bar.component';
import { CardLabelComponent } from './shared/app-card/card-label/card-label.component';
import { CardPricingComponent } from './shared/app-card/card-pricing/card-pricing.component';
import { MenuBarItemComponent } from './shared/app-menu-bar/menu-bar-item/menu-bar-item.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		AppCardComponent,
		AppMenuBarComponent,
		CardLabelComponent,
		CardPricingComponent,
		AppCardComponent,
		AppMenuBarComponent,
  MenuBarItemComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
