import {Component, OnInit} from '@angular/core';
import {AppService} from 'src/app/appService';
import {Resposta} from "./Resposta";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  status:Resposta[];

  constructor(private service: AppService) {}

  statusAtual():void {
    this.service.atualStatus().subscribe(
      (response) => {
        this.status = response;
      }
    )
  }

  statusEstado(estado: string):void {
    this.service.pegarEstado(estado).subscribe(
      (response) => {
        this.status = response;
      }
    )
  }

  statusData(data: string):void {
    this.service.pegarData({data:data}).subscribe(
      (response) => {
        this.status = response;
      }
    )
  }

  statusInstabilidade():void {
    this.service.pegarInstabilidade().subscribe(
      (response) => {
        this.status = [];
        this.status.push(response)
      }
    )
  }

  ngOnInit() {
    this.statusAtual()
  }
}



