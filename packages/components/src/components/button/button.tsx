import { Component } from '@stencil/core';

@Component({
  tag: 'button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
