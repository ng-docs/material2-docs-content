import { Component } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { NgFor } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sort";
/**
 * @title Testing with MatSortHarness
 */
export class SortHarnessExample {
    constructor() {
        this.disableThirdHeader = false;
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    sortData(sort) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
        }
        else {
            this.sortedData = data.sort((a, b) => {
                const aValue = a[sort.active];
                const bValue = b[sort.active];
                return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SortHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SortHarnessExample, isStandalone: true, selector: "sort-harness-example", ngImport: i0, template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\" [disabled]=\"disableThirdHeader\">Fat</th>\n    <th mat-sort-header=\"carbs\">Carbs</th>\n    <th mat-sort-header=\"protein\">Protein</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n", dependencies: [{ kind: "ngmodule", type: MatSortModule }, { kind: "directive", type: i1.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i1.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "mat-sort-header", "arrowPosition", "start", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SortHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'sort-harness-example', standalone: true, imports: [MatSortModule, NgFor], template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\" [disabled]=\"disableThirdHeader\">Fat</th>\n    <th mat-sort-header=\"carbs\">Carbs</th>\n    <th mat-sort-header=\"protein\">Protein</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zb3J0L3NvcnQtaGFybmVzcy9zb3J0LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NvcnQvc29ydC1oYXJuZXNzL3NvcnQtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQU8sYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7QUFFdEM7O0dBRUc7QUFPSCxNQUFNLE9BQU8sa0JBQWtCO0lBTi9CO1FBT0UsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBRztZQUNULEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDO1lBQ3JFLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDMUUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDL0QsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDL0QsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7U0FDckUsQ0FBQztRQUVGLGVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBZXBDO0lBYkMsUUFBUSxDQUFDLElBQVU7UUFDakIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNuQyxNQUFNLE1BQU0sR0FBSSxDQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxNQUFNLE1BQU0sR0FBSSxDQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs4R0F4QlUsa0JBQWtCO2tHQUFsQixrQkFBa0IsZ0ZDYi9CLDRqQkFpQkEsMkNETlksYUFBYSxrZEFBRSxLQUFLOzsyRkFFbkIsa0JBQWtCO2tCQU45QixTQUFTOytCQUNFLHNCQUFzQixjQUVwQixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTb3J0LCBNYXRTb3J0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7TmdGb3J9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRTb3J0SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb3J0LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc29ydC1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRTb3J0TW9kdWxlLCBOZ0Zvcl0sXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRIYXJuZXNzRXhhbXBsZSB7XG4gIGRpc2FibGVUaGlyZEhlYWRlciA9IGZhbHNlO1xuICBkZXNzZXJ0cyA9IFtcbiAgICB7bmFtZTogJ0Zyb3plbiB5b2d1cnQnLCBjYWxvcmllczogMTU5LCBmYXQ6IDYsIGNhcmJzOiAyNCwgcHJvdGVpbjogNH0sXG4gICAge25hbWU6ICdJY2UgY3JlYW0gc2FuZHdpY2gnLCBjYWxvcmllczogMjM3LCBmYXQ6IDksIGNhcmJzOiAzNywgcHJvdGVpbjogNH0sXG4gICAge25hbWU6ICdFY2xhaXInLCBjYWxvcmllczogMjYyLCBmYXQ6IDE2LCBjYXJiczogMjQsIHByb3RlaW46IDZ9LFxuICAgIHtuYW1lOiAnQ3VwY2FrZScsIGNhbG9yaWVzOiAzMDUsIGZhdDogNCwgY2FyYnM6IDY3LCBwcm90ZWluOiA0fSxcbiAgICB7bmFtZTogJ0dpbmdlcmJyZWFkJywgY2Fsb3JpZXM6IDM1NiwgZmF0OiAxNiwgY2FyYnM6IDQ5LCBwcm90ZWluOiA0fSxcbiAgXTtcblxuICBzb3J0ZWREYXRhID0gdGhpcy5kZXNzZXJ0cy5zbGljZSgpO1xuXG4gIHNvcnREYXRhKHNvcnQ6IFNvcnQpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kZXNzZXJ0cy5zbGljZSgpO1xuXG4gICAgaWYgKCFzb3J0LmFjdGl2ZSB8fCBzb3J0LmRpcmVjdGlvbiA9PT0gJycpIHtcbiAgICAgIHRoaXMuc29ydGVkRGF0YSA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydGVkRGF0YSA9IGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBhVmFsdWUgPSAoYSBhcyBhbnkpW3NvcnQuYWN0aXZlXTtcbiAgICAgICAgY29uc3QgYlZhbHVlID0gKGIgYXMgYW55KVtzb3J0LmFjdGl2ZV07XG4gICAgICAgIHJldHVybiAoYVZhbHVlIDwgYlZhbHVlID8gLTEgOiAxKSAqIChzb3J0LmRpcmVjdGlvbiA9PT0gJ2FzYycgPyAxIDogLTEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCI8dGFibGUgbWF0U29ydCAobWF0U29ydENoYW5nZSk9XCJzb3J0RGF0YSgkZXZlbnQpXCI+XG4gIDx0cj5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwibmFtZVwiPkRlc3NlcnQ8L3RoPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJjYWxvcmllc1wiPkNhbG9yaWVzPC90aD5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwiZmF0XCIgW2Rpc2FibGVkXT1cImRpc2FibGVUaGlyZEhlYWRlclwiPkZhdDwvdGg+XG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cImNhcmJzXCI+Q2FyYnM8L3RoPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJwcm90ZWluXCI+UHJvdGVpbjwvdGg+XG4gIDwvdHI+XG5cbiAgPHRyICpuZ0Zvcj1cImxldCBkZXNzZXJ0IG9mIHNvcnRlZERhdGFcIj5cbiAgICA8dGQ+e3tkZXNzZXJ0Lm5hbWV9fTwvdGQ+XG4gICAgPHRkPnt7ZGVzc2VydC5jYWxvcmllc319PC90ZD5cbiAgICA8dGQ+e3tkZXNzZXJ0LmZhdH19PC90ZD5cbiAgICA8dGQ+e3tkZXNzZXJ0LmNhcmJzfX08L3RkPlxuICAgIDx0ZD57e2Rlc3NlcnQucHJvdGVpbn19PC90ZD5cbiAgPC90cj5cbjwvdGFibGU+XG4iXX0=