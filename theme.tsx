import { buildLegacyTheme } from "sanity";
const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--my-blue": "#628395",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-white"],
  "--component-text-color": props["--my-black"],

  /* Brand */
  "--brand-primary": props["--my-blue"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--my-blue"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--my-blue"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--my-blue"],
});

// const props = {
//   "--sm-white": "#FAFAFA",
//   "--sm-black": "#2C302E",
//   "--sm-blue": "#628395",
//   "--sm-green": "#4B7F52",
//   "--sm-red": "#A5243D",
//   "--sm-yellow": "#E3B505",
// };

// export const myTheme = buildLegacyTheme({
//   /* Base Theme Colours*/
//   "--black": props["--sm-black"],
//   "--white": props["--sm-white"],

//   "--gray": props["--sm-black"],
//   "--gray-base": props["--sm-black"],

//   "--component-bg": props["--sm-black"],
//   "--component-text-color": props["--sm-white"],

//   "--brand-primary": props["--sm-blue"],

//   //Default button
//   "--default-button-color": "#666",
//   "--default-button-primary-color": props["--sm-blue"],
//   "--default-button-success-color": props["--sm-green"],
//   "--default-button-danger-color": props["--sm-red"],
//   "--default-button-warning-color": props["--sm-yellow"],

//   //State
//   "--state-info-color": props["--sm-blue"],
//   "--state-success-color": props["--sm-green"],
//   "--state-warning-color": props["--sm-yellow"],
//   "--state-danger-color": props["--sm-red"],

//   //Navbar
//   "--main-navigation-color": props["--sm-white"],
//   "--main-navigation-color--inverted": props["--sm-black"],

//   "--focus-color": props["--sm-blue"],
// });
