import { Component, Injectable } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperIntl, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/material/radio";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/button";
export class StepperIntl extends MatStepperIntl {
    constructor() {
        super(...arguments);
        // the default optional label text, if unspecified is "Optional"
        this.optionalLabel = 'Optional Label';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: StepperIntl, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: StepperIntl }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: StepperIntl, decorators: [{
            type: Injectable
        }] });
/**
 * @title Stepper that uses the MatStepperIntl service
 */
export class StepperIntlExample {
    constructor(_formBuilder, _matStepperIntl) {
        this._formBuilder = _formBuilder;
        this._matStepperIntl = _matStepperIntl;
        this.optionalLabelTextChoices = ['Option 1', 'Option 2', 'Option 3'];
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required],
        });
    }
    updateOptionalLabel() {
        this._matStepperIntl.optionalLabel = this.optionalLabelText;
        // Required for the optional label text to be updated
        // Notifies the MatStepperIntl service that a change has been made
        this._matStepperIntl.changes.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: StepperIntlExample, deps: [{ token: i1.FormBuilder }, { token: i2.MatStepperIntl }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: StepperIntlExample, isStandalone: true, selector: "stepper-intl-example", providers: [{ provide: MatStepperIntl, useClass: StepperIntl }], ngImport: i0, template: "<label for=\"demo-optional-label-group\">Pick the text for the optional label</label>\n<mat-radio-group\n  id=\"demo-optional-label-group\"\n  class=\"demo-radio-group\"\n  [(ngModel)]=\"optionalLabelText\"\n  (ngModelChange)=\"updateOptionalLabel()\">\n  <mat-radio-button\n    class=\"demo-radio-button\"\n    *ngFor=\"let optionalLabelTextChoice of optionalLabelTextChoices\"\n    [value]=\"optionalLabelTextChoice\">\n    {{optionalLabelTextChoice}}\n  </mat-radio-button>\n</mat-radio-group>\n<mat-stepper class=\"demo-stepper\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field class=\"demo-form-field\">\n        <mat-label>Name</mat-label>\n        <input\n          matInput\n          placeholder=\"Last name, First name\"\n          formControlName=\"firstCtrl\"\n          required\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step\n    [stepControl]=\"secondFormGroup\"\n    label=\"Fill out your address\"\n    optional>\n    <form [formGroup]=\"secondFormGroup\">\n      <mat-form-field>\n        <mat-label>Address</mat-label>\n        <input\n          matInput\n          formControlName=\"secondCtrl\"\n          placeholder=\"Ex. 1 Main St, New York, NY\"\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".demo-stepper {\n  margin-top: 8px;\n}\n\n.demo-form-field {\n  margin-top: 16px;\n}\n\n.demo-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.demo-radio-button {\n  margin: 5px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatStepperModule }, { kind: "component", type: i2.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i2.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i2.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { kind: "directive", type: i2.MatStepperNext, selector: "button[matStepperNext]", inputs: ["type"] }, { kind: "directive", type: i2.MatStepperPrevious, selector: "button[matStepperPrevious]", inputs: ["type"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i6.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: StepperIntlExample, decorators: [{
            type: Component,
            args: [{ selector: 'stepper-intl-example', providers: [{ provide: MatStepperIntl, useClass: StepperIntl }], standalone: true, imports: [
                        MatRadioModule,
                        FormsModule,
                        NgFor,
                        MatStepperModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatButtonModule,
                    ], template: "<label for=\"demo-optional-label-group\">Pick the text for the optional label</label>\n<mat-radio-group\n  id=\"demo-optional-label-group\"\n  class=\"demo-radio-group\"\n  [(ngModel)]=\"optionalLabelText\"\n  (ngModelChange)=\"updateOptionalLabel()\">\n  <mat-radio-button\n    class=\"demo-radio-button\"\n    *ngFor=\"let optionalLabelTextChoice of optionalLabelTextChoices\"\n    [value]=\"optionalLabelTextChoice\">\n    {{optionalLabelTextChoice}}\n  </mat-radio-button>\n</mat-radio-group>\n<mat-stepper class=\"demo-stepper\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field class=\"demo-form-field\">\n        <mat-label>Name</mat-label>\n        <input\n          matInput\n          placeholder=\"Last name, First name\"\n          formControlName=\"firstCtrl\"\n          required\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step\n    [stepControl]=\"secondFormGroup\"\n    label=\"Fill out your address\"\n    optional>\n    <form [formGroup]=\"secondFormGroup\">\n      <mat-form-field>\n        <mat-label>Address</mat-label>\n        <input\n          matInput\n          formControlName=\"secondCtrl\"\n          placeholder=\"Ex. 1 Main St, New York, NY\"\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".demo-stepper {\n  margin-top: 8px;\n}\n\n.demo-form-field {\n  margin-top: 16px;\n}\n\n.demo-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.demo-radio-button {\n  margin: 5px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i2.MatStepperIntl }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1pbnRsLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItaW50bC9zdGVwcGVyLWludGwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1pbnRsL3N0ZXBwZXItaW50bC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekYsT0FBTyxFQUFDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3RDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7QUFHdkQsTUFBTSxPQUFPLFdBQVksU0FBUSxjQUFjO0lBRC9DOztRQUVFLGdFQUFnRTtRQUN2RCxrQkFBYSxHQUFHLGdCQUFnQixDQUFDO0tBQzNDOzhHQUhZLFdBQVc7a0hBQVgsV0FBVzs7MkZBQVgsV0FBVztrQkFEdkIsVUFBVTs7QUFNWDs7R0FFRztBQWtCSCxNQUFNLE9BQU8sa0JBQWtCO0lBVTdCLFlBQW9CLFlBQXlCLEVBQVUsZUFBK0I7UUFBbEUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFSdEYsNkJBQXdCLEdBQWEsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzFFLG1CQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsb0JBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUN4QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFFc0YsQ0FBQztJQUUxRixtQkFBbUI7UUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQzVELHFEQUFxRDtRQUNyRCxrRUFBa0U7UUFDbEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs4R0FqQlUsa0JBQWtCO2tHQUFsQixrQkFBa0IsbUVBYmxCLENBQUMsRUFBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsQ0FBQywwQkN0Qi9ELDQzREEyREEsb1JEbENJLGNBQWMsMFJBQ2QsV0FBVyxpbENBQ1gsS0FBSyxrSEFDTCxnQkFBZ0IsdXZCQUNoQixtQkFBbUIsK1VBQ25CLGtCQUFrQiwwU0FDbEIsY0FBYywwV0FDZCxlQUFlOzsyRkFHTixrQkFBa0I7a0JBakI5QixTQUFTOytCQUNFLHNCQUFzQixhQUdyQixDQUFDLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUMsY0FDakQsSUFBSSxXQUNQO3dCQUNQLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxLQUFLO3dCQUNMLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsZUFBZTtxQkFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRTdGVwcGVySW50bCwgTWF0U3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TmdGb3J9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGVwcGVySW50bCBleHRlbmRzIE1hdFN0ZXBwZXJJbnRsIHtcbiAgLy8gdGhlIGRlZmF1bHQgb3B0aW9uYWwgbGFiZWwgdGV4dCwgaWYgdW5zcGVjaWZpZWQgaXMgXCJPcHRpb25hbFwiXG4gIG92ZXJyaWRlIG9wdGlvbmFsTGFiZWwgPSAnT3B0aW9uYWwgTGFiZWwnO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTdGVwcGVyIHRoYXQgdXNlcyB0aGUgTWF0U3RlcHBlckludGwgc2VydmljZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGVwcGVyLWludGwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1pbnRsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLWludGwtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1hdFN0ZXBwZXJJbnRsLCB1c2VDbGFzczogU3RlcHBlckludGx9XSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5nRm9yLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVySW50bEV4YW1wbGUge1xuICBvcHRpb25hbExhYmVsVGV4dDogc3RyaW5nO1xuICBvcHRpb25hbExhYmVsVGV4dENob2ljZXM6IHN0cmluZ1tdID0gWydPcHRpb24gMScsICdPcHRpb24gMicsICdPcHRpb24gMyddO1xuICBmaXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICBmaXJzdEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gIH0pO1xuICBzZWNvbmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgc2Vjb25kQ3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9tYXRTdGVwcGVySW50bDogTWF0U3RlcHBlckludGwpIHt9XG5cbiAgdXBkYXRlT3B0aW9uYWxMYWJlbCgpIHtcbiAgICB0aGlzLl9tYXRTdGVwcGVySW50bC5vcHRpb25hbExhYmVsID0gdGhpcy5vcHRpb25hbExhYmVsVGV4dDtcbiAgICAvLyBSZXF1aXJlZCBmb3IgdGhlIG9wdGlvbmFsIGxhYmVsIHRleHQgdG8gYmUgdXBkYXRlZFxuICAgIC8vIE5vdGlmaWVzIHRoZSBNYXRTdGVwcGVySW50bCBzZXJ2aWNlIHRoYXQgYSBjaGFuZ2UgaGFzIGJlZW4gbWFkZVxuICAgIHRoaXMuX21hdFN0ZXBwZXJJbnRsLmNoYW5nZXMubmV4dCgpO1xuICB9XG59XG4iLCI8bGFiZWwgZm9yPVwiZGVtby1vcHRpb25hbC1sYWJlbC1ncm91cFwiPlBpY2sgdGhlIHRleHQgZm9yIHRoZSBvcHRpb25hbCBsYWJlbDwvbGFiZWw+XG48bWF0LXJhZGlvLWdyb3VwXG4gIGlkPVwiZGVtby1vcHRpb25hbC1sYWJlbC1ncm91cFwiXG4gIGNsYXNzPVwiZGVtby1yYWRpby1ncm91cFwiXG4gIFsobmdNb2RlbCldPVwib3B0aW9uYWxMYWJlbFRleHRcIlxuICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVPcHRpb25hbExhYmVsKClcIj5cbiAgPG1hdC1yYWRpby1idXR0b25cbiAgICBjbGFzcz1cImRlbW8tcmFkaW8tYnV0dG9uXCJcbiAgICAqbmdGb3I9XCJsZXQgb3B0aW9uYWxMYWJlbFRleHRDaG9pY2Ugb2Ygb3B0aW9uYWxMYWJlbFRleHRDaG9pY2VzXCJcbiAgICBbdmFsdWVdPVwib3B0aW9uYWxMYWJlbFRleHRDaG9pY2VcIj5cbiAgICB7e29wdGlvbmFsTGFiZWxUZXh0Q2hvaWNlfX1cbiAgPC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG48bWF0LXN0ZXBwZXIgY2xhc3M9XCJkZW1vLXN0ZXBwZXJcIiAjc3RlcHBlcj5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBuYW1lPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImRlbW8tZm9ybS1maWVsZFwiPlxuICAgICAgICA8bWF0LWxhYmVsPk5hbWU8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZSwgRmlyc3QgbmFtZVwiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3RDdHJsXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcFxuICAgIFtzdGVwQ29udHJvbF09XCJzZWNvbmRGb3JtR3JvdXBcIlxuICAgIGxhYmVsPVwiRmlsbCBvdXQgeW91ciBhZGRyZXNzXCJcbiAgICBvcHRpb25hbD5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWxhYmVsPkFkZHJlc3M8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRDdHJsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4LiAxIE1haW4gU3QsIE5ldyBZb3JrLCBOWVwiXG4gICAgICAgIC8+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkRvbmU8L25nLXRlbXBsYXRlPlxuICAgIDxwPllvdSBhcmUgbm93IGRvbmUuPC9wPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic3RlcHBlci5yZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbjwvbWF0LXN0ZXBwZXI+XG4iXX0=