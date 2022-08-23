import { Component, OnInit } from '@angular/core';
import { Explab } from 'src/app/model/explab';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExplabComponent implements OnInit {
  expr: Explab[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
  this.cargarExplab();
    if(this.tokenService.getToken()){
      this.isLogged = true;
  } else{
    this.isLogged = false;
  }

}
 cargarExplab():void{
  this.sExperiencia.lista().subscribe(
    data => {
      this.expr = data;
    })
  }

 delete(id?: number){
  if(id != undefined)
  this.sExperiencia.delete(id).subscribe(
    data => {
      this.cargarExplab();
    }, err => {
      alert("No se pudo borrar");
    }
  )
 }
}
