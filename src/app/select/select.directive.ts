import { HttpClient } from '@angular/common/http';
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[select]',
  standalone: true
})
export class SelectDirective implements OnInit {

  @Input({required: true}) selectFrom!: any;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef,
              private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get(this.selectFrom).subscribe((res: any) => {

      this.viewContainerRef.createEmbeddedView(this.templateRef, {
      // Create the embedded view with a context object that contains
      // the data via the key `$implicit`.
      $implicit: res.title,
    });
    })
  }
}
