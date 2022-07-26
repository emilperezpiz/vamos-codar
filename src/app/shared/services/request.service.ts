import { environment } from './../../../environments/environment.prod'
import { CustomResponse } from './../model/custom-response.model'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { InjectorInstance } from 'src/app/app.module'

export abstract class RequestService<T> {
  public httpClient: HttpClient
  public host = environment.host
  public uri: string
  constructor(uri: string) {
    this.httpClient = InjectorInstance.get<HttpClient>(HttpClient)
    this.uri = uri
  }

  public getAll(): Observable<CustomResponse<T[]>> {
    return this.httpClient.get<CustomResponse<T[]>>(`${this.host}/${this.uri}`)
  }

  public getById(id: any): Observable<CustomResponse<T>> {
    return this.httpClient.get<CustomResponse<T>>(`${this.host}/${this.uri}/${id}`)
  }
}
