export type TextInputProps = {
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  errorText: string | undefined;
  isError: boolean | undefined;
  name: string;
};

export type TErrors = {
  firstname?: string | undefined;
  lastname?: string | undefined;
  person_phone?: string | undefined;
};

export type TFieldsPerson = {
  firstname: string;
  lastname: string;
  person_phone: string;
};

export interface IPhoneInputProps {
  value: string;
  name: string;
  onChange: (
    value: string,
    data: any,
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => void;
  onFocus?: () => void;
  isError: boolean;
  errorText: string | undefined;
}
