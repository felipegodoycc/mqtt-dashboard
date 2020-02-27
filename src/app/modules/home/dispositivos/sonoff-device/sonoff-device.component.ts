import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/app/shared/interface/device.interface';
import { EwelinkService } from 'src/app/core/services/ewelink.service';
import { Subscription, interval } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth-api.service';

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

  constructor(private ewelinkService: EwelinkService,
              private auth: AuthService) { }

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

  toogleDevice(id: string,channel='1'){
    this.loading = true;
    this.ewelinkService.toggleDevice(id, channel).subscribe( (res: any) => {
      this.status = res.status.state;
      this.loading = false;
    });

  }

  getPowerUsage(id: string){
    this.ewelinkService.getPowerUsage(id).subscribe( res => {
      console.log(res);
    });
  }

  canControl(){
    return this.auth.canControl();
  }

}
