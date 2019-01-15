import history from '@/context/history';

export const loadTrackScript = () => {
  const _hmt = window._hmt || [];
  window._hmt = _hmt;
  try {
    const hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?cc26bbe2545efd418d2a6d727e7e294f';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
  } catch (error) {
    console.error('load tracking error', error);
  }
  history.listen(({ pathname }) => {
    _hmt.push(['_trackPageview', pathname]);
  });
};
