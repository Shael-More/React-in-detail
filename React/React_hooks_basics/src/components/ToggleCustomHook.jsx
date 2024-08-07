import useToggle from "./useToggle";

function ToggleCustomHook() {

  const [show, toggle] = useToggle(true)
  return <div>
    <h4>Toggle Custom Hook</h4>
    <button type="button" className='btn' onClick={toggle}>Toggle</button>

    {show && <h4>Some stuff</h4>}
  </div>;
}

export default ToggleCustomHook;
