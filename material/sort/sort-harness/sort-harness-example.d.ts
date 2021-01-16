import { Sort } from '@angular/material/sort';
import * as i0 from "@angular/core";
/**
 * @title Testing with MatSortHarness
 */
export declare class SortHarnessExample {
    disableThirdHeader: boolean;
    desserts: {
        name: string;
        calories: number;
        fat: number;
        carbs: number;
        protein: number;
    }[];
    sortedData: {
        name: string;
        calories: number;
        fat: number;
        carbs: number;
        protein: number;
    }[];
    sortData(sort: Sort): void;
    static ɵfac: i0.ɵɵFactoryDef<SortHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SortHarnessExample, "sort-harness-example", never, {}, {}, never, never>;
}
