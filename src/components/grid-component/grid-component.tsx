import { Component, Host, h, Prop } from '@stencil/core';


export interface IPeople {
  id: string;
  name: string;
}

@Component({
  tag: 'grid-component',
  styleUrl: 'grid-component.css',
  shadow: true,
})
export class GridComponent {

  /**
   * The array of people object to be converted in a displayed list.
   */
  @Prop({ reflect: false }) entryArray: IPeople[] = [];

  render() {
    return (
      <Host>
        <slot>
          <h2>The list of people :</h2>
          <div>
          <ul>
            {this.entryArray.map((people) =>
              <li>(# {people.id}) - {people.name} </li>
            )}
          </ul>
          </div>
        </slot>
      </Host>
    );
  }

}
