import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/input";
function SelectHintErrorExample_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const animal_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", animal_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", animal_r3.name, " ");
} }
function SelectHintErrorExample_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Please choose an animal");
    i0.ɵɵelementEnd();
} }
function SelectHintErrorExample_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " This field is required ");
    i0.ɵɵelementEnd();
} }
/** @title Select with form field features */
export class SelectHintErrorExample {
    constructor() {
        this.animalControl = new FormControl('', Validators.required);
        this.selectFormControl = new FormControl('', Validators.required);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
}
SelectHintErrorExample.ɵfac = function SelectHintErrorExample_Factory(t) { return new (t || SelectHintErrorExample)(); };
SelectHintErrorExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectHintErrorExample, selectors: [["select-hint-error-example"]], decls: 28, vars: 6, consts: [["appearance", "fill"], ["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matNativeControl", "", "required", "", 3, "formControl"], ["label", "--select something --"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectHintErrorExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "mat select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field", 0);
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "Favorite animal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select", 1);
        i0.ɵɵelementStart(6, "mat-option");
        i0.ɵɵtext(7, "--");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, SelectHintErrorExample_mat_option_8_Template, 2, 2, "mat-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, SelectHintErrorExample_mat_error_9_Template, 2, 0, "mat-error", 3);
        i0.ɵɵelementStart(10, "mat-hint");
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "h4");
        i0.ɵɵtext(13, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-form-field", 0);
        i0.ɵɵelementStart(15, "mat-label");
        i0.ɵɵtext(16, "Select your car (required)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "select", 4);
        i0.ɵɵelement(18, "option", 5);
        i0.ɵɵelementStart(19, "option", 6);
        i0.ɵɵtext(20, "Saab");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "option", 7);
        i0.ɵɵtext(22, "Mercedes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "option", 8);
        i0.ɵɵtext(24, "Audi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(25, SelectHintErrorExample_mat_error_25_Template, 2, 0, "mat-error", 3);
        i0.ɵɵelementStart(26, "mat-hint");
        i0.ɵɵtext(27, "You can pick up your favorite car here");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formControl", ctx.animalControl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.animals);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.animalControl.hasError("required"));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.animalControl.value == null ? null : ctx.animalControl.value.sound);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formControl", ctx.selectFormControl);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", ctx.selectFormControl.hasError("required"));
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.RequiredValidator, i3.NgControlStatus, i3.FormControlDirective, i4.MatOption, i5.NgForOf, i5.NgIf, i1.MatHint, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i1.MatError], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectHintErrorExample, [{
        type: Component,
        args: [{
                selector: 'select-hint-error-example',
                templateUrl: 'select-hint-error-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWhpbnQtZXJyb3ItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaGludC1lcnJvci9zZWxlY3QtaGludC1lcnJvci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1oaW50LWVycm9yL3NlbGVjdC1oaW50LWVycm9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0luRCxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjhCLGlDQUFnQjtJQUN6RCxlQUNGO0lBREUsK0NBQ0Y7OztJQUVGLGlDQUFzRDtJQUFBLHVDQUF1QjtJQUFBLGlCQUFZOzs7SUFhekYsaUNBQ0U7SUFBQSx3Q0FDRjtJQUFBLGlCQUFZOztBRGhCZCw2Q0FBNkM7QUFLN0MsTUFBTSxPQUFPLHNCQUFzQjtJQUpuQztRQUtFLGtCQUFhLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RCxzQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdELFlBQU8sR0FBYTtZQUNsQixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFDO1NBQy9DLENBQUM7S0FDSDs7NEZBVFksc0JBQXNCOzJEQUF0QixzQkFBc0I7UUNibkMsMEJBQUk7UUFBQSwwQkFBVTtRQUFBLGlCQUFLO1FBQ25CLHlDQUNFO1FBQUEsaUNBQVc7UUFBQSwrQkFBZTtRQUFBLGlCQUFZO1FBQ3RDLHFDQUNFO1FBQUEsa0NBQVk7UUFBQSxrQkFBRTtRQUFBLGlCQUFhO1FBQzNCLHFGQUVhO1FBQ2YsaUJBQWE7UUFDYixtRkFBeUY7UUFDekYsaUNBQVU7UUFBQSxhQUE4QjtRQUFBLGlCQUFXO1FBQ3JELGlCQUFpQjtRQUVqQiwyQkFBSTtRQUFBLG1DQUFrQjtRQUFBLGlCQUFLO1FBQzNCLDBDQUNFO1FBQUEsa0NBQVc7UUFBQSwyQ0FBMEI7UUFBQSxpQkFBWTtRQUNqRCxrQ0FDRTtRQUFBLDZCQUErQztRQUMvQyxrQ0FBcUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ2xDLGtDQUF5QjtRQUFBLHlCQUFRO1FBQUEsaUJBQVM7UUFDMUMsa0NBQXFCO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNwQyxpQkFBUztRQUNULHFGQUVZO1FBQ1osaUNBQVU7UUFBQSx1REFBc0M7UUFBQSxpQkFBVztRQUM3RCxpQkFBaUI7O1FBdkJILGVBQTZCO1FBQTdCLCtDQUE2QjtRQUVSLGVBQVU7UUFBVixxQ0FBVTtRQUkvQixlQUF3QztRQUF4Qyw2REFBd0M7UUFDMUMsZUFBOEI7UUFBOUIsNEZBQThCO1FBTU4sZUFBaUM7UUFBakMsbURBQWlDO1FBTXZELGVBQTRDO1FBQTVDLGlFQUE0Qzs7dUZEVDdDLHNCQUFzQjtjQUpsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQzthQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW50ZXJmYWNlIEFuaW1hbCB7XG4gIG5hbWU6IHN0cmluZztcbiAgc291bmQ6IHN0cmluZztcbn1cblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCBmb3JtIGZpZWxkIGZlYXR1cmVzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtaGludC1lcnJvci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtaGludC1lcnJvci1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RIaW50RXJyb3JFeGFtcGxlIHtcbiAgYW5pbWFsQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gIHNlbGVjdEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgYW5pbWFsczogQW5pbWFsW10gPSBbXG4gICAge25hbWU6ICdEb2cnLCBzb3VuZDogJ1dvb2YhJ30sXG4gICAge25hbWU6ICdDYXQnLCBzb3VuZDogJ01lb3chJ30sXG4gICAge25hbWU6ICdDb3cnLCBzb3VuZDogJ01vbyEnfSxcbiAgICB7bmFtZTogJ0ZveCcsIHNvdW5kOiAnV2EtcGEtcGEtcGEtcGEtcGEtcG93ISd9LFxuICBdO1xufVxuIiwiPGg0Pm1hdCBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgYW5pbWFsPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJhbmltYWxDb250cm9sXCIgcmVxdWlyZWQ+XG4gICAgPG1hdC1vcHRpb24+LS08L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGFuaW1hbCBvZiBhbmltYWxzXCIgW3ZhbHVlXT1cImFuaW1hbFwiPlxuICAgICAge3thbmltYWwubmFtZX19XG4gICAgPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJhbmltYWxDb250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+UGxlYXNlIGNob29zZSBhbiBhbmltYWw8L21hdC1lcnJvcj5cbiAgPG1hdC1oaW50Pnt7YW5pbWFsQ29udHJvbC52YWx1ZT8uc291bmR9fTwvbWF0LWhpbnQ+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlNlbGVjdCB5b3VyIGNhciAocmVxdWlyZWQpPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCByZXF1aXJlZCBbZm9ybUNvbnRyb2xdPVwic2VsZWN0Rm9ybUNvbnRyb2xcIj5cbiAgICA8b3B0aW9uIGxhYmVsPVwiLS1zZWxlY3Qgc29tZXRoaW5nIC0tXCI+PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInNhYWJcIj5TYWFiPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIm1lcmNlZGVzXCI+TWVyY2VkZXM8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJzZWxlY3RGb3JtQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgIFRoaXMgZmllbGQgaXMgcmVxdWlyZWRcbiAgPC9tYXQtZXJyb3I+XG4gIDxtYXQtaGludD5Zb3UgY2FuIHBpY2sgdXAgeW91ciBmYXZvcml0ZSBjYXIgaGVyZTwvbWF0LWhpbnQ+XG48L21hdC1mb3JtLWZpZWxkPlxuXG4iXX0=