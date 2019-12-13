import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { SwapiService } from '../swapi.service';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  //public items: Array<{ title: string; note: string; icon: string }> = [];
  public items: string[] = ['Tom'];
  constructor(
    private sharedDataFooSvc: SharedDataService
    , private swapiSvc: SwapiService
  ) {}

  ngOnInit() {

    this.swapiSvc.getPlanets().subscribe(
      data => {
        console.log(data);

        this.items = [
          ...this.items
          , ...(<any> data).results.map(x => x.name)
        ].sort()

        console.log(this.items);
      }
      , err => console.error(err)
    );

  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
