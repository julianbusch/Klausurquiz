import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frage1',
  templateUrl: './frage1.component.html',
  styleUrls: ['./frage1.component.css']
})
export class Frage1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doit(): void {
    document.getElementById("lösung").style.display="block";
  }

  removelsg(): void {
    document.getElementById("lösung").style.display="none";
  }

}
