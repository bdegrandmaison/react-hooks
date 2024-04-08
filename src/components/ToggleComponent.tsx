import useToggle from '../hooks/useToggle';

export const ToggleComponent = () => {
  const [on, toggle] = useToggle(true);

  return (
    <section>
      <h2>Hook 3: useToggle</h2>
      <h3>Setting a value to a boolean or toggling the boolean</h3>
      <p>
        This hook needs an initial value that is a boolean. After that, if we give it a boolean
        value, the value will be what we just gave it. otherwise, if the value is not a boolean, it
        will toggle the boolean value.
      </p>
      <button
        title="mets la valeur à 'true'"
        onClick={() => {
          toggle(true);
        }}
      >
        On (valeur à true)
      </button>
      <button
        title="mets la valeur à 'false'"
        onClick={() => {
          toggle(false);
        }}
      >
        Off (valeur à false)
      </button>
      <button
        title="mets la valeur à undefined"
        onClick={() => {
          toggle();
        }}
      >
        Toggle (valeur undefined)
      </button>
      <button
        title="mets la valeur à null"
        onClick={() => {
          toggle(null);
        }}
      >
        Toggle (valeur non booléenne)
      </button>
      <pre>
        <label className="switch">
          <input type="checkbox" checked={on} />
          <span className="slider round" />
        </label>
      </pre>
    </section>
  );
};
