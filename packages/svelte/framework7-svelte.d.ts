import Framework7, { Framework7Plugin } from 'framework7/types';
import { Store } from 'framework7/types';

import AccordionContent from './components/accordion-content.js';
import AccordionItem from './components/accordion-item.js';
import AccordionToggle from './components/accordion-toggle.js';
import Accordion from './components/accordion.js';
import ActionsButton from './components/actions-button.js';
import ActionsGroup from './components/actions-group.js';
import ActionsLabel from './components/actions-label.js';
import Actions from './components/actions.js';
import App from './components/app.js';
import AreaChart from './components/area-chart.js';
import Badge from './components/badge.js';
import BlockFooter from './components/block-footer.js';
import BlockHeader from './components/block-header.js';
import BlockTitle from './components/block-title.js';
import Block from './components/block.js';
import BreadcrumbsCollapsed from './components/breadcrumbs-collapsed.js';
import BreadcrumbsItem from './components/breadcrumbs-item.js';
import BreadcrumbsSeparator from './components/breadcrumbs-separator.js';
import Breadcrumbs from './components/breadcrumbs.js';
import Button from './components/button.js';
import CardContent from './components/card-content.js';
import CardFooter from './components/card-footer.js';
import CardHeader from './components/card-header.js';
import Card from './components/card.js';
import Checkbox from './components/checkbox.js';
import Chip from './components/chip.js';
import FabBackdrop from './components/fab-backdrop.js';
import FabButton from './components/fab-button.js';
import FabButtons from './components/fab-buttons.js';
import Fab from './components/fab.js';
import Gauge from './components/gauge.js';
import Icon from './components/icon.js';
import Input from './components/input.js';
import Link from './components/link.js';
import ListButton from './components/list-button.js';
import ListGroup from './components/list-group.js';
import ListIndex from './components/list-index.js';
import ListInput from './components/list-input.js';
import ListItem from './components/list-item.js';
import List from './components/list.js';
import LoginScreenTitle from './components/login-screen-title.js';
import LoginScreen from './components/login-screen.js';
import Message from './components/message.js';
import MessagebarAttachment from './components/messagebar-attachment.js';
import MessagebarAttachments from './components/messagebar-attachments.js';
import MessagebarSheetImage from './components/messagebar-sheet-image.js';
import MessagebarSheetItem from './components/messagebar-sheet-item.js';
import MessagebarSheet from './components/messagebar-sheet.js';
import Messagebar from './components/messagebar.js';
import MessagesTitle from './components/messages-title.js';
import Messages from './components/messages.js';
import NavLeft from './components/nav-left.js';
import NavRight from './components/nav-right.js';
import NavTitleLarge from './components/nav-title-large.js';
import NavTitle from './components/nav-title.js';
import Navbar from './components/navbar.js';
import PageContent from './components/page-content.js';
import Page from './components/page.js';
import Panel from './components/panel.js';
import PhotoBrowser from './components/photo-browser.js';
import PieChart from './components/pie-chart.js';
import Popover from './components/popover.js';
import Popup from './components/popup.js';
import Preloader from './components/preloader.js';
import Progressbar from './components/progressbar.js';
import Radio from './components/radio.js';
import Range from './components/range.js';
import RoutableModals from './components/routable-modals.js';
import RouterContextProvider from './components/router-context-provider.js';
import Searchbar from './components/searchbar.js';
import Segmented from './components/segmented.js';
import Sheet from './components/sheet.js';
import SkeletonAvatar from './components/skeleton-avatar.js';
import SkeletonBlock from './components/skeleton-block.js';
import SkeletonImage from './components/skeleton-image.js';
import SkeletonText from './components/skeleton-text.js';
import Stepper from './components/stepper.js';
import Subnavbar from './components/subnavbar.js';
import SwipeoutActions from './components/swipeout-actions.js';
import SwipeoutButton from './components/swipeout-button.js';
import Tab from './components/tab.js';
import Tabs from './components/tabs.js';
import TextEditor from './components/text-editor.js';
import Toggle from './components/toggle.js';
import Toolbar from './components/toolbar.js';
import TreeviewItem from './components/treeview-item.js';
import Treeview from './components/treeview.js';
import UseIcon from './components/use-icon.js';
import View from './components/view.js';
import Views from './components/views.js';

export interface Framework7Theme {
  ios: boolean;
  md: boolean;
}

/** Object with boolean properties with information about currently used theme (`ios` or `md`) */
declare const theme: Framework7Theme;

/** Main Framework7's initialized instance. It allows you to use any of Framework7 APIs */
declare const f7: Framework7;

/** Callback function that will be executed when Framework7 fully intialized. Useful to use in components when you need to access Framework7 API and to be sure it is ready. So it is safe to put all Framework7 related logic into this callback. As an argument it receives initialized Framework7 instance */
declare const f7ready: (callback: (f7: Framework7) => void) => void;

interface useStore {
  (store: Store, getter: string, callback?: (v: any) => void): any;
  (getter: string, callback?: (v: any) => void): any;
}

declare const useStore: useStore;

declare const Framework7Svelte: Framework7Plugin;

interface app {
  theme: Framework7Theme;
  f7: Framework7;
}

declare const app: app;

export { AccordionContent, AccordionItem, AccordionToggle, Accordion, ActionsButton, ActionsGroup, ActionsLabel, Actions, App, AreaChart, Badge, BlockFooter, BlockHeader, BlockTitle, Block, BreadcrumbsCollapsed, BreadcrumbsItem, BreadcrumbsSeparator, Breadcrumbs, Button, CardContent, CardFooter, CardHeader, Card, Checkbox, Chip, FabBackdrop, FabButton, FabButtons, Fab, Gauge, Icon, Input, Link, ListButton, ListGroup, ListIndex, ListInput, ListItem, List, LoginScreenTitle, LoginScreen, Message, MessagebarAttachment, MessagebarAttachments, MessagebarSheetImage, MessagebarSheetItem, MessagebarSheet, Messagebar, MessagesTitle, Messages, NavLeft, NavRight, NavTitleLarge, NavTitle, Navbar, PageContent, Page, Panel, PhotoBrowser, PieChart, Popover, Popup, Preloader, Progressbar, Radio, Range, RoutableModals, RouterContextProvider, Searchbar, Segmented, Sheet, SkeletonAvatar, SkeletonBlock, SkeletonImage, SkeletonText, Stepper, Subnavbar, SwipeoutActions, SwipeoutButton, Tab, Tabs, TextEditor, Toggle, Toolbar, TreeviewItem, Treeview, UseIcon, View, Views }
export { f7, f7ready, theme, useStore, app };
export default Framework7Svelte;