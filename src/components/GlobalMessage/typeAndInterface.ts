export enum EMessageTypes {
  failed = 'failed',
  success = 'success',
  warning = 'warning',
}

export interface IMessageProps {
  type: EMessageTypes;
  message: string;
  duration: number;
}
export type TShowGlobalMessage = (message: string, type?: EMessageTypes, duration?: number) => void;

export enum EObject {
  icon = 'icon',
  backgroundColor = 'backgroundColor',
  top = 'top',
}

export interface IObject {
  [EObject.icon]: JSX.Element;
  [EObject.backgroundColor]: any;
  [EObject.top]: number;
}
