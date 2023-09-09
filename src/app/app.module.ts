import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendInterceptor } from './services/backend-Interceptor';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { CardDescriptionComponent } from './components/card/card-description/card-description.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductOptionComponent } from './components/product-option/product-option.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CardComponent,
		MenuBarComponent,
		CardLabelComponent,
		CardPricingComponent,
		CardDescriptionComponent,
		FooterComponent,
		ProductOptionComponent,
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		AppRoutingModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BackendInterceptor,
			multi: true
		},
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
