import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { HearderUserComponent } from './hearder-user/hearder-user.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HearderUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
