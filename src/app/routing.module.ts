import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";
import { FormComponent } from "./form/form.component";

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'form', component: FormComponent},
    {path: 'details/:id', component: DetailComponent},
    
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}