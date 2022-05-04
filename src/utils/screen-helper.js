// Screen Helper
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

import { DESIGN } from './constants';

// Модуль экранный помощник
const ScreenHelper = (() => {
  /* eslint-disable no-unused-vars */
  const NAME = 'ScreenHelper';

  const TABLET = DESIGN.BREAKPOINTS.tablet;
  const DESKTOP = DESIGN.BREAKPOINTS.desktop;
  const MIDDLE = DESIGN.BREAKPOINTS.middle;
  const LARGE = DESIGN.BREAKPOINTS.large;
  const SUPER = DESIGN.BREAKPOINTS.super;

  const isMobile = () => {
    return window.matchMedia(`(max-width: ${TABLET - 1}px)`).matches;
  };

  const isTablet = () => {
    return window.matchMedia(
      `(min-width: ${TABLET}px) and (max-width: ${DESKTOP - 1}px)`,
    ).matches;
  };

  const isDesktop = () => {
    return window.matchMedia(`(min-width: ${DESKTOP}px)`).matches;
  };

  const isDesktopSmall = () => {
    return window.matchMedia(
      `(min-width: ${DESKTOP}px) and (max-width: ${MIDDLE - 1}px)`,
    ).matches;
  };

  const isDesktopMiddle = () => {
    return window.matchMedia(
      `(min-width: ${MIDDLE}px) and (max-width: ${LARGE - 1}px)`,
    ).matches;
  };

  const isDesktopLarge = () => {
    return window.matchMedia(`(min-width: ${LARGE}px)`).matches;
  };

  const isSuper = () => {
    return window.matchMedia(`(min-width: ${SUPER}px)`).matches;
  };

  const getOrientation = () => {
    if (window.matchMedia('(orientation: portrait)').matches) {
      return 'portrait';
    }
    return 'landscape';
  };

  const getPixelRatio = () => {
    // eslint-disable-next-line prettier/prettier
    return (
      window.devicePixelRatio ||
      window.screen.deviceXDPI / window.screen.logicalXDPI
    );
  };

  const getScrollbarWidth = () => {
    const { body } = document;
    body.style.overflow = 'scroll';
    const bw1 = body.clientWidth;
    body.style.overflow = 'hidden';
    const bw2 = body.clientWidth;
    body.style.overflow = '';
    return bw2 - bw1;
  };

  return {
    isMobile,
    isTablet,
    isDesktop,
    isDesktopSmall,
    isDesktopMiddle,
    isDesktopLarge,
    isSuper,
    getOrientation,
    getPixelRatio,
    getScrollbarWidth,
  };
})();

export default ScreenHelper;
