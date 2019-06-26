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


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,  RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
