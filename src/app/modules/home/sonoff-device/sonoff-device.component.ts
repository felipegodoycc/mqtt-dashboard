import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/app/shared/interface/device.interface';
import { EwelinkService } from 'src/app/core/services/ewelink.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-sonoff-device',
  templateUrl: './sonoff-device.component.html',
  styleUrls: ['./sonoff-device.component.css']
})
export class SonoffDeviceComponent implements OnInit {
  @Input() device: Device;
  private updateSubscription: Subscription;
  
  constructor(private ewelinkService: EwelinkService) { }

  ngOnInit() {
    this.updateSubscription = interval(10000).subscribe( val => {
        this.updateDevice();
      })
  }

  updateDevice(){
    this.ewelinkService.getDevice(this.device.deviceid).subscribe( (res:any) => {
      this.device = res.device;
    })
  }

  toogleDevice(id,channel="1"){
    this.ewelinkService.toggleDevice(id,channel).subscribe( res => {
      console.log(res);
      this.updateDevice();
    })

  }

  getPowerUsage(id){
    this.ewelinkService.getPowerUsage(id).subscribe( res => {
      console.log(res)
    })
  }

}
