import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cursos = ['Angular', 'CSS', 'vue.js', 'React', 'Python'];
  
  agregarTexto(nombres:String) {
    this.cursos.push(String(nombres));
    console.log(this.cursos);
    // this.cursos.forEach(element => {
    //   document.querySelector('li').innerHTML += "<li>" + element + "<li>";
    // })
  }
}
