import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-facebook-sginin',
  templateUrl: './facebook-sginin.component.html',
  styleUrls: ['./facebook-sginin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FacebookSgininComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  }

  url = `https://www.facebook.com/v2.11/dialog/oauth?
  client_id=2065091893721004
  &response_type=token
  &scope=public_profile%2Cemail
  &redirect_uri=http%3A%2F%2Flocalhost:4201/fbLogin`;

  getUrl = `https://graph.facebook.com/v2.11/me?fields=name,picture.height(1000).width(1000)%2Cfirst_name%2Clast_name%2Cemail&access_token=`;
  
  //https://forum.bubble.is/t/solved-fb-login-domain-problem/3267/19

   fbLogin() {
     let Mwidth = window.outerWidth;
     let Mheight = window.outerHeight;
     let Dwidth = 600;
     let Dheight = 600;
     let top = Mheight/2 - Dheight/2;
     let left = Mwidth/2 - Dwidth/2;
     let specs = "top=" + top + ",left=" + left + ",width=" + Dwidth + ",height=" + Dheight;

     let win = window.open(this.url, "_blank",specs);
     var refreshId = setInterval(() => {
       if(win.location.hash){
         let info = win.location.hash.substr(1, win.location.hash.length);
         let accessToken = info.split('&')[0].split('=')[1];
         this.getUrl = this.getUrl + accessToken;    
         
         this.http.get(this.getUrl).subscribe(res => {
          let resp = res.json();
          let profileJson = {"ID": resp.id, "Name": resp.name, 
          "Image URL": resp.picture.data.url + '?sz=600', "Email": resp.email};
          console.log(profileJson);

         })
        
         win.close();
         clearInterval(refreshId);
       }                        
        }, 500);
  }
}
