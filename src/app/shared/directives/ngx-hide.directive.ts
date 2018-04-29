import {
  Directive,
  ElementRef,
  // HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appNgxHide]'
})

export class NgxHideDirective {
  @Input() ngxHide: boolean;
  constructor(private el: ElementRef)  {
    if (this.ngxHide = true) {
      el.nativeElement.style.display = 'none';
    } else {
      el.nativeElement.style.display = '';
    }
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.hideTest(this.ngxHide);
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.hideTest(false);
  // }
  // private hideTest(test: boolean) {
  //   if (test === true) {
  //     this.el.nativeElement.style.display = 'none';
  //   } else {
  //     this.el.nativeElement.style.display = '';
  //   }
  // }
}
