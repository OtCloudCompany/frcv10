import { LISTABLE_COMPONENTS as FRC_LISTABLE_COMPONENTS } from './frc/lazy-listable-components';
/**
 * This list bundles all the listable components from all the enabled themes.
 * Listable components are components that use the @listableObjectComponent decorator
 *
 * Themes that aren't in use should not be imported here, so they don't take up unnecessary space in the main bundle.
 */
export const THEME_LISTABLE_COMPONENTS = [
  ...FRC_LISTABLE_COMPONENTS,
];
