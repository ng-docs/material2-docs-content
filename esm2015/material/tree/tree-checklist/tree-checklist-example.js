import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/checkbox";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/icon";
function TreeChecklistExample_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 3);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵelementStart(2, "mat-checkbox", 5);
    i0.ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_1_Template_mat_checkbox_change_2_listener() { i0.ɵɵrestoreView(_r5); const node_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.todoLeafItemSelectionToggle(node_r3); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r0.checklistSelection.isSelected(node_r3));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(node_r3.item);
} }
function TreeChecklistExample_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 6);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4, "New item...");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 7, 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 9);
    i0.ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_2_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r9); const node_r6 = ctx.$implicit; const _r7 = i0.ɵɵreference(6); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.saveNode(node_r6, _r7.value); });
    i0.ɵɵtext(8, "Save");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TreeChecklistExample_mat_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tree-node", 6);
    i0.ɵɵelementStart(1, "button", 10);
    i0.ɵɵelementStart(2, "mat-icon", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-checkbox", 12);
    i0.ɵɵlistener("change", function TreeChecklistExample_mat_tree_node_3_Template_mat_checkbox_change_4_listener() { i0.ɵɵrestoreView(_r12); const node_r10 = ctx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.todoItemSelectionToggle(node_r10); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 13);
    i0.ɵɵlistener("click", function TreeChecklistExample_mat_tree_node_3_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r12); const node_r10 = ctx.$implicit; const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.addNewItem(node_r10); });
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r10 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("aria-label", "Toggle " + node_r10.item);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.treeControl.isExpanded(node_r10) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r2.descendantsAllSelected(node_r10))("indeterminate", ctx_r2.descendantsPartiallySelected(node_r10));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(node_r10.item);
} }
/**
 * Node for to-do item
 */
export class TodoItemNode {
}
/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
}
/**
 * The Json object for to-do list data.
 */
const TREE_DATA = {
    Groceries: {
        'Almond Meal flour': null,
        'Organic eggs': null,
        'Protein Powder': null,
        Fruits: {
            Apple: null,
            Berries: ['Blueberry', 'Raspberry'],
            Orange: null
        }
    },
    Reminders: [
        'Cook dinner',
        'Read the Material Design spec',
        'Upgrade Application to Angular'
    ]
};
/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
export class ChecklistDatabase {
    constructor() {
        this.dataChange = new BehaviorSubject([]);
        this.initialize();
    }
    get data() { return this.dataChange.value; }
    initialize() {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        const data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
    }
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    buildFileTree(obj, level) {
        return Object.keys(obj).reduce((accumulator, key) => {
            const value = obj[key];
            const node = new TodoItemNode();
            node.item = key;
            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
            }
            return accumulator.concat(node);
        }, []);
    }
    /** Add an item to to-do list */
    insertItem(parent, name) {
        if (parent.children) {
            parent.children.push({ item: name });
            this.dataChange.next(this.data);
        }
    }
    updateItem(node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    }
}
ChecklistDatabase.ɵfac = function ChecklistDatabase_Factory(t) { return new (t || ChecklistDatabase)(); };
ChecklistDatabase.ɵprov = i0.ɵɵdefineInjectable({ token: ChecklistDatabase, factory: ChecklistDatabase.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChecklistDatabase, [{
        type: Injectable
    }], function () { return []; }, null); })();
/**
 * @title Tree with checkboxes
 */
