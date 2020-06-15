import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  public results:any;
  public default:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://unpkg.com/country-flag-emoji-json@1.0.2/json/flag-emojis.json').subscribe(data => {
     // อ่านค่า result จาก JSON response ที่ส่งออกมา
     this.results = data;
     this.results.forEach(country => {
       
       if(country.code == "TH"){

         this.default = country
       }
     });

   });    
   
 }

}
