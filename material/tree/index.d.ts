import { BehaviorSubject } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import * as i0 from '@angular/core';
import { MatTreeFlatDataSource } from '@angular/material/tree';
import { MatTreeFlattener } from '@angular/material/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Observable } from 'rxjs';
import { SelectionChange } from '@angular/cdk/collections';
import { SelectionModel } from '@angular/cdk/collections';

/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 *
 * 检查列表数据库，它可以构建一个树状结构的 Json 对象。 Json 对象中的每个节点代表一个待办事项或一个类别。如果一个节点是一个类别，它有子条目，并且可以在该类别下添加新条目。
 *
 */
declare class ChecklistDatabase {
    dataChange: BehaviorSubject<TodoItemNode[]>;
    get data(): TodoItemNode[];
    constructor();
    initialize(): void;
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     *
     * 构建文件结构树。该 `value` 是 Json 对象，或 Json 对象的子树。返回值是 `TodoItemNode` 的列表。
     *
     */
    buildFileTree(obj: {
        [key: string]: any;
    }, level: number): TodoItemNode[];
    /**
     * Add an item to to-do list
     *
     * 将条目添加到待办事项列表
     *
     */
    insertItem(parent: TodoItemNode, name: string): void;
    updateItem(node: TodoItemNode, name: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChecklistDatabase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ChecklistDatabase>;
}

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 *
 * 动态数据的数据库。当在树中扩展一个节点时，数据源将需要从数据库中获取后代数据。
 *
 */
declare class DynamicDatabase {
    dataMap: Map<string, string[]>;
    rootLevelNodes: string[];
    /**
     * Initial data from database
     *
     * 来自数据库的初始数据
     *
     */
    initialData(): DynamicFlatNode[];
    getChildren(node: string): string[] | undefined;
    isExpandable(node: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicDatabase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DynamicDatabase>;
}

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children \(a list of files or directories\).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 *
 * 文件数据库，它可以从字符串构建一个树状结构的 Json 对象。 Json 对象中的每个节点代表一个文件或目录。对于文件，它具有文件名和类型。对于一个目录，它有文件名和子目录（文件或目录的列表）。其输入将是一个 json 对象字符串，其输出是一个具有嵌套结构的 `FileNode` 列表。
 *
 */
declare class DynamicDataSource implements DataSource<DynamicFlatNode> {
    private _treeControl;
    private _database;
    dataChange: BehaviorSubject<DynamicFlatNode[]>;
    get data(): DynamicFlatNode[];
    set data(value: DynamicFlatNode[]);
    constructor(_treeControl: FlatTreeControl<DynamicFlatNode>, _database: DynamicDatabase);
    connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]>;
    disconnect(collectionViewer: CollectionViewer): void;
    /**
     * Handle expand/collapse behaviors
     *
     * 处理展开/折叠行为
     *
     */
    handleTreeControl(change: SelectionChange<DynamicFlatNode>): void;
    /**
     * Toggle the node, remove from display list
     *
     * 切换节点，从显示列表中移除
     *
     */
    toggleNode(node: DynamicFlatNode, expand: boolean): void;
}

/**
 * Flat node with expandable and level information
 *
 * 具有可扩展和级别信息的平面节点
 *
 */
declare class DynamicFlatNode {
    item: string;
    level: number;
    expandable: boolean;
    isLoading: boolean;
    constructor(item: string, level?: number, expandable?: boolean, isLoading?: boolean);
}

/**
 * Flat node with expandable and level information
 *
 * 具有可扩展和级别信息的平面节点
 *
 */
declare interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
}

declare interface ExampleFlatNode_2 {
    expandable: boolean;
    name: string;
    level: number;
}

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 *
 * 具有嵌套结构的食物数据。每个节点都有一个名称和一个可选的子节点列表。
 *
 */
declare interface FoodNode {
    name: string;
    children?: FoodNode[];
}

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 *
 * 具有嵌套结构的食物数据。每个节点都有一个名称和一个可选的子节点列表。
 *
 */
declare interface FoodNode_2 {
    name: string;
    children?: FoodNode_2[];
}

/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 *
 * 最初只加载部分数据的数据库。用户点击 `Load more` 按钮后，将加载更多数据。
 *
 */
