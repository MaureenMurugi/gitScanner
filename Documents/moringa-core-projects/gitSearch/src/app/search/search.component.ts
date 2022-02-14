import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../components/profile/profile.component';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

}
