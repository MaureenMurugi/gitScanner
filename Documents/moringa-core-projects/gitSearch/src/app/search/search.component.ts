import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProfileComponent } from '../components/profile/profile.component';
import { SearchService } from '../services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  username: any;
  profile: any;
  repos: any;


  // @Output() addQuote = new EventEmitter<Quote>();
  // createNewQuote(){
  //   this.addQuote.emit(this.model);
  // }

  

  findProfile() {
    this.searchComponent.updateProfile(this.username);
    this.searchComponent.getProfileInfo().subscribe((profile: any) => {
      console.log(profile);
      this.profile = profile;
    });

    this.searchComponent.getProfileRepos().subscribe((repos: any) => {
      console.log(repos);
      this.repos = repos;
    }) 
   }

  constructor(private searchComponent: SearchService) {
    
   }


  ngOnInit(): void {
  }

}
