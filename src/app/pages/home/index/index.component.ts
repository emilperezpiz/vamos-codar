import { PostService } from './../../post/post.service';
import { CommonService } from './../../../shared/services/common.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(
    public servicePost: PostService,
    public serviceCommon: CommonService
  ) {}

  ngOnInit(): void {
    console.log(this.serviceCommon.getRouteParams().uriId);
    this.init()
  }

  private init() {
    forkJoin(this.servicePost.getAll()).subscribe((resp) => {
      console.log(resp);
    })
  }

  public goPost(slug: string) {
    return this.serviceCommon.navigate(`post/${slug}`)
  }
}