declare class LoadmoreDatabase {
    batchNumber: number;
    dataChange: BehaviorSubject<LoadmoreNode[]>;
    nodeMap: Map<string, LoadmoreNode>;
    /**
     * The data
     *
     * 数据
     *
     */
    rootLevelNodes: string[];
    dataMap: Map<string, string[]>;
    initialize(): void;
    /**
     * Expand a node whose children are not loaded
     *
     * 展开其子节点未加载的节点
     *
     */
    loadMore(item: string, onlyFirstTime?: boolean): void;
    private _generateNode;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadmoreDatabase, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadmoreDatabase>;
}

/**
 * Flat node with expandable and level information
 *
 * 具有可扩展和级别信息的平面节点
 *
 */
declare class LoadmoreFlatNode {
    item: string;
    level: number;
    expandable: boolean;
    loadMoreParentItem: string | null;
    constructor(item: string, level?: number, expandable?: boolean, loadMoreParentItem?: string | null);
}

/**
 * Nested node
 *
 * 嵌套节点
 *
 */
declare class LoadmoreNode {
    item: string;
    hasChildren: boolean;
    loadMoreParentItem: string | null;
    childrenChange: BehaviorSubject<LoadmoreNode[]>;
    get children(): LoadmoreNode[];
    constructor(item: string, hasChildren?: boolean, loadMoreParentItem?: string | null);
}

declare interface Node_2 {
    name: string;
    children?: Node_2[];
}

/**
 * Flat to-do item node with expandable and level information
 *
 * 具有可扩展和级别信息的平面待办事项节点
 *
 */
declare class TodoItemFlatNode {
    item: string;
    level: number;
    expandable: boolean;
}

/**
 * Node for to-do item
 *
 * 待办事项的节点
 *
 */
declare class TodoItemNode {
    children: TodoItemNode[];
    item: string;
}

/**
 * @title Tree with checkboxes
 */
