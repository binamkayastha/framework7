
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

import { SmartSelect } from 'framework7/types';


interface ListItemProps {
  title ?: string | number;
  text ?: string | number;
  media ?: string;
  subtitle ?: string | number;
  header ?: string | number;
  footer ?: string | number;
  tooltip ?: string;
  tooltipTrigger ?: string;
  link ?: boolean | string;
  target ?: string;
  tabLink ?: boolean | string;
  tabLinkActive ?: boolean;
  selected?: boolean;
  after ?: string | number;
  badge ?: string | number;
  badgeColor ?: string;
  mediaItem ?: boolean;
  mediaList ?: boolean;
  groupTitle ?: boolean;
  swipeout ?: boolean;
  swipeoutOpened ?: boolean;
  sortable ?: boolean;
  sortableOpposite ?: boolean;
  accordionItem ?: boolean;
  accordionItemOpened ?: boolean;
  smartSelect ?: boolean;
  smartSelectParams ?: SmartSelect.Parameters;
  noChevron ?: boolean;
  chevronCenter ?: boolean;
  checkbox ?: boolean;
  checkboxIcon ?: boolean;
  radio ?: boolean;
  radioIcon ?: string;
  checked ?: boolean;
  defaultChecked ?: boolean;
  indeterminate ?: boolean;
  name ?: string;
  value ?: string | number | Array<any>;
  readonly ?: boolean;
  required ?: boolean;
  disabled ?: boolean;
  virtualListIndex ?: number;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  back?: boolean;
  external?: boolean;
  force?: boolean;
  animate?: boolean;
  ignoreCache?: boolean;
  reloadCurrent?: boolean;
  reloadAll?: boolean;
  reloadPrevious?: boolean;
  reloadDetail?: boolean;
  routeTabId?: string;
  view?: string;
  routeProps?: any;
  preventRouter?: boolean;
  transition?: string;
  openIn?: string;
  searchbarEnable?: boolean | string;
  searchbarDisable?: boolean | string;
  searchbarClear?: boolean | string;
  searchbarToggle?: boolean | string;
  panelOpen?: boolean | string;
  panelClose?: boolean | string;
  panelToggle?: boolean | string;
  popupOpen?: boolean | string;
  popupClose?: boolean | string;
  actionsOpen?: boolean | string;
  actionsClose?: boolean | string;
  popoverOpen?: boolean | string;
  popoverClose?: boolean | string;
  loginScreenOpen?: boolean | string;
  loginScreenClose?: boolean | string;
  sheetOpen?: boolean | string;
  sheetClose?: boolean | string;
  sortableEnable?: boolean | string;
  sortableDisable?: boolean | string;
  sortableToggle?: boolean | string;
  cardOpen?: boolean | string;
  cardPreventOpen?: boolean | string;
  cardClose?: boolean | string;
  menuClose?: boolean | string;
  onClick ?: (event?: any) => void;
  onSwipeoutOverswipeEnter ?: (...args: any[]) => void;
  onSwipeoutOverswipeExit ?: (...args: any[]) => void;
  onSwipeoutDeleted ?: (...args: any[]) => void;
  onSwipeoutDelete ?: (...args: any[]) => void;
  onSwipeoutClose ?: (...args: any[]) => void;
  onSwipeoutClosed ?: (...args: any[]) => void;
  onSwipeoutOpen ?: (...args: any[]) => void;
  onSwipeoutOpened ?: (...args: any[]) => void;
  onSwipeout ?: (progress?: any) => void;
  onAccordionBeforeClose ?: (prevent?: any) => void;
  onAccordionClose ?: (...args: any[]) => void;
  onAccordionClosed ?: (...args: any[]) => void;
  onAccordionBeforeOpen ?: (prevent?: any) => void;
  onAccordionOpen ?: (...args: any[]) => void;
  onAccordionOpened ?: (...args: any[]) => void;
  onChange ?: (event?: any) => void;
}



declare class ListItem extends SvelteComponent<
  ListItemProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof ListItemProps>,
  { click: CustomEvent<void>; swipeoutOverswipeEnter: CustomEvent<void>; swipeoutOverswipeExit: CustomEvent<void>; swipeoutDeleted: CustomEvent<void>; swipeoutDelete: CustomEvent<void>; swipeoutClose: CustomEvent<void>; swipeoutClosed: CustomEvent<void>; swipeoutOpen: CustomEvent<void>; swipeoutOpened: CustomEvent<void>; swipeout: CustomEvent<void>; accordionBeforeClose: CustomEvent<void>; accordionClose: CustomEvent<void>; accordionClosed: CustomEvent<void>; accordionBeforeOpen: CustomEvent<void>; accordionOpen: CustomEvent<void>; accordionOpened: CustomEvent<void>; change: CustomEvent<void>; },
  {  'default' : {};  'root-start' : {};  'content-start' : {};  'media' : {};  'inner-start' : {};  'header' : {};  'before-title' : {};  'title' : {};  'after-title' : {};  'after-start' : {};  'after' : {};  'after-end' : {};  'subtitle' : {};  'text' : {};  'inner' : {};  'footer' : {};  'inner-end' : {};  'content' : {};  'content-end' : {};  'root' : {};  'root-end' : {}; }
> {}

export { ListItemProps };
export default ListItem;
