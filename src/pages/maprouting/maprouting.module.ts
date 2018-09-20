import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaproutingPage } from './maprouting';

@NgModule({
  declarations: [
    MaproutingPage,
  ],
  imports: [
    IonicPageModule.forChild(MaproutingPage),
  ],
})
export class MaproutingPageModule {}
