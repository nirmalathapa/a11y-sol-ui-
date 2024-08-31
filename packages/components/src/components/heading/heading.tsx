import { Component, h } from '@stencil/core';

@Component({
  tag: 'heading',
  styleUrl: 'heading.scss',
  shadow: true,
})
export class Heading {
  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}