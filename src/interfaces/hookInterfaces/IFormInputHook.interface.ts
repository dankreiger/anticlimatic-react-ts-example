import { ChangeEvent } from 'react';

export interface IFormInputHook {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}