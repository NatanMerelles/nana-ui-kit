import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from "./";

describe('Button Tests Suite', () => {
  it('should display children as content', () => {
    const content = 'Click';

    render(<Button>{content}</Button>);

    const node = screen.getByText(content);
    expect(node).toBeInTheDocument();
  });

  it('should call onclick when clicked', () => {
    const onClickFn = jest.fn();

    render(<Button onClick={onClickFn} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onClickFn).toHaveBeenCalled();
  })
});