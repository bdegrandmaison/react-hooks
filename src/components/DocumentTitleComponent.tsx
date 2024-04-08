import { FormEvent, useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

export const DocumentTitleComponent = () => {
  const [title, setTitle] = useState(document.title);
  const [newTitle, setNewTitle] = useState(document.title);

  useDocumentTitle(newTitle);

  const handleSubmitTitle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewTitle(title);
  };

  return (
    <section>
      <h2>Hook 1: useDocumentTitle</h2>
      <h3>Update Document Title</h3>
      <p>
        This hook allows you to change the document title. To use it, simply enter your title in the
        input below and press on the button to confirm
      </p>
      <form onSubmit={handleSubmitTitle}>
        <input
          type="text"
          name="title"
          placeholder="Enter new title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Update Title</button>
      </form>
    </section>
  );
};
