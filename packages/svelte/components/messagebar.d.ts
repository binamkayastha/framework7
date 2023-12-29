
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { Messagebar } from 'framework7/types';


interface MessagebarProps {
  sheetVisible ?: boolean;
  attachmentsVisible ?: boolean;
  top ?: boolean;
  resizable ?: boolean;
  bottomOffset ?: number;
  topOffset ?: number;
  maxHeight ?: number;
  resizePage ?: boolean;
  sendLink ?: string;
  value ?: string | number | Array<any>;
  disabled ?: boolean;
  readonly ?: boolean;
  textareaId ?: number | string;
  name ?: string;
  placeholder ?: string;
  init ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onChange ?: (event?: any) => void;
  onInput ?: (event?: any) => void;
  onFocus ?: (event?: any) => void;
  onBlur ?: (event?: any) => void;
  onSubmit ?: (value?: any, clear?: any) => void;
  onSend ?: (value?: any, clear?: any) => void;
  onClick ?: (event?: any) => void;
  onMessagebarAttachmentDelete ?: (instance?: Messagebar.Messagebar, attachmentEl?: HTMLElement, attachmentElIndex?: number) => void;
  onMessagebarAttachmentClick ?: (instance?: Messagebar.Messagebar, attachmentEl?: HTMLElement, attachmentElIndex?: number) => void;
  onMessagebarResizePage ?: (instance?: Messagebar.Messagebar) => void;
}



declare class Messagebar extends SvelteComponent<
  MessagebarProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof MessagebarProps>,
  { change: CustomEvent<void>; input: CustomEvent<void>; focus: CustomEvent<void>; blur: CustomEvent<void>; submit: CustomEvent<void>; send: CustomEvent<void>; click: CustomEvent<void>; messagebarAttachmentDelete: CustomEvent<void>; messagebarAttachmentClick: CustomEvent<void>; messagebarResizePage: CustomEvent<void>; },
  {  'before-inner' : {};  'inner-start' : {};  'before-area' : {};  'after-inner' : {};  'send-link' : {};  'inner-end' : {};  'default' : {}; }
> {}

export { MessagebarProps };
export default Messagebar;