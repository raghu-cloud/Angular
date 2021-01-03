import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SettingcontactComponent } from './settingcontact/settingcontact.component';
import { SettingprofileComponent } from './settingprofile/settingprofile.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {path: '' , redirectTo : '/home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent },
  {path : 'settings',
   component : SettingsComponent,
   children : [
    { path : 'profile', component : SettingprofileComponent},
    { path : 'contact' , component : SettingcontactComponent}
  ]},
  {path : '**' , component :  PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
