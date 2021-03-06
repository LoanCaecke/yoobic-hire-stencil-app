/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IPeople } from "./components/grid-component/grid-component";
export namespace Components {
    interface GenericGridComponent {
        /**
          * The array to be converted in a displayed list
         */
        "entryArray": any[];
    }
    interface GridComponent {
        /**
          * The array of people object to be converted in a displayed list.
         */
        "entryArray": IPeople[];
    }
}
declare global {
    interface HTMLGenericGridComponentElement extends Components.GenericGridComponent, HTMLStencilElement {
    }
    var HTMLGenericGridComponentElement: {
        prototype: HTMLGenericGridComponentElement;
        new (): HTMLGenericGridComponentElement;
    };
    interface HTMLGridComponentElement extends Components.GridComponent, HTMLStencilElement {
    }
    var HTMLGridComponentElement: {
        prototype: HTMLGridComponentElement;
        new (): HTMLGridComponentElement;
    };
    interface HTMLElementTagNameMap {
        "generic-grid-component": HTMLGenericGridComponentElement;
        "grid-component": HTMLGridComponentElement;
    }
}
declare namespace LocalJSX {
    interface GenericGridComponent {
        /**
          * The array to be converted in a displayed list
         */
        "entryArray"?: any[];
    }
    interface GridComponent {
        /**
          * The array of people object to be converted in a displayed list.
         */
        "entryArray"?: IPeople[];
    }
    interface IntrinsicElements {
        "generic-grid-component": GenericGridComponent;
        "grid-component": GridComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "generic-grid-component": LocalJSX.GenericGridComponent & JSXBase.HTMLAttributes<HTMLGenericGridComponentElement>;
            "grid-component": LocalJSX.GridComponent & JSXBase.HTMLAttributes<HTMLGridComponentElement>;
        }
    }
}
