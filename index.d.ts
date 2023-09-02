export declare const EXAMPLE_COMPONENTS: {
    [id: string]: LiveExample;
};

/**
 * Example data with information about component name, selector, files used in
 * example, and path to examples.
 *
 * 示例数据，包含有关组件名称、选择器、示例中使用的文件和示例路径的信息。
 *
 */
export declare class ExampleData {
    /**
     * Description of the example.
     *
     * 示例说明。
     *
     */
    description: string;
    /**
     * List of files that are part of this example.
     *
     * 作为此示例一部分的文件列表。
     *
     */
    exampleFiles: string[];
    /**
     * Selector name of the example component.
     *
     * 示例组件的选择器名称。
     *
     */
    selectorName: string;
    /**
     * Name of the file that contains the example component.
     *
     * 包含示例组件的文件的名称。
     *
     */
    indexFilename: string;
    /**
     * Names of the components being used in this example.
     *
     * 此示例中使用的组件的名称。
     *
     */
    componentNames: string[];
    constructor(example: string);
}

/**
 ******************************************************************************
 * DO NOT MANUALLY EDIT THIS FILE. THIS FILE IS AUTOMATICALLY GENERATED.
 ******************************************************************************
 */
export declare interface LiveExample {
    /** Title of the example. */
    title: string;
    /** Name of the example component. */
    componentName: string;
    /** Selector to match the component of this example. */
    selector: string;
    /** Name of the primary file of this example. */
    primaryFile: string;
    /** List of files which are part of the example. */
    files: string[];
    /** Path to the directory containing the example. */
    packagePath: string;
    /** List of additional components which are part of the example. */
    additionalComponents: string[];
    /** Path from which to import the xample. */
    importPath: string;
}

export declare function loadExample(id: string): Promise<any>;

export { }
