import { Component, Host, State, h } from '@stencil/core';
import axios from 'axios';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  scoped: true,
})
export class MyComponent {

  @State() data: any[];

  componentWillLoad() {
    this.fetchData();
  }

  async fetchData() {
    this.data = (await (axios.get('https://jsonplaceholder.typicode.com/users'))).data;
  }

  render() {
    return (
      <Host>
        {this.data?.map(d => (
          <div class="number">
            {d.name}
          </div>
        ))}
      </Host>
    );
  }
}
