import useDefault from '../hooks/useDefault';

export const DefaultComponent = () => {
  const initialState = { animal: 'Chat' };
  const defaultState = { animal: 'Chien' };

  const [animal, setAnimal] = useDefault(initialState, defaultState);

  return (
    <section>
      <h2>Hook 2: useDefault</h2>
      <h3>Setting a default value to the state</h3>
      <p>
        This hook doesn't allow the state to be undefined or null but instead sets it to a default
        value
      </p>
      <button
        title="mets la valeur à 'Chat'"
        onClick={() => {
          setAnimal({ animal: 'Chat' });
        }}
      >
        Chat
      </button>
      <button
        title="mets la valeur à 'Oiseau'"
        onClick={() => {
          setAnimal({ animal: 'Oiseau' });
        }}
      >
        Oiseau
      </button>
      <button
        title="mets la valeur à undefined"
        onClick={() => {
          setAnimal();
        }}
      >
        Undefined
      </button>
      <button
        title="mets la valeur à null"
        onClick={() => {
          setAnimal(null);
        }}
      >
        Null
      </button>
      <pre>
        <code>{JSON.stringify(animal)}</code>
      </pre>
    </section>
  );
};
