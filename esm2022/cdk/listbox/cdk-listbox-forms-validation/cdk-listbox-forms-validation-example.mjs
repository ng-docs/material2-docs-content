import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { NgFor, NgIf, AsyncPipe, JsonPipe } from '@angular/common';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/** @title Listbox with forms validation. */
export class CdkListboxFormsValidationExample {
    constructor() {
        this.signs = [
            'Rat',
            'Ox',
            'Tiger',
            'Rabbit',
            'Dragon',
            'Snake',
            'Horse',
            'Goat',
            'Monkey',
            'Rooster',
            'Dog',
            'Pig',
        ];
        // #docregion errors
        this.signCtrl = new FormControl([], Validators.required);
        this.invalid = this.signCtrl.valueChanges.pipe(map(() => this.signCtrl.touched && !this.signCtrl.valid));
    }
    getErrors() {
        const errors = [];
        if (this.signCtrl.hasError('required')) {
            errors.push('You must enter your zodiac sign');
        }
        if (this.signCtrl.hasError('cdkListboxUnexpectedMultipleValues')) {
            errors.push('You can only select one zodiac sign');
        }
        if (this.signCtrl.hasError('cdkListboxUnexpectedOptionValues')) {
            const invalidOptions = this.signCtrl.getError('cdkListboxUnexpectedOptionValues').values;
            errors.push(`You entered an invalid zodiac sign: ${invalidOptions[0]}`);
        }
        return errors.length ? errors : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: CdkListboxFormsValidationExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: CdkListboxFormsValidationExample, isStandalone: true, selector: "cdk-listbox-forms-validation-example", exportAs: ["cdkListboxFormsValidationExample"], ngImport: i0, template: "<div class=\"example-listbox-container\" [class.example-listbox-invalid]=\"invalid | async\">\n  <label class=\"example-listbox-label\" id=\"example-zodiac-sign-label\">\n    Zodiac Sign\n  </label>\n  <ul cdkListbox\n      [formControl]=\"signCtrl\"\n      aria-labelledby=\"example-zodiac-sign-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let sign of signs\"\n        [cdkOption]=\"sign\"\n        class=\"example-option\">\n      {{sign}}\n    </li>\n  </ul>\n</div>\n<div class=\"example-listbox-errors\" *ngIf=\"invalid | async\">\n  <p *ngFor=\"let error of getErrors()\">{{error}}</p>\n</div>\n<p>\n  Your zodiac sign is: <strong>{{signCtrl.value | json}}</strong>&nbsp;\n  <button (click)=\"signCtrl.setValue(['Cat'])\">Set: Cat</button>&nbsp;\n  <button (click)=\"signCtrl.setValue(['Dragon', 'Snake'])\">Set: Dragon, Snake</button>&nbsp;\n  <button (click)=\"signCtrl.setValue(['Cat', 'Rat'])\">Set: Cat, Rat</button>&nbsp;\n  <button (click)=\"signCtrl.setValue([])\">Clear</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-invalid {\n  border-color: red;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox-invalid .example-listbox-label {\n  color: red;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  height: 200px;\n  overflow: auto;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.example-listbox-errors {\n  color: red;\n}\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "pipe", type: JsonPipe, name: "json" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: CdkListboxFormsValidationExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-forms-validation-example', exportAs: 'cdkListboxFormsValidationExample', standalone: true, imports: [
                        CdkListbox,
                        FormsModule,
                        ReactiveFormsModule,
                        NgFor,
                        CdkOption,
                        NgIf,
                        AsyncPipe,
                        JsonPipe,
                    ], template: "<div class=\"example-listbox-container\" [class.example-listbox-invalid]=\"invalid | async\">\n  <label class=\"example-listbox-label\" id=\"example-zodiac-sign-label\">\n    Zodiac Sign\n  </label>\n  <ul cdkListbox\n      [formControl]=\"signCtrl\"\n      aria-labelledby=\"example-zodiac-sign-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let sign of signs\"\n        [cdkOption]=\"sign\"\n        class=\"example-option\">\n      {{sign}}\n    </li>\n  </ul>\n</div>\n<div class=\"example-listbox-errors\" *ngIf=\"invalid | async\">\n  <p *ngFor=\"let error of getErrors()\">{{error}}</p>\n</div>\n<p>\n  Your zodiac sign is: <strong>{{signCtrl.value | json}}</strong>&nbsp;\n  <button (click)=\"signCtrl.setValue(['Cat'])\">Set: Cat</button>&nbsp;\n  <button (click)=\"signCtrl.setValue(['Dragon', 'Snake'])\">Set: Dragon, Snake</button>&nbsp;\n  <button (click)=\"signCtrl.setValue(['Cat', 'Rat'])\">Set: Cat, Rat</button>&nbsp;\n  <button (click)=\"signCtrl.setValue([])\">Clear</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-invalid {\n  border-color: red;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox-invalid .example-listbox-label {\n  color: red;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  height: 200px;\n  overflow: auto;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.example-listbox-errors {\n  color: red;\n}\n"] }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtZm9ybXMtdmFsaWRhdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xpc3Rib3gvY2RrLWxpc3Rib3gtZm9ybXMtdmFsaWRhdGlvbi9jZGstbGlzdGJveC1mb3Jtcy12YWxpZGF0aW9uLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1mb3Jtcy12YWxpZGF0aW9uL2Nkay1saXN0Ym94LWZvcm1zLXZhbGlkYXRpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekYsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRW5DLE9BQU8sRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7QUFFM0QsNENBQTRDO0FBa0I1QyxNQUFNLE9BQU8sZ0NBQWdDO0lBaUIzQztRQWhCQSxVQUFLLEdBQUc7WUFDTixLQUFLO1lBQ0wsSUFBSTtZQUNKLE9BQU87WUFDUCxRQUFRO1lBQ1IsUUFBUTtZQUNSLE9BQU87WUFDUCxPQUFPO1lBQ1AsTUFBTTtZQUNOLFFBQVE7WUFDUixTQUFTO1lBQ1QsS0FBSztZQUNMLEtBQUs7U0FDTixDQUFDO1FBU0Ysb0JBQW9CO1FBQ3BCLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBVyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBTjVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUtELFNBQVM7UUFDUCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLG9DQUFvQyxDQUFDLEVBQUU7WUFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUFFO1lBQzlELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGtDQUFrQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3pGLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekU7UUFDRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7OEdBdkNVLGdDQUFnQztrR0FBaEMsZ0NBQWdDLGdKQ3pCN0MsMC9CQXlCQSw2aUNEVkksVUFBVSw4V0FDVixXQUFXLHNJQUNYLG1CQUFtQixrTkFDbkIsS0FBSyxtSEFDTCxTQUFTLDBLQUNULElBQUksd0ZBQ0osU0FBUyx5Q0FDVCxRQUFROzsyRkFHQyxnQ0FBZ0M7a0JBakI1QyxTQUFTOytCQUNFLHNDQUFzQyxZQUN0QyxrQ0FBa0MsY0FHaEMsSUFBSSxXQUNQO3dCQUNQLFVBQVU7d0JBQ1YsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLEtBQUs7d0JBQ0wsU0FBUzt3QkFDVCxJQUFJO3dCQUNKLFNBQVM7d0JBQ1QsUUFBUTtxQkFDVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge21hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7TmdGb3IsIE5nSWYsIEFzeW5jUGlwZSwgSnNvblBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Nka0xpc3Rib3gsIENka09wdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xpc3Rib3gnO1xuXG4vKiogQHRpdGxlIExpc3Rib3ggd2l0aCBmb3JtcyB2YWxpZGF0aW9uLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWxpc3Rib3gtZm9ybXMtdmFsaWRhdGlvbi1leGFtcGxlJyxcbiAgZXhwb3J0QXM6ICdjZGtMaXN0Ym94Rm9ybXNWYWxpZGF0aW9uRXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWxpc3Rib3gtZm9ybXMtdmFsaWRhdGlvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWxpc3Rib3gtZm9ybXMtdmFsaWRhdGlvbi1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ2RrTGlzdGJveCxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5nRm9yLFxuICAgIENka09wdGlvbixcbiAgICBOZ0lmLFxuICAgIEFzeW5jUGlwZSxcbiAgICBKc29uUGlwZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTGlzdGJveEZvcm1zVmFsaWRhdGlvbkV4YW1wbGUge1xuICBzaWducyA9IFtcbiAgICAnUmF0JyxcbiAgICAnT3gnLFxuICAgICdUaWdlcicsXG4gICAgJ1JhYmJpdCcsXG4gICAgJ0RyYWdvbicsXG4gICAgJ1NuYWtlJyxcbiAgICAnSG9yc2UnLFxuICAgICdHb2F0JyxcbiAgICAnTW9ua2V5JyxcbiAgICAnUm9vc3RlcicsXG4gICAgJ0RvZycsXG4gICAgJ1BpZycsXG4gIF07XG4gIGludmFsaWQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbnZhbGlkID0gdGhpcy5zaWduQ3RybC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIG1hcCgoKSA9PiB0aGlzLnNpZ25DdHJsLnRvdWNoZWQgJiYgIXRoaXMuc2lnbkN0cmwudmFsaWQpLFxuICAgICk7XG4gIH1cblxuICAvLyAjZG9jcmVnaW9uIGVycm9yc1xuICBzaWduQ3RybCA9IG5ldyBGb3JtQ29udHJvbDxzdHJpbmdbXT4oW10sIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuXG4gIGdldEVycm9ycygpIHtcbiAgICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgICBpZiAodGhpcy5zaWduQ3RybC5oYXNFcnJvcigncmVxdWlyZWQnKSkge1xuICAgICAgZXJyb3JzLnB1c2goJ1lvdSBtdXN0IGVudGVyIHlvdXIgem9kaWFjIHNpZ24nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2lnbkN0cmwuaGFzRXJyb3IoJ2Nka0xpc3Rib3hVbmV4cGVjdGVkTXVsdGlwbGVWYWx1ZXMnKSkge1xuICAgICAgZXJyb3JzLnB1c2goJ1lvdSBjYW4gb25seSBzZWxlY3Qgb25lIHpvZGlhYyBzaWduJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNpZ25DdHJsLmhhc0Vycm9yKCdjZGtMaXN0Ym94VW5leHBlY3RlZE9wdGlvblZhbHVlcycpKSB7XG4gICAgICBjb25zdCBpbnZhbGlkT3B0aW9ucyA9IHRoaXMuc2lnbkN0cmwuZ2V0RXJyb3IoJ2Nka0xpc3Rib3hVbmV4cGVjdGVkT3B0aW9uVmFsdWVzJykudmFsdWVzO1xuICAgICAgZXJyb3JzLnB1c2goYFlvdSBlbnRlcmVkIGFuIGludmFsaWQgem9kaWFjIHNpZ246ICR7aW52YWxpZE9wdGlvbnNbMF19YCk7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcnMubGVuZ3RoID8gZXJyb3JzIDogbnVsbDtcbiAgfVxuICAvLyAjZW5kZG9jcmVnaW9uIGVycm9yc1xufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1jb250YWluZXJcIiBbY2xhc3MuZXhhbXBsZS1saXN0Ym94LWludmFsaWRdPVwiaW52YWxpZCB8IGFzeW5jXCI+XG4gIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1sYWJlbFwiIGlkPVwiZXhhbXBsZS16b2RpYWMtc2lnbi1sYWJlbFwiPlxuICAgIFpvZGlhYyBTaWduXG4gIDwvbGFiZWw+XG4gIDx1bCBjZGtMaXN0Ym94XG4gICAgICBbZm9ybUNvbnRyb2xdPVwic2lnbkN0cmxcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS16b2RpYWMtc2lnbi1sYWJlbFwiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdGJveFwiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgc2lnbiBvZiBzaWduc1wiXG4gICAgICAgIFtjZGtPcHRpb25dPVwic2lnblwiXG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5cbiAgICAgIHt7c2lnbn19XG4gICAgPC9saT5cbiAgPC91bD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1lcnJvcnNcIiAqbmdJZj1cImludmFsaWQgfCBhc3luY1wiPlxuICA8cCAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZ2V0RXJyb3JzKClcIj57e2Vycm9yfX08L3A+XG48L2Rpdj5cbjxwPlxuICBZb3VyIHpvZGlhYyBzaWduIGlzOiA8c3Ryb25nPnt7c2lnbkN0cmwudmFsdWUgfCBqc29ufX08L3N0cm9uZz4mbmJzcDtcbiAgPGJ1dHRvbiAoY2xpY2spPVwic2lnbkN0cmwuc2V0VmFsdWUoWydDYXQnXSlcIj5TZXQ6IENhdDwvYnV0dG9uPiZuYnNwO1xuICA8YnV0dG9uIChjbGljayk9XCJzaWduQ3RybC5zZXRWYWx1ZShbJ0RyYWdvbicsICdTbmFrZSddKVwiPlNldDogRHJhZ29uLCBTbmFrZTwvYnV0dG9uPiZuYnNwO1xuICA8YnV0dG9uIChjbGljayk9XCJzaWduQ3RybC5zZXRWYWx1ZShbJ0NhdCcsICdSYXQnXSlcIj5TZXQ6IENhdCwgUmF0PC9idXR0b24+Jm5ic3A7XG4gIDxidXR0b24gKGNsaWNrKT1cInNpZ25DdHJsLnNldFZhbHVlKFtdKVwiPkNsZWFyPC9idXR0b24+XG48L3A+XG4iXX0=