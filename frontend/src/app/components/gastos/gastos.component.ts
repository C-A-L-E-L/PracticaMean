import { Component, OnInit } from '@angular/core';

//
import { NgForm } from '@angular/forms';
import { GastoService } from '../../services/gasto.service';
import { Gasto } from '../../models/gasto';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})

export class GastosComponent implements OnInit {
  tipo='';

  constructor(private gastoService: GastoService) {
    this.gastoService = gastoService;
  }

  ngOnInit(): void {
    this.getGastos();
  }

  getGastos() {
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.gastoService.selectedGasto = new Gasto();
    }
  }

}
