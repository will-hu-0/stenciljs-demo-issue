import { Component, Host, State, h } from '@stencil/core';
import axios from 'axios';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  scoped: true,
})
export class MyComponent {

  @State() data: any[];

  @State() isLoaded = false;

  componentWillLoad() {
    this.fetchData();
  }

  async fetchData() {
    this.data = (await (axios.get('https://jsonplaceholder.typicode.com/users'))).data;
    this.isLoaded = true;
  }

  async prev() {
    this.isLoaded = false;
    this.data = (await (axios.get('https://jsonplaceholder.typicode.com/users'))).data.slice(0,5);
    this.isLoaded = true;
  }

  async after() {
    this.isLoaded = false;
    this.data = (await (axios.get('https://jsonplaceholder.typicode.com/users'))).data.slice(5,10)
    this.isLoaded = true;
  }

  display() {
    return this.data !== undefined && this.data !==null;
  }

  render() {
    return (
      <Host>
        <p>
          <button onClick={() => this.prev()}>Previous</button>
          <button onClick={() => this.after()}>Next</button>
        </p>
        {this.display() && (
          <div class={`data-state ${this.isLoaded ? 'loaded' : ''}`}>
          {/* <div class={`${this.isLoaded ? 'data-state loaded' : 'data-state'}`}> */}
            {this.data?.map(d => (
              <div class="number">
                {d.name}
              </div>
            ))}
          </div>
        )}
      </Host>
    );
  }
}
