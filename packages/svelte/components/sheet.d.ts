
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { Sheet } from 'framework7/types';


interface SheetProps {
  opened ?: boolean;
  animate ?: boolean;
  top ?: boolean;
  bottom ?: boolean;
  position ?: string;
  backdrop ?: boolean;
  backdropEl ?: string | object;
  closeByBackdropClick ?: boolean;
  closeByOutsideClick ?: boolean;
  closeOnEscape ?: boolean;
  push ?: boolean;
  swipeToClose ?: boolean;
  swipeToStep ?: boolean;
  swipeHandler ?: string | object;
  containerEl ?: string | object;
  breakpoints ?: number[];
  backdropBreakpoint ?: number;
  pushBreakpoint ?: number;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onSheetStepProgress ?: (instance?: Sheet.Sheet, progress?: any) => void;
  onSheetStepOpen ?: (instance?: Sheet.Sheet) => void;
  onSheetStepClose ?: (instance?: Sheet.Sheet) => void;
  onSheetOpen ?: (instance?: Sheet.Sheet) => void;
  onSheetOpened ?: (instance?: Sheet.Sheet) => void;
  onSheetClose ?: (instance?: Sheet.Sheet) => void;
  onSheetClosed ?: (instance?: Sheet.Sheet) => void;
}



declare class Sheet extends SvelteComponent<
  SheetProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof SheetProps>,
  { sheetOpen: CustomEvent<void>; sheetOpened: CustomEvent<void>; sheetClose: CustomEvent<void>; sheetClosed: CustomEvent<void>; sheetBreakpoint: CustomEvent<void>; sheetStepProgress: CustomEvent<void>; sheetStepOpen: CustomEvent<void>; sheetStepClose: CustomEvent<void>; },
  {  'fixed' : {};  'default' : {};  'static' : {}; }
> {}

export { SheetProps };
export default Sheet;