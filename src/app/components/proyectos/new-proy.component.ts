import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto';
import { ImagenService } from 'src/app/service/imagen.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-new-proy',
  templateUrl: './new-proy.component.html',
  styleUrls: ['./new-proy.component.css']
})
export class NewProyComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  imag: string = '';




  constructor(private proyectoS: ProyectoService, private router: Router,
    private activatedRouter: ActivatedRoute, public imagenService: ImagenService,
    private tokenService: TokenService) { }



    ngOnInit(): void {

    }

  onCreate(): void {
    const proyect = new proyecto(this.nombre, this.descripcion, this.imag);
    this.imag = this.imagenService.url;
    this.proyectoS.save(proyect).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló al añadir");
        this.router.navigate(['']);
      }
    )

  }
  uploadImage($event:any){
    const name = "proyect_" + this.nombre; 
    this.imagenService.uploadImage($event, name)

  }
}
