import useCopyToClipboard from '../hooks/useCopyToClipboard';

const randomHash = crypto.randomUUID();

export const CopyToClipboardComponent = () => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);

  return (
    <section>
      <h1>useCopyToClipboard</h1>
      <article>
        <label>Fake API Key</label>
        <div>
          <pre>
            <code>{randomHash}</code>
          </pre>
          <button
            disabled={hasCopiedText}
            className="link"
            onClick={() => copyToClipboard(randomHash)}
          >
            {hasCopiedText ? '✔️' : '✂️'}
          </button>
        </div>
      </article>
      {hasCopiedText && (
        <pre>
          <dialog open={hasCopiedText}>
            <h4>
              Copied{' '}
              <span role="img" aria-label="Celebrate Emoji">
                🎉
              </span>
            </h4>
            <textarea placeholder="Paste your copied text" />
          </dialog>
        </pre>
      )}
    </section>
  );
};
