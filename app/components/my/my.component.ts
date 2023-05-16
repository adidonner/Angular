import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit{

  searchTitle = 'Search';
  searchWord = '';
  isBusy = false;
  results: string[] =[];

  constructor() {

  }

  ngOnInit(): void {
  }

  search(){
    this.isBusy = true;
    setTimeout(() => {
      this.results = this.doSearch();
      this.isBusy = false;
    }, 3000);

  }

  private doSearch(){
    let arr  = [];
    for(let i=0;i<10;i++){
      arr.push(this.searchWord + ' ' + i)
    }
    return arr;
  }
}