export declare class TreeChecklistExample {
    private _database;
    /**
     * Map from flat node to nested node. This helps us finding the nested node to be modified
     *
     * 从平面节点映射到嵌套节点。这有助于我们找到要修改的嵌套节点
     *
     */
    flatNodeMap: Map<TodoItemFlatNode, TodoItemNode>;
    /**
     * Map from nested node to flattened node. This helps us to keep the same object for selection
     *
     * 从嵌套节点映射到平面节点。这有助于我们保留相同的对象以供选择
     *
     */
    nestedNodeMap: Map<TodoItemNode, TodoItemFlatNode>;
    /**
     * A selected parent node to be inserted
     *
     * 要插入的已选定父节点
     *
     */
    selectedParent: TodoItemFlatNode | null;
    /**
     * The new item's name
     *
     * 新条目的名称
     *
     */
    newItemName: string;
    treeControl: FlatTreeControl<TodoItemFlatNode>;
    treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;
    dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;
    /**
     * The selection for checklist
     *
     * 检查的选择结果
     *
     */
    checklistSelection: SelectionModel<TodoItemFlatNode>;
    constructor(_database: ChecklistDatabase);
    getLevel: (node: TodoItemFlatNode) => number;
    isExpandable: (node: TodoItemFlatNode) => boolean;
    getChildren: (node: TodoItemNode) => TodoItemNode[];
    hasChild: (_: number, _nodeData: TodoItemFlatNode) => boolean;
    hasNoContent: (_: number, _nodeData: TodoItemFlatNode) => boolean;
    /**
     * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
     *
     * 将嵌套节点转换为平面节点的转换器。在 map 中记录这些节点以备后用。
     *
     */
    transformer: (node: TodoItemNode, level: number) => TodoItemFlatNode;
    /**
     * Whether all the descendants of the node are selected.
     *
     * 节点的所有后代是否都被选定了。
     *
     */
    descendantsAllSelected(node: TodoItemFlatNode): boolean;
    /**
     * Whether part of the descendants are selected
     *
     * 是否选定了部分后代
     *
     */
    descendantsPartiallySelected(node: TodoItemFlatNode): boolean;
    /**
     * Toggle the to-do item selection. Select/deselect all the descendants node
     *
     * 切换待办事项选择结果。选定/取消选定所有后代节点
     *
     */
    todoItemSelectionToggle(node: TodoItemFlatNode): void;
    /**
     * Toggle a leaf to-do item selection. Check all the parents to see if they changed
     *
     * 切换叶待办事项的选择结果。检查所有的父母，看看它们是否改变了
     *
     */
    todoLeafItemSelectionToggle(node: TodoItemFlatNode): void;
    checkAllParentsSelection(node: TodoItemFlatNode): void;
    /**
     * Check root node checked state and change it accordingly
     *
     * 检查根节点的勾选状态并相应地更改它
     *
     */
    checkRootNodeSelection(node: TodoItemFlatNode): void;
    getParentNode(node: TodoItemFlatNode): TodoItemFlatNode | null;
    /**
     * Select the category so we can insert the new item.
     *
     * 选定此类别，以便我们可以插入新条目。
     *
     */
    addNewItem(node: TodoItemFlatNode): void;
    /**
     * Save the node to database
     *
     * 将节点保存到数据库
     *
     */
    saveNode(node: TodoItemFlatNode, itemValue: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeChecklistExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeChecklistExample, "tree-checklist-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with dynamic data
 */
export declare class TreeDynamicExample {
    constructor(database: DynamicDatabase);
    treeControl: FlatTreeControl<DynamicFlatNode>;
    dataSource: DynamicDataSource;
    getLevel: (node: DynamicFlatNode) => number;
    isExpandable: (node: DynamicFlatNode) => boolean;
    hasChild: (_: number, _nodeData: DynamicFlatNode) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeDynamicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeDynamicExample, "tree-dynamic-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with flat nodes
 */
export declare class TreeFlatOverviewExample {
    private _transformer;
    treeControl: FlatTreeControl<ExampleFlatNode, ExampleFlatNode>;
    treeFlattener: MatTreeFlattener<FoodNode, {
        expandable: boolean;
        name: string;
        level: number;
    }, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    dataSource: MatTreeFlatDataSource<FoodNode, {
        expandable: boolean;
        name: string;
        level: number;
    }, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    constructor();
    hasChild: (_: number, node: ExampleFlatNode) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeFlatOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeFlatOverviewExample, "tree-flat-overview-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Testing with MatTreeHarness
 */
export declare class TreeHarnessExample {
    private _transformer;
    treeControl: FlatTreeControl<ExampleFlatNode_2, ExampleFlatNode_2>;
    treeFlattener: MatTreeFlattener<Node_2, {
        expandable: boolean;
        name: string;
        level: number;
    }, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    dataSource: MatTreeFlatDataSource<Node_2, {
        expandable: boolean;
        name: string;
        level: number;
    }, {
        expandable: boolean;
        name: string;
        level: number;
    }>;
    constructor();
    hasChild: (_: number, node: ExampleFlatNode_2) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeHarnessExample, "tree-harness-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with partially loaded data
 */
export declare class TreeLoadmoreExample {
    private _database;
    nodeMap: Map<string, LoadmoreFlatNode>;
    treeControl: FlatTreeControl<LoadmoreFlatNode>;
    treeFlattener: MatTreeFlattener<LoadmoreNode, LoadmoreFlatNode>;
    dataSource: MatTreeFlatDataSource<LoadmoreNode, LoadmoreFlatNode>;
    constructor(_database: LoadmoreDatabase);
    getChildren: (node: LoadmoreNode) => Observable<LoadmoreNode[]>;
    transformer: (node: LoadmoreNode, level: number) => LoadmoreFlatNode;
    getLevel: (node: LoadmoreFlatNode) => number;
    isExpandable: (node: LoadmoreFlatNode) => boolean;
    hasChild: (_: number, _nodeData: LoadmoreFlatNode) => boolean;
    isLoadMore: (_: number, _nodeData: LoadmoreFlatNode) => boolean;
    /**
     * Load more nodes from data source
     *
     * 从数据源加载更多节点
     *
     */
    loadMore(item: string): void;
    loadChildren(node: LoadmoreFlatNode): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeLoadmoreExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeLoadmoreExample, "tree-loadmore-example", never, {}, {}, never, never, true, never>;
}

/**
 * @title Tree with nested nodes
 */
export declare class TreeNestedOverviewExample {
    treeControl: NestedTreeControl<FoodNode_2, FoodNode_2>;
    dataSource: MatTreeNestedDataSource<FoodNode_2>;
    constructor();
    hasChild: (_: number, node: FoodNode_2) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeNestedOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeNestedOverviewExample, "tree-nested-overview-example", never, {}, {}, never, never, true, never>;
}

export { }
