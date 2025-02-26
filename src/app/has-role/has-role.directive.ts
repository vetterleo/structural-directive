import { Directive, inject, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Role, User } from './has-role.component';



@Directive({
  selector: '[hasRole]',
  standalone: true
})
export class HasRoleDirective implements OnInit, OnChanges {

  private templateRef = inject(TemplateRef<unknown>);
  private viewContainer = inject(ViewContainerRef);

  @Input('hasRole') role: Role | Role[] | undefined = undefined;
  @Input('hasRoleUser') user?: User;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {

    if (this.role === 'ADMIN' && this.user?.isAdmin) {
      this.addTemplate()
    }
    else {
      this.clearTemplate()
    }
  }

  private addTemplate() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }


  private clearTemplate() {
    this.viewContainer.clear();
  }

}
