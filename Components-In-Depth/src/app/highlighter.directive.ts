import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @Input('appHighlighter') colour = 'Yellow';

  constructor(private element: ElementRef) {
    
   }

   @HostListener('mouseenter') addHighlighter(){
     this.element.nativeElement.style.backgroudColor='Yellow';
   }

   @HostListener('mouseleave') removeHighlighter(){
    this.element.nativeElement.style.backgroudColor=null;
   }

}
