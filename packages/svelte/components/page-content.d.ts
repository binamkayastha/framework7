
import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';


interface PageContentProps {
  tab ?: boolean;
  tabActive ?: boolean;
  ptr ?: boolean;
  ptrDistance ?: number;
  ptrPreloader ?: boolean;
  ptrBottom ?: boolean;
  ptrMousewheel ?: boolean;
  infinite ?: boolean;
  infiniteTop ?: boolean;
  infiniteDistance ?: number;
  infinitePreloader ?: boolean;
  hideBarsOnScroll ?: boolean;
  hideNavbarOnScroll ?: boolean;
  hideToolbarOnScroll ?: boolean;
  messagesContent ?: boolean;
  loginScreen ?: boolean;
  color?: string;
  colorTheme?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  rippleColor?: string;
  dark?: boolean;
  onPtrPullStart ?: (...args: any[]) => void;
  onPtrPullMove ?: (...args: any[]) => void;
  onPtrPullEnd ?: (...args: any[]) => void;
  onPtrRefresh ?: (done?: any) => void;
  onPtrDone ?: (...args: any[]) => void;
  onInfinite ?: (...args: any[]) => void;
  onTabShow ?: (el?: HTMLElement) => void;
  onTabHide ?: (el?: HTMLElement) => void;
}



declare class PageContent extends SvelteComponent<
  PageContentProps & Omit<HTMLAttributes<HTMLElementTagNameMap['div']>, keyof PageContentProps>,
  { ptrPullStart: CustomEvent<void>; ptrPullMove: CustomEvent<void>; ptrPullEnd: CustomEvent<void>; ptrRefresh: CustomEvent<void>; ptrDone: CustomEvent<void>; infinite: CustomEvent<void>; },
  {  'default' : {}; }
> {}

export { PageContentProps };
export default PageContent;
