import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from '@angular/router';
import {Frage1Component} from "../fragen/frage1/frage1.component";
import {Frage2Component} from "../fragen/frage2/frage1.component";
import {Frage3Component} from "../fragen/frage3/frage3.component";
import {Frage4Component} from "../fragen/frage4/frage3.component";
import {Frage5Component} from "../fragen/frage5/frage3.component";
import {Frage6Component} from "../fragen/frage6/frage3.component";
import {Frage7Component} from "../fragen/frage7/frage3.component";
import {Frage8Component} from "../fragen/frage8/frage3.component";
import {Frage9Component} from "../fragen/frage9/frage3.component";
import {Frage10Component} from "../fragen/frage10/frage3.component";
import {Frage11Component} from "../fragen/frage11/frage3.component";
import {Frage12Component} from "../fragen/frage12/frage3.component";
import {Frage13Component} from "../fragen/frage13/frage3.component";
import {Frage14Component} from "../fragen/frage14/frage3.component";
import {Frage15Component} from "../fragen/frage15/frage3.component";
import {Frage16Component} from "../fragen/frage16/frage3.component";
import {Frage17Component} from "../fragen/frage17/frage3.component";
import {Frage18Component} from "../fragen/frage18/frage3.component";
import {Frage19Component} from "../fragen/frage19/frage3.component";
import {Frage20Component} from "../fragen/frage20/frage3.component";
import {Frage21Component} from "../fragen/frage21/frage3.component";
import {Frage22Component} from "../fragen/frage22/frage3.component";
import {Frage23Component} from "../fragen/frage23/frage3.component";
import {Frage24Component} from "../fragen/frage24/frage3.component";
import {Frage25Component} from "../fragen/frage25/frage3.component";
import {Frage26Component} from "../fragen/frage26/frage3.component";
import {Frage27Component} from "../fragen/frage27/frage3.component";
import {Frage28Component} from "../fragen/frage28/frage3.component";
import {Frage29Component} from "../fragen/frage29/frage3.component";
import {Frage30Component} from "../fragen/frage30/frage3.component";
import {Frage31Component} from "../fragen/frage31/frage3.component";
import {Frage32Component} from "../fragen/frage32/frage3.component";
import {Frage33Component} from "../fragen/frage33/frage3.component";
import {Frage34Component} from "../fragen/frage34/frage3.component";
import {Frage35Component} from "../fragen/frage35/frage3.component";
import {Frage36Component} from "../fragen/frage36/frage3.component";
import {Frage37Component} from "../fragen/frage37/frage3.component";
import {Frage38Component} from "../fragen/frage38/frage3.component";
import {Frage39Component} from "../fragen/frage39/frage3.component";
import {Frage40Component} from "../fragen/frage40/frage3.component";


const routes: Routes = [
  {path: '', redirectTo: 'frage1', pathMatch: 'full'},
  {path: 'frage1', component: Frage1Component},
  {path: 'frage2', component: Frage2Component},
  {path: 'frage3', component: Frage3Component},
  {path: 'frage4', component: Frage4Component},
  {path: 'frage5', component: Frage5Component},
  {path: 'frage6', component: Frage6Component},
  {path: 'frage7', component: Frage7Component},
  {path: 'frage8', component: Frage8Component},
  {path: 'frage9', component: Frage9Component},
  {path: 'frage10', component: Frage10Component},
  {path: 'frage11', component: Frage11Component},
  {path: 'frage12', component: Frage12Component},
  {path: 'frage13', component: Frage13Component},
  {path: 'frage14', component: Frage14Component},
  {path: 'frage15', component: Frage15Component},
  {path: 'frage16', component: Frage16Component},
  {path: 'frage17', component: Frage17Component},
  {path: 'frage18', component: Frage18Component},
  {path: 'frage19', component: Frage19Component},
  {path: 'frage20', component: Frage20Component},
  {path: 'frage21', component: Frage21Component},
  {path: 'frage22', component: Frage22Component},
  {path: 'frage23', component: Frage23Component},
  {path: 'frage24', component: Frage24Component},
  {path: 'frage25', component: Frage25Component},
  {path: 'frage26', component: Frage26Component},
  {path: 'frage27', component: Frage27Component},
  {path: 'frage28', component: Frage28Component},
  {path: 'frage29', component: Frage29Component},
  {path: 'frage30', component: Frage30Component},
  {path: 'frage31', component: Frage31Component},
  {path: 'frage32', component: Frage32Component},
  {path: 'frage33', component: Frage33Component},
  {path: 'frage34', component: Frage34Component},
  {path: 'frage35', component: Frage35Component},
  {path: 'frage36', component: Frage36Component},
  {path: 'frage37', component: Frage37Component},
  {path: 'frage38', component: Frage38Component},
  {path: 'frage39', component: Frage39Component},
  {path: 'frage40', component: Frage40Component},



];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,  RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
