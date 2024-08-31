import { Component, h } from '@stencil/core';

@Component({
  tag: 'text-input',
  styleUrl: 'text-input.scss',
  shadow: true,
})
export class Text-input {
  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}