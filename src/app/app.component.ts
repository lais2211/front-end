import {Component, OnInit} from '@angular/core';
import {AppService} from 'src/app/appService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  status!: Array<any>;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.listar()
      .subscribe(resposta => this.status = resposta);
  }
}

