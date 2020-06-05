import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  public frmLocation: FormGroup;
  constructor( private router: Router ) {

    this.frmLocation = new FormGroup({
      name: new FormControl(null, Validators.required),
      area: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
  }

  cancelar() {
    this.router.navigateByUrl('Location');
  }

}
