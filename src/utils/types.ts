import { Dayjs } from 'dayjs';

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
  person_date: Dayjs | string;
  person_responsible_name: string;
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

export interface SelectOption {
  value: string;
  label: JSX.Element;
}

export interface IDroDownProps {
  openDropDown: () => void;
  selectData: SelectOption[];
  isError: boolean;
  onChange: (arg: string) => void;
  errorText: string;
}

export interface PersonData {
  id: string;
  name: string;
  job_title: string;
  email: string;
}
