import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TextInput } from '../../components/TextInput/TextInput';

describe('textInput', () => {
  const obj = {
    placeholder: 'placeholder',
    value: 'value',
    onChange: () => {},
    errorText: 'errorText',
    isError: true,
    name: 'name',
  };

  it('should be error in status if isError in props', () => {
    render(
      <TextInput
        placeholder="placeholder"
        value="value"
        onChange={() => {}}
        errorText="errorText"
        isError={true}
        name="name"
      />
    );

    const input = screen.getByPlaceholderText('placeholder');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('ant-input-status-error');

    const spanwrap = screen.getByTestId('span-wrap-test');
    expect(spanwrap).toHaveTextContent('errorText');

    screen.debug();
  });
});
