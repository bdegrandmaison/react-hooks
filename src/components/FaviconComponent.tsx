import * as React from 'react';
import useFavicon from '../hooks/useFavicon';

const faviconMap = {
  youtube: 'https://www.youtube.com/s/desktop/a669eefe/img/favicon_32x32.png',
  github: 'https://github.githubassets.com/favicons/favicon-dark.png',
  brave: 'https://cdn.search.brave.com/serp/v2/_app/immutable/assets/favicon-32x32.B2iBzfXZ.png',
  react: '/favicon.ico',
};

export const FaviconComponent = () => {
  const [id, setId] = React.useState<'youtube' | 'github' | 'brave' | 'react'>('react');

  useFavicon(faviconMap[id]);

  return (
    <section>
      <h1>useFavicon</h1>
      <button title="Set the favicon to Youtube's logo" onClick={() => setId('youtube')}>
        Youtube
      </button>
      <button title="Set the favicon to Github's logo" onClick={() => setId('github')}>
        Github
      </button>
      <button title="Set the favicon to Brave's logo" onClick={() => setId('brave')}>
        Brave
      </button>
      <button title="Set the favicon to React's logo" onClick={() => setId('react')}>
        React
      </button>
    </section>
  );
};
