import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'generic-grid-component',
  styleUrl: 'generic-grid-component.css',
  shadow: true,
})
export class GenericGridComponent {

  /**
   * The array to be converted in a displayed list  
   */
  @Prop({ reflect: false }) entryArray: any[] = [];

  buildCase(object: any) {
    return <li> {this.buildCaseContent(object)} </li>
  }

  buildCaseContent(object: any) {
    // retrieve all keys/value of the object and build a <p> with it
    return Object.keys(object).map((key) => {
      return <p> {key} - {object[key]} </p>;
    });
  }

  render() {
    return (
      <Host>
        <slot>
          <h2>The list of objects :</h2>
          <div>
            <ul>
            {this.entryArray.map((object) => {
              return this.buildCase(object);
            }
            )}
            </ul>
          </div>
        </slot>
      </Host>
    );
  }

}
