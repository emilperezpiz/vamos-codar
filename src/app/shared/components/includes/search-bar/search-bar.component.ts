import { CommonService } from './../../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  public searchText: string;
  constructor(public serviceCommon: CommonService) {
    this.searchText = '';
  }

  ngOnInit(): void {}

  goSearch(f: any): void {
    f.form.status === 'VALID'
      ? this.serviceCommon.navigate('/pesquisar', { query: this.searchText })
      : EMPTY;
  }
}
