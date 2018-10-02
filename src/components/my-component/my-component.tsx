import { Component, Prop } from '@stencil/core';
import { from } from 'rxjs';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop()
  first: string;
  @Prop()
  middle: string;
  @Prop()
  last: string;

  format(): string {
    return (
      (this.first || '') +
      (this.middle ? ` ${this.middle}` : '') +
      (this.last ? ` ${this.last}` : '')
    );
  }
  componentDidLoad() {
    const items = from([1, 2, 3, 4]);
    items.subscribe(i => {
      console.log(i);
    });
  }

  render() {
    return <div>Hello, World! I'm {this.format()}</div>;
  }
}
