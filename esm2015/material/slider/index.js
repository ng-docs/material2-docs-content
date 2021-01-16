import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { SliderConfigurableExample } from './slider-configurable/slider-configurable-example';
import { SliderFormattingExample } from './slider-formatting/slider-formatting-example';
import { SliderOverviewExample } from './slider-overview/slider-overview-example';
import { SliderHarnessExample } from './slider-harness/slider-harness-example';
import * as i0 from "@angular/core";
export { SliderConfigurableExample, SliderFormattingExample, SliderHarnessExample, SliderOverviewExample, };
const EXAMPLES = [
    SliderConfigurableExample,
    SliderFormattingExample,
    SliderHarnessExample,
    SliderOverviewExample,
];
export class SliderExamplesModule {
}
SliderExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SliderExamplesModule });
SliderExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SliderExamplesModule_Factory(t) { return new (t || SliderExamplesModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            MatCardModule,
            MatCheckboxModule,
            MatInputModule,
            MatSliderModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SliderExamplesModule, { declarations: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderHarnessExample,
        SliderOverviewExample], imports: [CommonModule,
        FormsModule,
        MatCardModule,
        MatCheckboxModule,
        MatInputModule,
        MatSliderModule], exports: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderHarnessExample,
        SliderOverviewExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatInputModule,
                    MatSliderModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUU3RSxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIscUJBQXFCLEdBQ3RCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtDQUN0QixDQUFDO0FBZUYsTUFBTSxPQUFPLG9CQUFvQjs7d0RBQXBCLG9CQUFvQjt1SEFBcEIsb0JBQW9CLGtCQVp0QjtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsZUFBZTtTQUNoQjt3RkFLVSxvQkFBb0IsbUJBbkIvQix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixxQkFBcUIsYUFLbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxlQUFlLGFBYmpCLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLHFCQUFxQjt1RkFnQlYsb0JBQW9CO2NBYmhDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGVBQWU7aUJBQ2hCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U2xpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHtTbGlkZXJDb25maWd1cmFibGVFeGFtcGxlfSBmcm9tICcuL3NsaWRlci1jb25maWd1cmFibGUvc2xpZGVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7U2xpZGVyRm9ybWF0dGluZ0V4YW1wbGV9IGZyb20gJy4vc2xpZGVyLWZvcm1hdHRpbmcvc2xpZGVyLWZvcm1hdHRpbmctZXhhbXBsZSc7XG5pbXBvcnQge1NsaWRlck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zbGlkZXItb3ZlcnZpZXcvc2xpZGVyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtTbGlkZXJIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9zbGlkZXItaGFybmVzcy9zbGlkZXItaGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgU2xpZGVyQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgU2xpZGVyRm9ybWF0dGluZ0V4YW1wbGUsXG4gIFNsaWRlckhhcm5lc3NFeGFtcGxlLFxuICBTbGlkZXJPdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU2xpZGVyQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgU2xpZGVyRm9ybWF0dGluZ0V4YW1wbGUsXG4gIFNsaWRlckhhcm5lc3NFeGFtcGxlLFxuICBTbGlkZXJPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19