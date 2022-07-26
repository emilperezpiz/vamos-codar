import { Post } from './post.model';
import { CustomResponse } from './../../shared/model/custom-response.model';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { RequestService } from './../../shared/services/request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService extends RequestService<Post> {
  constructor() {
    super('post');
  }

  public getBySlug(slug: string): Observable<CustomResponse<Post>> {
    return this.httpClient.get<CustomResponse<Post>>(`${this.host}`);
  }
}
