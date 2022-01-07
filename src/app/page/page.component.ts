import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  title : string;

  user : string;

  constructor(public route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.title = this.route.snapshot.paramMap.get('id');
      this.user = this.route.snapshot.paramMap.get('user');
    })
    //vecchio metodo 
    //this.title = this.route.snapshot.paramMap.get('id');
    //this.user = this.route.snapshot.paramMap.get('user');
   }

  ngOnInit(): void {
  }

}
