export const openURLNewTab = (url) => {
  const a = window.document.createElement('a');
  a.target = '_blank';
  a.href = url;
  a.click();
};
