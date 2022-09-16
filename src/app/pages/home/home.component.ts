import { Component, OnInit } from '@angular/core';
import { GetserviceService } from 'src/app/services/getservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: GetserviceService) { }

  ngOnInit(): void {
    this.ConsultaService();
  }

  ConsultaService(){
    this.service.GraficaGuias().subscribe(async (data: any) => {
      console.log(data)
    })
  }

}
