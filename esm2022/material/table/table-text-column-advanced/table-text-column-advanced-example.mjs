import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * @title Use of 'mat-text-column' with various configurations of the interface.
 */
export class TableTextColumnAdvancedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.decimalPipe = new DecimalPipe('en-US');
        /**
         * Data accessor function that transforms the weight value to have at most 2 decimal digits.
         *
         * 将重量值转换为最多 2 位小数的数据访问器函数。
         *
         */
        this.getWeight = (data) => {
            const result = this.decimalPipe.transform(data.weight, '1.0-2');
            return result === null ? '' : result;
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: TableTextColumnAdvancedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: TableTextColumnAdvancedExample, isStandalone: true, selector: "table-text-column-advanced-example", ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <mat-text-column name=\"position\" [headerText]=\"headerText\"></mat-text-column>\n\n  <!-- Change the header text. -->\n  <mat-text-column name=\"name\" headerText=\"Element\"></mat-text-column>\n\n  <!-- Provide a data accessor for getting the cell text values. -->\n  <mat-text-column name=\"weight\" [dataAccessor]=\"getWeight\"></mat-text-column>\n\n  <!-- Justify the content of the cells to the cell end. -->\n  <mat-text-column name=\"symbol\" justify=\"end\"></mat-text-column>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: ["table {\n  width: 100%;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i1.MatTextColumn, selector: "mat-text-column" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: TableTextColumnAdvancedExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-text-column-advanced-example', standalone: true, imports: [MatTableModule], template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <mat-text-column name=\"position\" [headerText]=\"headerText\"></mat-text-column>\n\n  <!-- Change the header text. -->\n  <mat-text-column name=\"name\" headerText=\"Element\"></mat-text-column>\n\n  <!-- Provide a data accessor for getting the cell text values. -->\n  <mat-text-column name=\"weight\" [dataAccessor]=\"getWeight\"></mat-text-column>\n\n  <!-- Justify the content of the cells to the cell end. -->\n  <mat-text-column name=\"symbol\" justify=\"end\"></mat-text-column>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: ["table {\n  width: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtdGV4dC1jb2x1bW4tYWR2YW5jZWQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXRleHQtY29sdW1uLWFkdmFuY2VkL3RhYmxlLXRleHQtY29sdW1uLWFkdmFuY2VkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS10ZXh0LWNvbHVtbi1hZHZhbmNlZC90YWJsZS10ZXh0LWNvbHVtbi1hZHZhbmNlZC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7QUFTM0UsTUFBTSxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDekQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztDQUM1RCxDQUFDO0FBRUY7O0dBRUc7QUFRSCxNQUFNLE9BQU8sOEJBQThCO0lBUDNDO1FBUUUscUJBQWdCLEdBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RSxlQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUlsRCxnQkFBVyxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZDOzs7OztXQUtHO1FBQ0gsY0FBUyxHQUFHLENBQUMsSUFBcUIsRUFBVSxFQUFFO1lBQzVDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDaEUsT0FBTyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN2QyxDQUFDLENBQUM7S0FDSDs4R0FsQlksOEJBQThCO2tHQUE5Qiw4QkFBOEIsOEZDbEMzQyw0c0JBZUEscUZEaUJZLGNBQWM7OzJGQUViLDhCQUE4QjtrQkFQMUMsU0FBUzsrQkFDRSxvQ0FBb0MsY0FHbEMsSUFBSSxXQUNQLENBQUMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWNpbWFsUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0VGFibGVEYXRhU291cmNlLCBNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIFVzZSBvZiAnbWF0LXRleHQtY29sdW1uJyB3aXRoIHZhcmlvdXMgY29uZmlndXJhdGlvbnMgb2YgdGhlIGludGVyZmFjZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtdGV4dC1jb2x1bW4tYWR2YW5jZWQtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS10ZXh0LWNvbHVtbi1hZHZhbmNlZC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLXRleHQtY29sdW1uLWFkdmFuY2VkLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRUYWJsZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlVGV4dENvbHVtbkFkdmFuY2VkRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydwb3NpdGlvbicsICduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnXTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoRUxFTUVOVF9EQVRBKTtcblxuICBoZWFkZXJUZXh0OiBzdHJpbmc7XG5cbiAgZGVjaW1hbFBpcGUgPSBuZXcgRGVjaW1hbFBpcGUoJ2VuLVVTJyk7XG5cbiAgLyoqXG4gICAqIERhdGEgYWNjZXNzb3IgZnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIHRoZSB3ZWlnaHQgdmFsdWUgdG8gaGF2ZSBhdCBtb3N0IDIgZGVjaW1hbCBkaWdpdHMuXG4gICAqXG4gICAqIOWwhumHjemHj+WAvOi9rOaNouS4uuacgOWkmiAyIOS9jeWwj+aVsOeahOaVsOaNruiuv+mXruWZqOWHveaVsOOAglxuICAgKlxuICAgKi9cbiAgZ2V0V2VpZ2h0ID0gKGRhdGE6IFBlcmlvZGljRWxlbWVudCk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kZWNpbWFsUGlwZS50cmFuc2Zvcm0oZGF0YS53ZWlnaHQsICcxLjAtMicpO1xuICAgIHJldHVybiByZXN1bHQgPT09IG51bGwgPyAnJyA6IHJlc3VsdDtcbiAgfTtcbn1cbiIsIjx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICA8bWF0LXRleHQtY29sdW1uIG5hbWU9XCJwb3NpdGlvblwiIFtoZWFkZXJUZXh0XT1cImhlYWRlclRleHRcIj48L21hdC10ZXh0LWNvbHVtbj5cblxuICA8IS0tIENoYW5nZSB0aGUgaGVhZGVyIHRleHQuIC0tPlxuICA8bWF0LXRleHQtY29sdW1uIG5hbWU9XCJuYW1lXCIgaGVhZGVyVGV4dD1cIkVsZW1lbnRcIj48L21hdC10ZXh0LWNvbHVtbj5cblxuICA8IS0tIFByb3ZpZGUgYSBkYXRhIGFjY2Vzc29yIGZvciBnZXR0aW5nIHRoZSBjZWxsIHRleHQgdmFsdWVzLiAtLT5cbiAgPG1hdC10ZXh0LWNvbHVtbiBuYW1lPVwid2VpZ2h0XCIgW2RhdGFBY2Nlc3Nvcl09XCJnZXRXZWlnaHRcIj48L21hdC10ZXh0LWNvbHVtbj5cblxuICA8IS0tIEp1c3RpZnkgdGhlIGNvbnRlbnQgb2YgdGhlIGNlbGxzIHRvIHRoZSBjZWxsIGVuZC4gLS0+XG4gIDxtYXQtdGV4dC1jb2x1bW4gbmFtZT1cInN5bWJvbFwiIGp1c3RpZnk9XCJlbmRcIj48L21hdC10ZXh0LWNvbHVtbj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==