import { createGlobalStyle } from 'styled-components';

/* eslint-disable max-len */
export default createGlobalStyle`
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    margin: 0;
    padding: 0;
  }
  ul, ol {
    list-style: none;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC", "WenQuanYi Micro Hei", sans-serif;
    font-size: 14px;
    color: #1a1a1a;
    background: #fff;
  }
`;
