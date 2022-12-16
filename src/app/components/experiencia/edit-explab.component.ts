import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Explab } from 'src/app/model/explab';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-explab',
  templateUrl: './edit-explab.component.html',
  styleUrls: ['./edit-explab.component.css']
})
export class EditExplabComponent implements OnInit {
  explr: Explab = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
       this.explr = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.explr).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }
}
