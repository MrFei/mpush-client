import history from '@/context/history';

export const loadTrackScript = () => {
  window._hmt = window._hmt || [];
  try {
    const hm = document.createElement('script');
    hm.src = 'https://hm.baidu.com/hm.js?cc26bbe2545efd418d2a6d727e7e294f';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
    history.listen(({ pathname }) => {
      window._hmt.push(['_trackPageview', pathname]);
    });
  } catch (error) {
    console.error('load tracking error', error);
  }
};
