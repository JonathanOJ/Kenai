import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KenaiLoginComponent } from "./kenai-login/kenai-login.component";
import { KenaiPrincipalScreenComponent } from "./kenai-principal-screen/kenai-principal-screen.component";

const routes: Routes = [
	{ path: "login", component: KenaiLoginComponent },
	{ path: "principal-screen/:username", component: KenaiPrincipalScreenComponent },
	{ path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
