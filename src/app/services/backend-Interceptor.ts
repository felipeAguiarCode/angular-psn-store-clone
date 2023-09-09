import { Injectable, Injector } from "@angular/core";
import {
	HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Observable, of } from "rxjs";
const games = [
	{
		gameCover: "cover01.webp",
		gameTitle: "Sea of Stars Demo",
		gameLabel: "PS5 - PS4",
		gameType: "Demo",
		gamePlatformTag: "Demo",
		gamePrice: "Gratuito",
	}, {
		gameCover: "cover02.webp",
		gameTitle: "Hogwarts Legacy ",
		gameLabel: "PS5",
		gameType: "Standard",
		gamePlatformTag: "Standard",
		gamePrice: "R$ 299,90",
	}, {
		gameCover: "cover03.webp",
		gameTitle: "Born Of Bread Demo",
		gameLabel: "PS5",
		gameType: "Demo",
		gamePlatformTag: "Demo",
		gamePrice: "Gratuito",
	}, {
		gameCover: "cover04.webp",
		gameTitle: "Tower of Fantasy",
		gameLabel: "PS5",
		gameType: "Pre venda",
		gamePlatformTag: "Pre venda",
		gamePrice: "R$ 157,99",
	}, {
		gameCover: "cover05.webp",
		gameTitle: "Fortnite",
		gameLabel: "PS5",
		gameType: "Standard",
		gamePlatformTag: "Standard",
		gamePrice: "Gratuito",
	}, {
		gameCover: "cover06.webp",
		gameTitle: "ARMORED CORE™ VI FIRES OF RUBICON™",
		gameLabel: "PS4 - PS5",
		gameType: "Pre venda",
		gamePlatformTag: "Pre venda",
		gamePrice: "R$ 299,90",
	}, {
		gameCover: "cover07.webp",
		gameTitle: "Mortal Kombat™ 1",
		gameLabel: "PS5",
		gameType: "Pre venda",
		gamePlatformTag: "Pre venda",
		gamePrice: "R$ 469,99",
	}, {
		gameCover: "cover08.webp",
		gameTitle: "Edição Standard do EA SPORTS FC™ 24",
		gameLabel: "PS5",
		gameType: "Pre venda",
		gamePlatformTag: "Pre venda",
		gamePrice: "R$ 369,99",
	}, {
		gameCover: "cover09.webp",
		gameTitle: "Edição Standard do EA SPORTS FC™ 24",
		gameLabel: "PS5",
		gameType: "Pre venda",
		gamePlatformTag: "Pre venda",
		gamePrice: "R$ 369,99",
	}, {
		gameCover: "cover10.webp",
		gameTitle: "Edição Standard do EA SPORTS FC™ 24",
		gameLabel: "PS5",
		gameType: "Pre venda",
		gamePlatformTag: "Pre venda",
		gamePrice: "R$ 369,99",
	}, {
		gameCover: "cover11.webp",
		gameTitle: "Edição Standard do EA SPORTS FC™ 24",
		gameLabel: "PS5",
		gameType: "Pre venda",
		gamePlatformTag: "Pre venda",
		gamePrice: "R$ 369,99",
	}, {
		gameCover: "cover12.webp",
		gameTitle: "Edição Standard do EA SPORTS FC™ 24",
		gameLabel: "PS5",
		gameType: "Pre venda",
		gamePlatformTag: "Pre venda",
		gamePrice: "R$ 369,99",
	}, {
		gameCover: "cover13.webp",
		gameTitle: "Edição Standard do EA SPORTS FC™ 24",
		gameLabel: "PS5",
		gameType: "Pre venda",
		gamePlatformTag: "Pre venda",
		gamePrice: "R$ 369,99",
	}, {
		gameCover: "cover14.webp",
		gameTitle: "Edição Standard do EA SPORTS FC™ 24",
		gameLabel: "PS5",
		gameType: "Pre venda",
		gamePlatformTag: "Pre venda",
		gamePrice: "R$ 369,99",
	}, {
		gameCover: "cover15.webp",
		gameTitle: "Edição Standard do EA SPORTS FC™ 24",
		gameLabel: "PS5",
		gameType: "Pre venda",
		gamePlatformTag: "Pre venda",
		gamePrice: "R$ 369,99",
	}, {
		gameCover: "cover16.webp",
		gameTitle: "Edição Standard do EA SPORTS FC™ 24",
		gameLabel: "PS5",
		gameType: "Pre venda",
		gamePlatformTag: "Pre venda",
		gamePrice: "R$ 369,99",
	},
]

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
	constructor(private injector: Injector) { }
	intercept(request: HttpRequest<any>, next: HttpHandler):
		Observable<HttpEvent<any>> {
		if (request.method === "GET" && request.url === "http://localhost:4200/games") {
			return of(new HttpResponse({ status: 200, body: games }));
		}
		return next.handle(request)
	}
}
