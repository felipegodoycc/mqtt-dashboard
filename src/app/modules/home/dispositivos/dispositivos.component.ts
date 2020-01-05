import { Component, OnInit } from '@angular/core';
import { EwelinkService } from 'src/app/core/services/ewelink.service';
import { Device } from 'src/app/shared/interface/device.interface';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit {
  devices: Device[] = [];

  constructor(private ewelinkService: EwelinkService) { }

  ngOnInit() {
    this.ewelinkService.getDevices().subscribe( (res:any) => {
      this.devices = res.devices;
      console.log(this.devices)
    })
  }
}
