import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
import * as i2 from "@angular/material/button";
/** @title Sidenav with custom escape and backdrop click behavior */
export class SidenavDisableCloseExample {
    constructor() {
        this.reason = '';
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    }
    close(reason) {
        this.reason = reason;
        this.sidenav.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SidenavDisableCloseExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SidenavDisableCloseExample, isStandalone: true, selector: "sidenav-disable-close-example", viewQueries: [{ propertyName: "sidenav", first: true, predicate: ["sidenav"], descendants: true }], ngImport: i0, template: "<mat-sidenav-container\n    class=\"example-container\" (backdropClick)=\"close('backdrop')\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\n    <p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.open()\">Open</button></p>\n    <p>Closed due to: {{reason}}</p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i1.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }, { kind: "component", type: i1.MatSidenavContent, selector: "mat-sidenav-content" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SidenavDisableCloseExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-disable-close-example', standalone: true, imports: [NgIf, MatSidenavModule, MatButtonModule], template: "<mat-sidenav-container\n    class=\"example-container\" (backdropClick)=\"close('backdrop')\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\n    <p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.open()\">Open</button></p>\n    <p>Closed due to: {{reason}}</p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"] }]
        }], propDecorators: { sidenav: [{
                type: ViewChild,
                args: ['sidenav']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtZGlzYWJsZS1jbG9zZS9zaWRlbmF2LWRpc2FibGUtY2xvc2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1kaXNhYmxlLWNsb3NlL3NpZGVuYXYtZGlzYWJsZS1jbG9zZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLFVBQVUsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFFckMsb0VBQW9FO0FBUXBFLE1BQU0sT0FBTywwQkFBMEI7SUFQdkM7UUFVRSxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBT1osY0FBUyxHQUFHLDBDQUEwQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25GO0lBTkMsS0FBSyxDQUFDLE1BQWM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDOzhHQVJVLDBCQUEwQjtrR0FBMUIsMEJBQTBCLDZMQ2J2Qyw4aUJBYUEsNEpERlksSUFBSSw0RkFBRSxnQkFBZ0IsMFlBQUUsZUFBZTs7MkZBRXRDLDBCQUEwQjtrQkFQdEMsU0FBUzsrQkFDRSwrQkFBK0IsY0FHN0IsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQzs4QkFHNUIsT0FBTztzQkFBNUIsU0FBUzt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNpZGVuYXYsIE1hdFNpZGVuYXZNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge05nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8qKiBAdGl0bGUgU2lkZW5hdiB3aXRoIGN1c3RvbSBlc2NhcGUgYW5kIGJhY2tkcm9wIGNsaWNrIGJlaGF2aW9yICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWRpc2FibGUtY2xvc2UtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LWRpc2FibGUtY2xvc2UtZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIE1hdFNpZGVuYXZNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZEaXNhYmxlQ2xvc2VFeGFtcGxlIHtcbiAgQFZpZXdDaGlsZCgnc2lkZW5hdicpIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG5cbiAgcmVhc29uID0gJyc7XG5cbiAgY2xvc2UocmVhc29uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcbiAgICB0aGlzLnNpZGVuYXYuY2xvc2UoKTtcbiAgfVxuXG4gIHNob3VsZFJ1biA9IC8oXnwuKShzdGFja2JsaXR6fHdlYmNvbnRhaW5lcikuKGlvfGNvbSkkLy50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0KTtcbn1cbiIsIjxtYXQtc2lkZW5hdi1jb250YWluZXJcbiAgICBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgKGJhY2tkcm9wQ2xpY2spPVwiY2xvc2UoJ2JhY2tkcm9wJylcIiAqbmdJZj1cInNob3VsZFJ1blwiPlxuICA8bWF0LXNpZGVuYXYgI3NpZGVuYXYgKGtleWRvd24uZXNjYXBlKT1cImNsb3NlKCdlc2NhcGUnKVwiIGRpc2FibGVDbG9zZT5cbiAgICA8cD48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImNsb3NlKCd0b2dnbGUgYnV0dG9uJylcIj5Ub2dnbGU8L2J1dHRvbj48L3A+XG4gIDwvbWF0LXNpZGVuYXY+XG5cbiAgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+XG4gICAgPHA+PGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzaWRlbmF2Lm9wZW4oKVwiPk9wZW48L2J1dHRvbj48L3A+XG4gICAgPHA+Q2xvc2VkIGR1ZSB0bzoge3tyZWFzb259fTwvcD5cbiAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxuPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XG5cbjxkaXYgKm5nSWY9XCIhc2hvdWxkUnVuXCI+UGxlYXNlIG9wZW4gb24gU3RhY2tibGl0eiB0byBzZWUgcmVzdWx0PC9kaXY+XG4iXX0=