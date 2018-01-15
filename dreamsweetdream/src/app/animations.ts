import { animation, style, animate } from "@angular/animations";
export var fadeAnimation = animation([
    style({ opacity: '{{ start }}' }),
    animate('{{ time }}',
      style({ opacity: '{{ end }}'}))
 ]);