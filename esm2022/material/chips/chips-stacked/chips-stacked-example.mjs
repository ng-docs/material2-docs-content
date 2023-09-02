import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
/**
 * @title Stacked chips
 */
export class ChipsStackedExample {
    constructor() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ChipsStackedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: ChipsStackedExample, isStandalone: true, selector: "chips-stacked-example", ngImport: i0, template: "<mat-chip-listbox class=\"mat-mdc-chip-set-stacked\" aria-label=\"Color selection\">\n  <mat-chip-option *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip-option>\n</mat-chip-listbox>", styles: [".mat-mdc-chip-set {\n  max-width: 200px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["tabIndex", "multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }, { kind: "component", type: i1.MatChipOption, selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "selectable", "selected"], outputs: ["selectionChange"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ChipsStackedExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-stacked-example', standalone: true, imports: [MatChipsModule, NgFor], template: "<mat-chip-listbox class=\"mat-mdc-chip-set-stacked\" aria-label=\"Color selection\">\n  <mat-chip-option *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip-option>\n</mat-chip-listbox>", styles: [".mat-mdc-chip-set {\n  max-width: 200px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtc3RhY2tlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtc3RhY2tlZC9jaGlwcy1zdGFja2VkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1zdGFja2VkL2NoaXBzLXN0YWNrZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3RDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBT3ZEOztHQUVHO0FBUUgsTUFBTSxPQUFPLG1CQUFtQjtJQVBoQztRQVFFLG9CQUFlLEdBQWdCO1lBQzdCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO1lBQ2hDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO1lBQ25DLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFDO1lBQ2pDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDO1NBQzlCLENBQUM7S0FDSDs4R0FQWSxtQkFBbUI7a0dBQW5CLG1CQUFtQixpRkNwQmhDLGdQQUltQixzR0RjUCxjQUFjLDZnQkFBRSxLQUFLOzsyRkFFcEIsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLHVCQUF1QixjQUdyQixJQUFJLFdBQ1AsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0Q2hpcHNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcblxuZXhwb3J0IGludGVyZmFjZSBDaGlwQ29sb3Ige1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbG9yOiBUaGVtZVBhbGV0dGU7XG59XG5cbi8qKlxuICogQHRpdGxlIFN0YWNrZWQgY2hpcHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtc3RhY2tlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1zdGFja2VkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1zdGFja2VkLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRDaGlwc01vZHVsZSwgTmdGb3JdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc1N0YWNrZWRFeGFtcGxlIHtcbiAgYXZhaWxhYmxlQ29sb3JzOiBDaGlwQ29sb3JbXSA9IFtcbiAgICB7bmFtZTogJ25vbmUnLCBjb2xvcjogdW5kZWZpbmVkfSxcbiAgICB7bmFtZTogJ1ByaW1hcnknLCBjb2xvcjogJ3ByaW1hcnknfSxcbiAgICB7bmFtZTogJ0FjY2VudCcsIGNvbG9yOiAnYWNjZW50J30sXG4gICAge25hbWU6ICdXYXJuJywgY29sb3I6ICd3YXJuJ30sXG4gIF07XG59XG4iLCI8bWF0LWNoaXAtbGlzdGJveCBjbGFzcz1cIm1hdC1tZGMtY2hpcC1zZXQtc3RhY2tlZFwiIGFyaWEtbGFiZWw9XCJDb2xvciBzZWxlY3Rpb25cIj5cbiAgPG1hdC1jaGlwLW9wdGlvbiAqbmdGb3I9XCJsZXQgY2hpcCBvZiBhdmFpbGFibGVDb2xvcnNcIiBzZWxlY3RlZCBbY29sb3JdPVwiY2hpcC5jb2xvclwiPlxuICAgIHt7Y2hpcC5uYW1lfX1cbiAgPC9tYXQtY2hpcC1vcHRpb24+XG48L21hdC1jaGlwLWxpc3Rib3g+Il19