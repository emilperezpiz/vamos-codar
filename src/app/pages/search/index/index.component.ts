import { CommonService } from './../../../shared/services/common.service';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    public serviceCommon: CommonService,
    public serviceSearch: SearchService
  ) { }

  ngOnInit(): void {
  }

}
