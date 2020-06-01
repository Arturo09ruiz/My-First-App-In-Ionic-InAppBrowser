import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private browser:InAppBrowser) {

  }


 moi(){

  let options: InAppBrowserOptions = {
    fullscreen: 'yes' ,
    hidden: 'yes',
    hidenavigationbuttons: 'yes',
    hidespinner: 'yes' , 
    hideurlbar: 'yes' , 
    toolbar: 'no',
  } 


  this.browser.create('https://touch.facebook.com/moises.serrano.3956', '_self', options);

 }
 
 hen(){

  let options: InAppBrowserOptions = {
    fullscreen: 'yes' ,
    hidden: 'yes',
    hidenavigationbuttons: 'yes',
    hidespinner: 'yes' , 
    hideurlbar: 'yes' , 
    toolbar: 'no',
  } 


  this.browser.create('https://touch.facebook.com/hnery', '_self', options);

 }











}
