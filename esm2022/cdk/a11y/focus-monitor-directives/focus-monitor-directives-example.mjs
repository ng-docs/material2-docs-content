import { A11yModule } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
/** @title Monitoring focus with FocusMonitor */
export class FocusMonitorDirectivesExample {
    constructor(_ngZone, _cdr) {
        this._ngZone = _ngZone;
        this._cdr = _cdr;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
    // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
    markForCheck() {
        this._ngZone.run(() => this._cdr.markForCheck());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: FocusMonitorDirectivesExample, deps: [{ token: i0.NgZone }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: FocusMonitorDirectivesExample, isStandalone: true, selector: "focus-monitor-directives-example", ngImport: i0, template: "<div class=\"example-focus-monitor\">\n  <button cdkMonitorSubtreeFocus\n          (cdkFocusChange)=\"elementOrigin = formatOrigin($event); markForCheck()\">\n    Focus Monitored Element ({{elementOrigin}})\n  </button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div cdkMonitorSubtreeFocus\n       (cdkFocusChange)=\"subtreeOrigin = formatOrigin($event); markForCheck()\">\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n", styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: A11yModule }, { kind: "directive", type: i1.CdkMonitorFocus, selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]", outputs: ["cdkFocusChange"], exportAs: ["cdkMonitorFocus"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: FocusMonitorDirectivesExample, decorators: [{
            type: Component,
            args: [{ selector: 'focus-monitor-directives-example', standalone: true, imports: [A11yModule], template: "<div class=\"example-focus-monitor\">\n  <button cdkMonitorSubtreeFocus\n          (cdkFocusChange)=\"elementOrigin = formatOrigin($event); markForCheck()\">\n    Focus Monitored Element ({{elementOrigin}})\n  </button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div cdkMonitorSubtreeFocus\n       (cdkFocusChange)=\"subtreeOrigin = formatOrigin($event); markForCheck()\">\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n", styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.ChangeDetectorRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMvZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMvZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFjLE1BQU0sbUJBQW1CLENBQUM7QUFDMUQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUVuRSxnREFBZ0Q7QUFRaEQsTUFBTSxPQUFPLDZCQUE2QjtJQUl4QyxZQUFvQixPQUFlLEVBQVUsSUFBdUI7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQW1CO1FBSHBFLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxrQkFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFK0IsQ0FBQztJQUV4RSxZQUFZLENBQUMsTUFBbUI7UUFDOUIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0VBQXNFO0lBQ3RFLFlBQVk7UUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs4R0FiVSw2QkFBNkI7a0dBQTdCLDZCQUE2Qiw0RkNYMUMsc2hCQWVBLGlmRE5ZLFVBQVU7OzJGQUVULDZCQUE2QjtrQkFQekMsU0FBUzsrQkFDRSxrQ0FBa0MsY0FHaEMsSUFBSSxXQUNQLENBQUMsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBMTF5TW9kdWxlLCBGb2N1c09yaWdpbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIE1vbml0b3JpbmcgZm9jdXMgd2l0aCBGb2N1c01vbml0b3IgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQTExeU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEZvY3VzTW9uaXRvckRpcmVjdGl2ZXNFeGFtcGxlIHtcbiAgZWxlbWVudE9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG51bGwpO1xuICBzdWJ0cmVlT3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgX2NkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgZm9ybWF0T3JpZ2luKG9yaWdpbjogRm9jdXNPcmlnaW4pOiBzdHJpbmcge1xuICAgIHJldHVybiBvcmlnaW4gPyBvcmlnaW4gKyAnIGZvY3VzZWQnIDogJ2JsdXJyZWQnO1xuICB9XG5cbiAgLy8gV29ya2Fyb3VuZCBmb3IgdGhlIGZhY3QgdGhhdCAoY2RrRm9jdXNDaGFuZ2UpIGVtaXRzIG91dHNpZGUgTmdab25lLlxuICBtYXJrRm9yQ2hlY2soKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCkpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mb2N1cy1tb25pdG9yXCI+XG4gIDxidXR0b24gY2RrTW9uaXRvclN1YnRyZWVGb2N1c1xuICAgICAgICAgIChjZGtGb2N1c0NoYW5nZSk9XCJlbGVtZW50T3JpZ2luID0gZm9ybWF0T3JpZ2luKCRldmVudCk7IG1hcmtGb3JDaGVjaygpXCI+XG4gICAgRm9jdXMgTW9uaXRvcmVkIEVsZW1lbnQgKHt7ZWxlbWVudE9yaWdpbn19KVxuICA8L2J1dHRvbj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1mb2N1cy1tb25pdG9yXCI+XG4gIDxkaXYgY2RrTW9uaXRvclN1YnRyZWVGb2N1c1xuICAgICAgIChjZGtGb2N1c0NoYW5nZSk9XCJzdWJ0cmVlT3JpZ2luID0gZm9ybWF0T3JpZ2luKCRldmVudCk7IG1hcmtGb3JDaGVjaygpXCI+XG4gICAgPHA+Rm9jdXMgTW9uaXRvcmVkIFN1YnRyZWUgKHt7c3VidHJlZU9yaWdpbn19KTwvcD5cbiAgICA8YnV0dG9uPkNoaWxkIEJ1dHRvbiAxPC9idXR0b24+XG4gICAgPGJ1dHRvbj5DaGlsZCBCdXR0b24gMjwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19