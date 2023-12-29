
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface ButtonProps {
  text ?: string;
  tabLink ?: boolean | string;
  tabLinkActive ?: boolean;
  type ?: string;
  href ?: string | boolean;
  target ?: string;
  round ?: boolean;
  roundMd ?: boolean;
  roundIos ?: boolean;
  fill ?: boolean;
  fillMd ?: boolean;
  fillIos ?: boolean;
  tonal ?: boolean;
  tonalMd ?: boolean;
  tonalIos ?: boolean;
  large ?: boolean;
  largeMd ?: boolean;
  largeIos ?: boolean;
  small ?: boolean;
  smallMd ?: boolean;
  smallIos ?: boolean;
  raised ?: boolean;
  raisedMd ?: boolean;
  raisedIos ?: boolean;
  outline ?: boolean;
  outlineMd ?: boolean;
  outlineIos ?: boolean;
  active ?: boolean;
  disabled ?: boolean;
  tooltip ?: string;
  tooltipTrigger ?: string;
  preloader?: boolean;
  preloaderSize?: number | string;
  preloaderColor?: string;
  loading?: boolean;
  onClick ?: (event?: any) => void;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  icon?: string;
  iconMaterial?: string;
  iconF7?: string;
  iconIos?: string;
  iconMd?: string;
  iconColor?: string;
  iconSize?: string | number;
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
}



declare class Button extends SvelteComponent<
  ButtonProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof ButtonProps>,
  { click: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { ButtonProps };
export default Button;