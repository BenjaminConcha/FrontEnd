import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto';
import { ImagenService } from 'src/app/service/imagen.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-proy',
  templateUrl: './edit-proy.component.html',
  styleUrls: ['./edit-proy.component.css'],
})
export class EditProyComponent implements OnInit {
  proyecto: proyecto = null;

  constructor(
    private proyectoS: ProyectoService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imagenService: ImagenService,
    private tokenService:TokenService
  ) { }

  isLogged = false;

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.proyectoS.detail(id).subscribe(
      (data) => {
        this.proyecto = data;
      },
      (err) => {
        alert('Error al modificar proyecto');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    if (this.imagenService.url != '') {
      this.proyecto.imag = this.imagenService.url;
    }
    this.proyectoS.update(id, this.proyecto).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar proyecto');
        this.router.navigate(['']);
      }
    );

  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'proyecto_' + id;
    this.imagenService.uploadImage($event, name);
  }
}
