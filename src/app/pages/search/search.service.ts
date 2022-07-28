import { Observable } from 'rxjs';
import { CustomResponse } from './../../shared/model/custom-response.model';
import { Post } from './../post/post.model';
import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends RequestService<Post> {
  constructor() {
    super('post');
  }

  public getByText(text: string): Observable<CustomResponse<Post>> {
    return this.httpClient.get<CustomResponse<Post>>(`${this.host}`);
  }
}
