import usePreferredLanguage from '../hooks/usePreferredLanguage';

export const PreferredLanguageComponent = () => {
  const language = usePreferredLanguage();

  return (
    <section>
      <h2>Hook 4: usePreferredLanguage</h2>
      <h3>Knowing the navigator preferr ed language</h3>
      <p>
        This hook returns the value of the navigator preferred language. You can change your
        preferred language here - chrome://settings/languages
      </p>
      <h4>
        The correct date format for <pre>{language}</pre> is{' '}
        <time>{new Date(Date.now()).toLocaleDateString(language)}</time>
      </h4>
    </section>
  );
};
