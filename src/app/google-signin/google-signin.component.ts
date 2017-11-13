import { Component, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';

declare const gapi: any;

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GoogleSigninComponent implements AfterViewInit {
  
    private clientId:string = '1044068226622-b3kfj2vb5qkslmo9s1nj8au9hcbo3r02.apps.googleusercontent.com';
    
    private scope = [
      'profile',
      'email',
      
    ].join(' ');
  
    public auth2: any;
    
    public googleInit() {
      
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: this.clientId,
          cookiepolicy: 'single_host_origin',
          scope: this.scope
        });
        this.attachSignin(this.element.nativeElement.firstChild);
      });
    }
    
    public attachSignin(element) {
      this.auth2.attachClickHandler(element, {},
        (googleUser) => {
          let profile = googleUser.getBasicProfile();
          let profileJson = {"ID": profile.getId(), "Name": profile.getName(), 
          "Image URL": profile.getImageUrl() + '?sz=600', "Email": profile.getEmail()};
          console.log(profileJson);
          
        }, function (error) {
          console.log(JSON.stringify(error, undefined, 2));
        });
    }
  
    constructor(private element: ElementRef) {
      console.log('ElementRef: ', this.element);
    }
  
    ngAfterViewInit() {
      this.googleInit();
    }
  
  }
  
  