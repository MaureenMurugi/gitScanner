import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private username: string;
  private clientid = 'f47601a1aea6aca089b7';
  private clientsecret = 'e09a8920ab3b11709c6259b1986717161ebe1922';


  constructor(private http: HttpClient) { 
    console.log("Well, here we are!");
    this.username = '';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id" + this.clientid
    + "&client_secret=" + this.clientsecret)
   ;
  }

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id" + this.clientid
    + "&client_secret=" + this.clientsecret)
   ;
  }
  updateProfile(username:string){
    this.username = username;

  }
}
