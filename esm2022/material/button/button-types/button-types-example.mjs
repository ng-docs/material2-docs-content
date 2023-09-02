import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
import * as i3 from "@angular/material/icon";
/**
 * @title Button varieties
 */
export class ButtonTypesExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ButtonTypesExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: ButtonTypesExample, isStandalone: true, selector: "button-types-example", ngImport: i0, template: "<h3>Basic Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Raised Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Stroked Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-stroked-button>Basic</button>\n  <button mat-stroked-button color=\"primary\">Primary</button>\n  <button mat-stroked-button color=\"accent\">Accent</button>\n  <button mat-stroked-button color=\"warn\">Warn</button>\n  <button mat-stroked-button disabled>Disabled</button>\n  <a mat-stroked-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Flat Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-flat-button>Basic</button>\n  <button mat-flat-button color=\"primary\">Primary</button>\n  <button mat-flat-button color=\"accent\">Accent</button>\n  <button mat-flat-button color=\"warn\">Warn</button>\n  <button mat-flat-button disabled>Disabled</button>\n  <a mat-flat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Icon Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-icon-button matTooltip=\"Basic\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-icon-button disabled aria-label=\"Example icon-button with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-icon-button matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-fab matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-fab matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-fab matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-fab disabled aria-label=\"Example fab with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-fab matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Mini Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-mini-fab matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-mini-fab matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-mini-fab matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-mini-fab disabled aria-label=\"Example mini fab with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-mini-fab matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Extended Fab</h3>\n<div class=\"example-button-row\">\n  <button mat-fab extended color=\"primary\">\n    <mat-icon>favorite</mat-icon>\n    Primary\n  </button>\n  <button mat-fab extended color=\"accent\">\n    <mat-icon>favorite</mat-icon>\n    Accent\n  </button>\n  <button mat-fab extended color=\"warn\">\n    <mat-icon>favorite</mat-icon>\n    Warn\n  </button>\n  <button mat-fab extended disabled>\n    <mat-icon>favorite</mat-icon>\n    Disabled\n  </button>\n  <a mat-fab extended routerLink=\".\">\n    <mat-icon>favorite</mat-icon>\n    Link\n  </a>\n</div>\n", styles: [".example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n\n.example-disabled {\n  display: inline-block;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatIconAnchor, selector: "a[mat-icon-button]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatMiniFabAnchor, selector: "a[mat-mini-fab]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatMiniFabButton, selector: "button[mat-mini-fab]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatFabAnchor, selector: "a[mat-fab]", inputs: ["disabled", "disableRipple", "color", "tabIndex", "extended"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatFabButton, selector: "button[mat-fab]", inputs: ["disabled", "disableRipple", "color", "tabIndex", "extended"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ButtonTypesExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-types-example', standalone: true, imports: [MatButtonModule, MatTooltipModule, MatIconModule], template: "<h3>Basic Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Raised Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Stroked Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-stroked-button>Basic</button>\n  <button mat-stroked-button color=\"primary\">Primary</button>\n  <button mat-stroked-button color=\"accent\">Accent</button>\n  <button mat-stroked-button color=\"warn\">Warn</button>\n  <button mat-stroked-button disabled>Disabled</button>\n  <a mat-stroked-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Flat Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-flat-button>Basic</button>\n  <button mat-flat-button color=\"primary\">Primary</button>\n  <button mat-flat-button color=\"accent\">Accent</button>\n  <button mat-flat-button color=\"warn\">Warn</button>\n  <button mat-flat-button disabled>Disabled</button>\n  <a mat-flat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Icon Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-icon-button matTooltip=\"Basic\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-icon-button disabled aria-label=\"Example icon-button with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-icon-button matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-fab matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-fab matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-fab matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-fab disabled aria-label=\"Example fab with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-fab matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Mini Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-mini-fab matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-mini-fab matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-mini-fab matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-mini-fab disabled aria-label=\"Example mini fab with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-mini-fab matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Extended Fab</h3>\n<div class=\"example-button-row\">\n  <button mat-fab extended color=\"primary\">\n    <mat-icon>favorite</mat-icon>\n    Primary\n  </button>\n  <button mat-fab extended color=\"accent\">\n    <mat-icon>favorite</mat-icon>\n    Accent\n  </button>\n  <button mat-fab extended color=\"warn\">\n    <mat-icon>favorite</mat-icon>\n    Warn\n  </button>\n  <button mat-fab extended disabled>\n    <mat-icon>favorite</mat-icon>\n    Disabled\n  </button>\n  <a mat-fab extended routerLink=\".\">\n    <mat-icon>favorite</mat-icon>\n    Link\n  </a>\n</div>\n", styles: [".example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n\n.example-disabled {\n  display: inline-block;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXR5cGVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vYnV0dG9uLXR5cGVzL2J1dHRvbi10eXBlcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi10eXBlcy9idXR0b24tdHlwZXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFFekQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sa0JBQWtCOzhHQUFsQixrQkFBa0I7a0dBQWxCLGtCQUFrQixnRkNmL0IsdTVKQWlJQSw0TERwSFksZUFBZSxnL0NBQUUsZ0JBQWdCLDhIQUFFLGFBQWE7OzJGQUUvQyxrQkFBa0I7a0JBUDlCLFNBQVM7K0JBQ0Usc0JBQXNCLGNBR3BCLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRUb29sdGlwTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG4vKipcbiAqIEB0aXRsZSBCdXR0b24gdmFyaWV0aWVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi10eXBlcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24tdHlwZXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2J1dHRvbi10eXBlcy1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXRUb29sdGlwTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uVHlwZXNFeGFtcGxlIHt9XG4iLCI8aDM+QmFzaWMgQnV0dG9uczwvaDM+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gIDxidXR0b24gbWF0LWJ1dHRvbj5CYXNpYzwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gIDxhIG1hdC1idXR0b24gcm91dGVyTGluaz1cIi5cIj5MaW5rPC9hPlxuPC9kaXY+XG5cbjxoMz5SYWlzZWQgQnV0dG9uczwvaDM+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24+QmFzaWM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgPGEgbWF0LXJhaXNlZC1idXR0b24gcm91dGVyTGluaz1cIi5cIj5MaW5rPC9hPlxuPC9kaXY+XG5cbjxoMz5TdHJva2VkIEJ1dHRvbnM8L2gzPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbj5CYXNpYzwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgPGEgbWF0LXN0cm9rZWQtYnV0dG9uIHJvdXRlckxpbms9XCIuXCI+TGluazwvYT5cbjwvZGl2PlxuXG48aDM+RmxhdCBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24+QmFzaWM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gIDxhIG1hdC1mbGF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiLlwiPkxpbms8L2E+XG48L2Rpdj5cblxuPGgzPkljb24gQnV0dG9uczwvaDM+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdFRvb2x0aXA9XCJCYXNpY1wiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdFRvb2x0aXA9XCJQcmltYXJ5XCIgY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0VG9vbHRpcD1cIkFjY2VudFwiIGNvbG9yPVwiYWNjZW50XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0VG9vbHRpcD1cIldhcm5cIiBjb2xvcj1cIndhcm5cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8ZGl2IG1hdFRvb2x0aXA9XCJEaXNhYmxlZFwiIGNsYXNzPVwiZXhhbXBsZS1kaXNhYmxlZFwiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPGEgbWF0LWljb24tYnV0dG9uIG1hdFRvb2x0aXA9XCJMaW5rXCIgcm91dGVyTGluaz1cIi5cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYT5cbjwvZGl2PlxuXG48aDM+RmFiIEJ1dHRvbnM8L2gzPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1mYWIgbWF0VG9vbHRpcD1cIlByaW1hcnlcIiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBmYWIgd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmFiIG1hdFRvb2x0aXA9XCJBY2NlbnRcIiBjb2xvcj1cImFjY2VudFwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGZhYiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mYWIgbWF0VG9vbHRpcD1cIldhcm5cIiBjb2xvcj1cIndhcm5cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBmYWIgd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGRpdiBtYXRUb29sdGlwPVwiRGlzYWJsZWRcIiBjbGFzcz1cImV4YW1wbGUtZGlzYWJsZWRcIj5cbiAgICA8YnV0dG9uIG1hdC1mYWIgZGlzYWJsZWQgYXJpYS1sYWJlbD1cIkV4YW1wbGUgZmFiIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPGEgbWF0LWZhYiBtYXRUb29sdGlwPVwiTGlua1wiIHJvdXRlckxpbms9XCIuXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgZmFiIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9hPlxuPC9kaXY+XG5cbjxoMz5NaW5pIEZhYiBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgbWF0VG9vbHRpcD1cIlByaW1hcnlcIiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBtaW5pIGZhYiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1taW5pLWZhYiBtYXRUb29sdGlwPVwiQWNjZW50XCIgY29sb3I9XCJhY2NlbnRcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBtaW5pIGZhYiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1taW5pLWZhYiBtYXRUb29sdGlwPVwiV2FyblwiIGNvbG9yPVwid2FyblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIG1pbmkgZmFiIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxkaXYgbWF0VG9vbHRpcD1cIkRpc2FibGVkXCIgY2xhc3M9XCJleGFtcGxlLWRpc2FibGVkXCI+XG4gICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgZGlzYWJsZWQgYXJpYS1sYWJlbD1cIkV4YW1wbGUgbWluaSBmYWIgd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8YSBtYXQtbWluaS1mYWIgbWF0VG9vbHRpcD1cIkxpbmtcIiByb3V0ZXJMaW5rPVwiLlwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIG1pbmkgZmFiIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9hPlxuPC9kaXY+XG5cbjxoMz5FeHRlbmRlZCBGYWI8L2gzPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1mYWIgZXh0ZW5kZWQgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICBQcmltYXJ5XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mYWIgZXh0ZW5kZWQgY29sb3I9XCJhY2NlbnRcIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgIEFjY2VudFxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmFiIGV4dGVuZGVkIGNvbG9yPVwid2FyblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gICAgV2FyblxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmFiIGV4dGVuZGVkIGRpc2FibGVkPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gICAgRGlzYWJsZWRcbiAgPC9idXR0b24+XG4gIDxhIG1hdC1mYWIgZXh0ZW5kZWQgcm91dGVyTGluaz1cIi5cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgIExpbmtcbiAgPC9hPlxuPC9kaXY+XG4iXX0=