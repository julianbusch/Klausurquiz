import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Frage1Component } from './frage1/frage1.component';
import {Frage2Component} from "./frage2/frage1.component";
import { Frage3Component } from './frage3/frage3.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {Frage4Component} from "./frage4/frage3.component";
import {Frage5Component} from "./frage5/frage3.component";
import {Frage6Component} from "./frage6/frage3.component";
import {Frage7Component} from "./frage7/frage3.component";
import {Frage8Component} from "./frage8/frage3.component";
import {Frage9Component} from "./frage9/frage3.component";
import {Frage10Component} from "./frage10/frage3.component";

@NgModule({
  declarations: [Frage1Component, Frage2Component, Frage3Component, Frage4Component, Frage5Component, Frage6Component,
    Frage7Component, Frage8Component, Frage9Component, Frage10Component
  ],
  imports: [
    CommonModule, FormsModule,
    RouterModule
  ],
  exports: [
    Frage1Component, Frage2Component, Frage3Component, Frage4Component
  ]
})
export class FragenModule { }
