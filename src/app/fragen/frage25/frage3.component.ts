import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frage3',
  templateUrl: './frage3.component.html',
  styleUrls: ['./frage3.component.css']
})
export class Frage25Component implements OnInit {

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
