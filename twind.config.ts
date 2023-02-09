import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        oysterpink: {
          // light colors are reversed!!
          '50': '#faf7f7',
          '100': '#f6efef',
          '200': '#eedfdf',
          '300': '#e6cfcf',
          '400': '#debfbf',
          DEFAULT: '#d6b0b0',
          '500': '#d6b0b0',
          '600': '#ab8c8c',
          '700': '#806969',
          '800': '#554646',
          '900': '#2a2323'
        },
        conifer: {
          '50': '#f4fced',
          '100': '#eaf9dc',
          '200': '#d6f4b9',
          '300': '#c1ef96',
          '400': '#adea72',
          DEFAULT: '#99e550',
          '500': '#99e550',
          '600': '#7ab740',
          '700': '#5b8930',
          '800': '#3d5b20',
          '900': '#1e2d10'
        },
        mcopper: {
          '50': '#efebea',
          '100': '#e0d7d5',
          '200': '#c1afac',
          '300': '#a38883',
          '400': '#84605a',
          DEFAULT: '#663931',
          '500': '#663931',
          '600': '#512d27',
          '700': '#3d221d',
          '800': '#281613',
          '900': '#140b09'
        }
      }
    }
  }
} as Options;
