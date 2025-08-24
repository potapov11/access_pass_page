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
};

export type TFieldsPerson = {
  firstname: string;
  lastname: string;
};
