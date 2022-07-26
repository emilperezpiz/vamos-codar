import { Post } from './../post.model';
import { PostService } from './../post.service';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from './../../../shared/services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  public posts: Post[] = [];
  constructor(
    private route: ActivatedRoute,
    public serviceCommon: CommonService,
    public servicePost: PostService
  ) {}

  async ngOnInit() {
    this.posts = await this.getBySlug(
      this.route.snapshot.paramMap.get('slug') || ''
    );
  }

  getBySlug(slug: string): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      try {
        this.servicePost.getBySlug(slug).subscribe((response) => {
          resolve(response);
        });
      } catch (error) {
        console.error(error);
      } finally {
        console.log('end loading');
      }
    });
    return promise;
  }
}
