import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HearderUserComponent } from './components/hearder-user/hearder-user.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HearderUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideBarComponent
  ]
})
export class SharedModule { }
