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
  status: string;
  loading = false;
  lastUpdate = Date.now();

  constructor(private ewelinkService: EwelinkService) { }

  ngOnInit() {
    this.updateSubscription = interval(10000).subscribe( val => {
        this.updateDevice();
      });
    this.status = this.device.params.switch || 'off';
  }

  updateDevice(){
    this.loading = true;
    this.ewelinkService.getDevice(this.device.deviceid).subscribe( (res: any) => {
      this.lastUpdate = Date.now();
      this.device = res.device;
      this.loading = false;
    });
  }

  toogleDevice(id,channel='1'){
    this.loading = true;
    this.ewelinkService.toggleDevice(id, channel).subscribe( (res: any) => {
      this.status = res.status.state;
      this.loading = false;
    });

  }

  getPowerUsage(id){
    this.ewelinkService.getPowerUsage(id).subscribe( res => {
      console.log(res);
    });
  }

}
