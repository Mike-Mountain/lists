import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { List } from '../../../modules/lists/store/list.model';

@Directive({
  selector: '[appBgImage]',
})
export class BgImageDirective implements OnInit {
  @Input() list: List | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.list) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background',
        `url("${this.list.coverImage}") no-repeat center center/100%`
      );
    }
  }
}
