import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PhoneInputComponent } from '../../components/PhoneInput/PhoneInput';

describe('PhoneInput', () => {
  it('should have error class if isError is true', () => {
    render(
      <PhoneInputComponent
        value="fieldsPerson.person_phone"
        name="person_phone"
        onChange={() => {}}
        onFocus={() => {}}
        isError={true}
        errorText="errors"
      />
    );

    const phoneInput = screen.getByTestId('phone-input');
    const input = screen.getByRole('textbox');
    expect(phoneInput).toBeInTheDocument();
    expect(input).toHaveClass('phone-input-add-error');
    screen.debug();
  });
});
