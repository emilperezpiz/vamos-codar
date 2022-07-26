import { Injectable } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public siteName = environment.siteName
  public paramsRoute: any
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {
    router.events.subscribe((event: any) => {
      if (event.snapshot && event.snapshot.data && event.snapshot.data.params) {
        const object = event.snapshot.data
        this.paramsRoute = object.params
      }
    })
  }

  public addMetaDescription(description: string, othersName: string = ''): void {
    this.meta.updateTag({ name: 'description', content: description })
    this.meta.updateTag({
      name: 'keywords',
      content: 'Amappzing, Amappzing.com.br, Blog, Vamos Codar ' + othersName,
    })
  }

  public setTitle(title: string): void {
    this.title.setTitle(`${title} | ${this.siteName}`)
  }

  public getRouteParams(): any {
    return this.paramsRoute
  }

  public navigate(uri: string, _arguments: {[key: string]: string} = {}): void {
    this.router.navigate([`${uri}`, _arguments])
  }
}
