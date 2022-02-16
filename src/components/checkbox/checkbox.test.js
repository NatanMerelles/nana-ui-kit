import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from "./";

describe('Checkbox Tests Suite', () => {
  it('should call onChange when clicked', () => {
    const onClickFn = jest.fn();

    render(<Checkbox onClick={onClickFn} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(onClickFn).toHaveBeenCalled();
  })
});