export class TreeChecklistExample {
    constructor(_database) {
        this._database = _database;
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new SelectionModel(true /* multiple */);
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.expandable;
        this.getChildren = (node) => node.children;
        this.hasChild = (_, _nodeData) => _nodeData.expandable;
        this.hasNoContent = (_, _nodeData) => _nodeData.item === '';
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = (node, level) => {
            var _a;
            const existingNode = this.nestedNodeMap.get(node);
            const flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode.expandable = !!((_a = node.children) === null || _a === void 0 ? void 0 : _a.length);
            this.flatNodeMap.set(flatNode, node);
            this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        _database.dataChange.subscribe(data => {
            this.dataSource.data = data;
        });
    }
    /** Whether all the descendants of the node are selected. */
    descendantsAllSelected(node) {
        const descendants = this.treeControl.getDescendants(node);
        const descAllSelected = descendants.length > 0 && descendants.every(child => {
            return this.checklistSelection.isSelected(child);
        });
        return descAllSelected;
    }
    /** Whether part of the descendants are selected */
    descendantsPartiallySelected(node) {
        const descendants = this.treeControl.getDescendants(node);
        const result = descendants.some(child => this.checklistSelection.isSelected(child));
        return result && !this.descendantsAllSelected(node);
    }
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    todoItemSelectionToggle(node) {
        this.checklistSelection.toggle(node);
        const descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? this.checklistSelection.select(...descendants)
            : this.checklistSelection.deselect(...descendants);
        // Force update for the parent
        descendants.forEach(child => this.checklistSelection.isSelected(child));
        this.checkAllParentsSelection(node);
    }
    /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
    todoLeafItemSelectionToggle(node) {
        this.checklistSelection.toggle(node);
        this.checkAllParentsSelection(node);
    }
    /* Checks all the parents when a leaf node is selected/unselected */
    checkAllParentsSelection(node) {
        let parent = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
    }
    /** Check root node checked state and change it accordingly */
    checkRootNodeSelection(node) {
        const nodeSelected = this.checklistSelection.isSelected(node);
        const descendants = this.treeControl.getDescendants(node);
        const descAllSelected = descendants.length > 0 && descendants.every(child => {
            return this.checklistSelection.isSelected(child);
        });
        if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
        }
        else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
        }
    }
    /* Get the parent node of a node */
    getParentNode(node) {
        const currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i--) {
            const currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }
    /** Select the category so we can insert the new item. */
    addNewItem(node) {
        const parentNode = this.flatNodeMap.get(node);
        this._database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    }
    /** Save the node to database */
    saveNode(node, itemValue) {
        const nestedNode = this.flatNodeMap.get(node);
        this._database.updateItem(nestedNode, itemValue);
    }
}
TreeChecklistExample.ɵfac = function TreeChecklistExample_Factory(t) { return new (t || TreeChecklistExample)(i0.ɵɵdirectiveInject(ChecklistDatabase)); };
TreeChecklistExample.ɵcmp = i0.ɵɵdefineComponent({ type: TreeChecklistExample, selectors: [["tree-checklist-example"]], features: [i0.ɵɵProvidersFeature([ChecklistDatabase])], decls: 4, vars: 4, consts: [[3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", "", "matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [1, "checklist-leaf-node", 3, "checked", "change"], ["matTreeNodePadding", ""], ["matInput", "", "placeholder", "Ex. Lettuce"], ["itemValue", ""], ["mat-button", "", 3, "click"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], [3, "checked", "indeterminate", "change"], ["mat-icon-button", "", 3, "click"]], template: function TreeChecklistExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tree", 0);
        i0.ɵɵtemplate(1, TreeChecklistExample_mat_tree_node_1_Template, 4, 2, "mat-tree-node", 1);
        i0.ɵɵtemplate(2, TreeChecklistExample_mat_tree_node_2_Template, 9, 0, "mat-tree-node", 2);
        i0.ɵɵtemplate(3, TreeChecklistExample_mat_tree_node_3_Template, 9, 5, "mat-tree-node", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasNoContent);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [i1.MatTree, i1.MatTreeNodeDef, i1.MatTreeNode, i1.MatTreeNodeToggle, i1.MatTreeNodePadding, i2.MatButton, i3.MatCheckbox, i4.MatFormField, i4.MatLabel, i5.MatInput, i6.MatIcon], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeChecklistExample, [{
        type: Component,
        args: [{
                selector: 'tree-checklist-example',
                templateUrl: 'tree-checklist-example.html',
                styleUrls: ['tree-checklist-example.css'],
                providers: [ChecklistDatabase]
            }]
    }], function () { return [{ type: ChecklistDatabase }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jaGVja2xpc3QtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1jaGVja2xpc3QvdHJlZS1jaGVja2xpc3QtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7OztJQ0huQyx3Q0FDRTtJQUFBLDRCQUEwQztJQUMxQyx1Q0FFMkQ7SUFBN0MsaVFBQTRDO0lBQUMsWUFBYTtJQUFBLGlCQUFlO0lBQ3pGLGlCQUFnQjs7OztJQUZBLGVBQStDO0lBQS9DLHVFQUErQztJQUNGLGVBQWE7SUFBYixrQ0FBYTs7OztJQUcxRSx3Q0FDRTtJQUFBLDRCQUEwQztJQUMxQyxzQ0FDRTtJQUFBLGlDQUFXO0lBQUEsMkJBQVc7SUFBQSxpQkFBWTtJQUNsQyw4QkFDRjtJQUFBLGlCQUFpQjtJQUNqQixpQ0FBNkQ7SUFBMUMsZ1JBQXlDO0lBQUMsb0JBQUk7SUFBQSxpQkFBUztJQUM1RSxpQkFBZ0I7Ozs7SUFFaEIsd0NBQ0U7SUFBQSxrQ0FFRTtJQUFBLG9DQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFX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QUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFnQztJQUNoQyxRQUFRLENBQUMsSUFBc0IsRUFBRSxTQUFpQjtRQUNoRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7d0ZBcEpVLG9CQUFvQix1QkFzQkEsaUJBQWlCO3lEQXRCckMsb0JBQW9CLDRFQUZwQixDQUFDLGlCQUFpQixDQUFDO1FDN0doQyxtQ0FDRTtRQUFBLHlGQUtnQjtRQUVoQix5RkFPZ0I7UUFFaEIseUZBV2dCO1FBQ2xCLGlCQUFXOztRQTdCRCwyQ0FBeUIsZ0NBQUE7UUFRUyxlQUFrQjtRQUFsQixxREFBa0I7UUFTbEIsZUFBYztRQUFkLGlEQUFjOzt1RkQ4RjdDLG9CQUFvQjtjQU5oQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQy9CO3NDQXVCZ0MsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWxlY3Rpb25Nb2RlbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7RmxhdFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRyZWVGbGF0RGF0YVNvdXJjZSwgTWF0VHJlZUZsYXR0ZW5lcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogTm9kZSBmb3IgdG8tZG8gaXRlbVxuICovXG5leHBvcnQgY2xhc3MgVG9kb0l0ZW1Ob2RlIHtcbiAgY2hpbGRyZW46IFRvZG9JdGVtTm9kZVtdO1xuICBpdGVtOiBzdHJpbmc7XG59XG5cbi8qKiBGbGF0IHRvLWRvIGl0ZW0gbm9kZSB3aXRoIGV4cGFuZGFibGUgYW5kIGxldmVsIGluZm9ybWF0aW9uICovXG5leHBvcnQgY2xhc3MgVG9kb0l0ZW1GbGF0Tm9kZSB7XG4gIGl0ZW06IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbiAgZXhwYW5kYWJsZTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBUaGUgSnNvbiBvYmplY3QgZm9yIHRvLWRvIGxpc3QgZGF0YS5cbiAqL1xuY29uc3QgVFJFRV9EQVRBID0ge1xuICBHcm9jZXJpZXM6IHtcbiAgICAnQWxtb25kIE1lYWwgZmxvdXInOiBudWxsLFxuICAgICdPcmdhbmljIGVnZ3MnOiBudWxsLFxuICAgICdQcm90ZWluIFBvd2Rlcic6IG51bGwsXG4gICAgRnJ1aXRzOiB7XG4gICAgICBBcHBsZTogbnVsbCxcbiAgICAgIEJlcnJpZXM6IFsnQmx1ZWJlcnJ5JywgJ1Jhc3BiZXJyeSddLFxuICAgICAgT3JhbmdlOiBudWxsXG4gICAgfVxuICB9LFxuICBSZW1pbmRlcnM6IFtcbiAgICAnQ29vayBkaW5uZXInLFxuICAgICdSZWFkIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYycsXG4gICAgJ1VwZ3JhZGUgQXBwbGljYXRpb24gdG8gQW5ndWxhcidcbiAgXVxufTtcblxuLyoqXG4gKiBDaGVja2xpc3QgZGF0YWJhc2UsIGl0IGNhbiBidWlsZCBhIHRyZWUgc3RydWN0dXJlZCBKc29uIG9iamVjdC5cbiAqIEVhY2ggbm9kZSBpbiBKc29uIG9iamVjdCByZXByZXNlbnRzIGEgdG8tZG8gaXRlbSBvciBhIGNhdGVnb3J5LlxuICogSWYgYSBub2RlIGlzIGEgY2F0ZWdvcnksIGl0IGhhcyBjaGlsZHJlbiBpdGVtcyBhbmQgbmV3IGl0ZW1zIGNhbiBiZSBhZGRlZCB1bmRlciB0aGUgY2F0ZWdvcnkuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGVja2xpc3REYXRhYmFzZSB7XG4gIGRhdGFDaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRvZG9JdGVtTm9kZVtdPihbXSk7XG5cbiAgZ2V0IGRhdGEoKTogVG9kb0l0ZW1Ob2RlW10geyByZXR1cm4gdGhpcy5kYXRhQ2hhbmdlLnZhbHVlOyB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIC8vIEJ1aWxkIHRoZSB0cmVlIG5vZGVzIGZyb20gSnNvbiBvYmplY3QuIFRoZSByZXN1bHQgaXMgYSBsaXN0IG9mIGBUb2RvSXRlbU5vZGVgIHdpdGggbmVzdGVkXG4gICAgLy8gICAgIGZpbGUgbm9kZSBhcyBjaGlsZHJlbi5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5idWlsZEZpbGVUcmVlKFRSRUVfREFUQSwgMCk7XG5cbiAgICAvLyBOb3RpZnkgdGhlIGNoYW5nZS5cbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZmlsZSBzdHJ1Y3R1cmUgdHJlZS4gVGhlIGB2YWx1ZWAgaXMgdGhlIEpzb24gb2JqZWN0LCBvciBhIHN1Yi10cmVlIG9mIGEgSnNvbiBvYmplY3QuXG4gICAqIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGxpc3Qgb2YgYFRvZG9JdGVtTm9kZWAuXG4gICAqL1xuICBidWlsZEZpbGVUcmVlKG9iajoge1trZXk6IHN0cmluZ106IGFueX0sIGxldmVsOiBudW1iZXIpOiBUb2RvSXRlbU5vZGVbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlPFRvZG9JdGVtTm9kZVtdPigoYWNjdW11bGF0b3IsIGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgIGNvbnN0IG5vZGUgPSBuZXcgVG9kb0l0ZW1Ob2RlKCk7XG4gICAgICBub2RlLml0ZW0gPSBrZXk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IHRoaXMuYnVpbGRGaWxlVHJlZSh2YWx1ZSwgbGV2ZWwgKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLml0ZW0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjdW11bGF0b3IuY29uY2F0KG5vZGUpO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIC8qKiBBZGQgYW4gaXRlbSB0byB0by1kbyBsaXN0ICovXG4gIGluc2VydEl0ZW0ocGFyZW50OiBUb2RvSXRlbU5vZGUsIG5hbWU6IHN0cmluZykge1xuICAgIGlmIChwYXJlbnQuY2hpbGRyZW4pIHtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5wdXNoKHtpdGVtOiBuYW1lfSBhcyBUb2RvSXRlbU5vZGUpO1xuICAgICAgdGhpcy5kYXRhQ2hhbmdlLm5leHQodGhpcy5kYXRhKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVJdGVtKG5vZGU6IFRvZG9JdGVtTm9kZSwgbmFtZTogc3RyaW5nKSB7XG4gICAgbm9kZS5pdGVtID0gbmFtZTtcbiAgICB0aGlzLmRhdGFDaGFuZ2UubmV4dCh0aGlzLmRhdGEpO1xuICB9XG59XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBjaGVja2JveGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtY2hlY2tsaXN0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtY2hlY2tsaXN0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0cmVlLWNoZWNrbGlzdC1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtDaGVja2xpc3REYXRhYmFzZV1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUNoZWNrbGlzdEV4YW1wbGUge1xuICAvKiogTWFwIGZyb20gZmxhdCBub2RlIHRvIG5lc3RlZCBub2RlLiBUaGlzIGhlbHBzIHVzIGZpbmRpbmcgdGhlIG5lc3RlZCBub2RlIHRvIGJlIG1vZGlmaWVkICovXG4gIGZsYXROb2RlTWFwID0gbmV3IE1hcDxUb2RvSXRlbUZsYXROb2RlLCBUb2RvSXRlbU5vZGU+KCk7XG5cbiAgLyoqIE1hcCBmcm9tIG5lc3RlZCBub2RlIHRvIGZsYXR0ZW5lZCBub2RlLiBUaGlzIGhlbHBzIHVzIHRvIGtlZXAgdGhlIHNhbWUgb2JqZWN0IGZvciBzZWxlY3Rpb24gKi9cbiAgbmVzdGVkTm9kZU1hcCA9IG5ldyBNYXA8VG9kb0l0ZW1Ob2RlLCBUb2RvSXRlbUZsYXROb2RlPigpO1xuXG4gIC8qKiBBIHNlbGVjdGVkIHBhcmVudCBub2RlIHRvIGJlIGluc2VydGVkICovXG4gIHNlbGVjdGVkUGFyZW50OiBUb2RvSXRlbUZsYXROb2RlIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFRoZSBuZXcgaXRlbSdzIG5hbWUgKi9cbiAgbmV3SXRlbU5hbWUgPSAnJztcblxuICB0cmVlQ29udHJvbDogRmxhdFRyZWVDb250cm9sPFRvZG9JdGVtRmxhdE5vZGU+O1xuXG4gIHRyZWVGbGF0dGVuZXI6IE1hdFRyZWVGbGF0dGVuZXI8VG9kb0l0ZW1Ob2RlLCBUb2RvSXRlbUZsYXROb2RlPjtcblxuICBkYXRhU291cmNlOiBNYXRUcmVlRmxhdERhdGFTb3VyY2U8VG9kb0l0ZW1Ob2RlLCBUb2RvSXRlbUZsYXROb2RlPjtcblxuICAvKiogVGhlIHNlbGVjdGlvbiBmb3IgY2hlY2tsaXN0ICovXG4gIGNoZWNrbGlzdFNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxUb2RvSXRlbUZsYXROb2RlPih0cnVlIC8qIG11bHRpcGxlICovKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhYmFzZTogQ2hlY2tsaXN0RGF0YWJhc2UpIHtcbiAgICB0aGlzLnRyZWVGbGF0dGVuZXIgPSBuZXcgTWF0VHJlZUZsYXR0ZW5lcih0aGlzLnRyYW5zZm9ybWVyLCB0aGlzLmdldExldmVsLFxuICAgICAgdGhpcy5pc0V4cGFuZGFibGUsIHRoaXMuZ2V0Q2hpbGRyZW4pO1xuICAgIHRoaXMudHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPFRvZG9JdGVtRmxhdE5vZGU+KHRoaXMuZ2V0TGV2ZWwsIHRoaXMuaXNFeHBhbmRhYmxlKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZUZsYXREYXRhU291cmNlKHRoaXMudHJlZUNvbnRyb2wsIHRoaXMudHJlZUZsYXR0ZW5lcik7XG5cbiAgICBfZGF0YWJhc2UuZGF0YUNoYW5nZS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBnZXRMZXZlbCA9IChub2RlOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBub2RlLmxldmVsO1xuXG4gIGlzRXhwYW5kYWJsZSA9IChub2RlOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgZ2V0Q2hpbGRyZW4gPSAobm9kZTogVG9kb0l0ZW1Ob2RlKTogVG9kb0l0ZW1Ob2RlW10gPT4gbm9kZS5jaGlsZHJlbjtcblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIF9ub2RlRGF0YTogVG9kb0l0ZW1GbGF0Tm9kZSkgPT4gX25vZGVEYXRhLmV4cGFuZGFibGU7XG5cbiAgaGFzTm9Db250ZW50ID0gKF86IG51bWJlciwgX25vZGVEYXRhOiBUb2RvSXRlbUZsYXROb2RlKSA9PiBfbm9kZURhdGEuaXRlbSA9PT0gJyc7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybWVyIHRvIGNvbnZlcnQgbmVzdGVkIG5vZGUgdG8gZmxhdCBub2RlLiBSZWNvcmQgdGhlIG5vZGVzIGluIG1hcHMgZm9yIGxhdGVyIHVzZS5cbiAgICovXG4gIHRyYW5zZm9ybWVyID0gKG5vZGU6IFRvZG9JdGVtTm9kZSwgbGV2ZWw6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nTm9kZSA9IHRoaXMubmVzdGVkTm9kZU1hcC5nZXQobm9kZSk7XG4gICAgY29uc3QgZmxhdE5vZGUgPSBleGlzdGluZ05vZGUgJiYgZXhpc3RpbmdOb2RlLml0ZW0gPT09IG5vZGUuaXRlbVxuICAgICAgICA/IGV4aXN0aW5nTm9kZVxuICAgICAgICA6IG5ldyBUb2RvSXRlbUZsYXROb2RlKCk7XG4gICAgZmxhdE5vZGUuaXRlbSA9IG5vZGUuaXRlbTtcbiAgICBmbGF0Tm9kZS5sZXZlbCA9IGxldmVsO1xuICAgIGZsYXROb2RlLmV4cGFuZGFibGUgPSAhIW5vZGUuY2hpbGRyZW4/Lmxlbmd0aDtcbiAgICB0aGlzLmZsYXROb2RlTWFwLnNldChmbGF0Tm9kZSwgbm9kZSk7XG4gICAgdGhpcy5uZXN0ZWROb2RlTWFwLnNldChub2RlLCBmbGF0Tm9kZSk7XG4gICAgcmV0dXJuIGZsYXROb2RlO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgYWxsIHRoZSBkZXNjZW5kYW50cyBvZiB0aGUgbm9kZSBhcmUgc2VsZWN0ZWQuICovXG4gIGRlc2NlbmRhbnRzQWxsU2VsZWN0ZWQobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICBjb25zdCBkZXNjQWxsU2VsZWN0ZWQgPSBkZXNjZW5kYW50cy5sZW5ndGggPiAwICYmIGRlc2NlbmRhbnRzLmV2ZXJ5KGNoaWxkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKGNoaWxkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVzY0FsbFNlbGVjdGVkO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgcGFydCBvZiB0aGUgZGVzY2VuZGFudHMgYXJlIHNlbGVjdGVkICovXG4gIGRlc2NlbmRhbnRzUGFydGlhbGx5U2VsZWN0ZWQobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICBjb25zdCByZXN1bHQgPSBkZXNjZW5kYW50cy5zb21lKGNoaWxkID0+IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQoY2hpbGQpKTtcbiAgICByZXR1cm4gcmVzdWx0ICYmICF0aGlzLmRlc2NlbmRhbnRzQWxsU2VsZWN0ZWQobm9kZSk7XG4gIH1cblxuICAvKiogVG9nZ2xlIHRoZSB0by1kbyBpdGVtIHNlbGVjdGlvbi4gU2VsZWN0L2Rlc2VsZWN0IGFsbCB0aGUgZGVzY2VuZGFudHMgbm9kZSAqL1xuICB0b2RvSXRlbVNlbGVjdGlvblRvZ2dsZShub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24udG9nZ2xlKG5vZGUpO1xuICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gdGhpcy50cmVlQ29udHJvbC5nZXREZXNjZW5kYW50cyhub2RlKTtcbiAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKG5vZGUpXG4gICAgICA/IHRoaXMuY2hlY2tsaXN0U2VsZWN0aW9uLnNlbGVjdCguLi5kZXNjZW5kYW50cylcbiAgICAgIDogdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uZGVzZWxlY3QoLi4uZGVzY2VuZGFudHMpO1xuXG4gICAgLy8gRm9yY2UgdXBkYXRlIGZvciB0aGUgcGFyZW50XG4gICAgZGVzY2VuZGFudHMuZm9yRWFjaChjaGlsZCA9PiB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5pc1NlbGVjdGVkKGNoaWxkKSk7XG4gICAgdGhpcy5jaGVja0FsbFBhcmVudHNTZWxlY3Rpb24obm9kZSk7XG4gIH1cblxuICAvKiogVG9nZ2xlIGEgbGVhZiB0by1kbyBpdGVtIHNlbGVjdGlvbi4gQ2hlY2sgYWxsIHRoZSBwYXJlbnRzIHRvIHNlZSBpZiB0aGV5IGNoYW5nZWQgKi9cbiAgdG9kb0xlYWZJdGVtU2VsZWN0aW9uVG9nZ2xlKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi50b2dnbGUobm9kZSk7XG4gICAgdGhpcy5jaGVja0FsbFBhcmVudHNTZWxlY3Rpb24obm9kZSk7XG4gIH1cblxuICAvKiBDaGVja3MgYWxsIHRoZSBwYXJlbnRzIHdoZW4gYSBsZWFmIG5vZGUgaXMgc2VsZWN0ZWQvdW5zZWxlY3RlZCAqL1xuICBjaGVja0FsbFBhcmVudHNTZWxlY3Rpb24obm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSk6IHZvaWQge1xuICAgIGxldCBwYXJlbnQ6IFRvZG9JdGVtRmxhdE5vZGUgfCBudWxsID0gdGhpcy5nZXRQYXJlbnROb2RlKG5vZGUpO1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIHRoaXMuY2hlY2tSb290Tm9kZVNlbGVjdGlvbihwYXJlbnQpO1xuICAgICAgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnROb2RlKHBhcmVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIENoZWNrIHJvb3Qgbm9kZSBjaGVja2VkIHN0YXRlIGFuZCBjaGFuZ2UgaXQgYWNjb3JkaW5nbHkgKi9cbiAgY2hlY2tSb290Tm9kZVNlbGVjdGlvbihub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZVNlbGVjdGVkID0gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChub2RlKTtcbiAgICBjb25zdCBkZXNjZW5kYW50cyA9IHRoaXMudHJlZUNvbnRyb2wuZ2V0RGVzY2VuZGFudHMobm9kZSk7XG4gICAgY29uc3QgZGVzY0FsbFNlbGVjdGVkID0gZGVzY2VuZGFudHMubGVuZ3RoID4gMCAmJiBkZXNjZW5kYW50cy5ldmVyeShjaGlsZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja2xpc3RTZWxlY3Rpb24uaXNTZWxlY3RlZChjaGlsZCk7XG4gICAgfSk7XG4gICAgaWYgKG5vZGVTZWxlY3RlZCAmJiAhZGVzY0FsbFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5kZXNlbGVjdChub2RlKTtcbiAgICB9IGVsc2UgaWYgKCFub2RlU2VsZWN0ZWQgJiYgZGVzY0FsbFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmNoZWNrbGlzdFNlbGVjdGlvbi5zZWxlY3Qobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgLyogR2V0IHRoZSBwYXJlbnQgbm9kZSBvZiBhIG5vZGUgKi9cbiAgZ2V0UGFyZW50Tm9kZShub2RlOiBUb2RvSXRlbUZsYXROb2RlKTogVG9kb0l0ZW1GbGF0Tm9kZSB8IG51bGwge1xuICAgIGNvbnN0IGN1cnJlbnRMZXZlbCA9IHRoaXMuZ2V0TGV2ZWwobm9kZSk7XG5cbiAgICBpZiAoY3VycmVudExldmVsIDwgMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzLmluZGV4T2Yobm9kZSkgLSAxO1xuXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzW2ldO1xuXG4gICAgICBpZiAodGhpcy5nZXRMZXZlbChjdXJyZW50Tm9kZSkgPCBjdXJyZW50TGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBTZWxlY3QgdGhlIGNhdGVnb3J5IHNvIHdlIGNhbiBpbnNlcnQgdGhlIG5ldyBpdGVtLiAqL1xuICBhZGROZXdJdGVtKG5vZGU6IFRvZG9JdGVtRmxhdE5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5mbGF0Tm9kZU1hcC5nZXQobm9kZSk7XG4gICAgdGhpcy5fZGF0YWJhc2UuaW5zZXJ0SXRlbShwYXJlbnROb2RlISwgJycpO1xuICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kKG5vZGUpO1xuICB9XG5cbiAgLyoqIFNhdmUgdGhlIG5vZGUgdG8gZGF0YWJhc2UgKi9cbiAgc2F2ZU5vZGUobm9kZTogVG9kb0l0ZW1GbGF0Tm9kZSwgaXRlbVZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXN0ZWROb2RlID0gdGhpcy5mbGF0Tm9kZU1hcC5nZXQobm9kZSk7XG4gICAgdGhpcy5fZGF0YWJhc2UudXBkYXRlSXRlbShuZXN0ZWROb2RlISwgaXRlbVZhbHVlKTtcbiAgfVxufVxuIiwiPG1hdC10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBtYXRUcmVlTm9kZVRvZ2dsZSBtYXRUcmVlTm9kZVBhZGRpbmc+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImNoZWNrbGlzdC1sZWFmLW5vZGVcIlxuICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiY2hlY2tsaXN0U2VsZWN0aW9uLmlzU2VsZWN0ZWQobm9kZSlcIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJ0b2RvTGVhZkl0ZW1TZWxlY3Rpb25Ub2dnbGUobm9kZSlcIj57e25vZGUuaXRlbX19PC9tYXQtY2hlY2tib3g+XG4gIDwvbWF0LXRyZWUtbm9kZT5cblxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzTm9Db250ZW50XCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+TmV3IGl0ZW0uLi48L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCAjaXRlbVZhbHVlIHBsYWNlaG9sZGVyPVwiRXguIExldHR1Y2VcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic2F2ZU5vZGUobm9kZSwgaXRlbVZhbHVlLnZhbHVlKVwiPlNhdmU8L2J1dHRvbj5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuXG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRUcmVlTm9kZVRvZ2dsZVxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9nZ2xlICcgKyBub2RlLml0ZW1cIj5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAge3t0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxtYXQtY2hlY2tib3ggW2NoZWNrZWRdPVwiZGVzY2VuZGFudHNBbGxTZWxlY3RlZChub2RlKVwiXG4gICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJkZXNjZW5kYW50c1BhcnRpYWxseVNlbGVjdGVkKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwidG9kb0l0ZW1TZWxlY3Rpb25Ub2dnbGUobm9kZSlcIj57e25vZGUuaXRlbX19PC9tYXQtY2hlY2tib3g+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImFkZE5ld0l0ZW0obm9kZSlcIj48bWF0LWljb24+YWRkPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgPC9tYXQtdHJlZS1ub2RlPlxuPC9tYXQtdHJlZT5cbiJdfQ==