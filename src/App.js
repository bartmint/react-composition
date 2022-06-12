import ChildrenComponent from "./ChildrenComponent";
import Kid from "./Kid";
import KidName from "./KidName";
import Wrapper from "./Wrapper";

function App() {

  const name = "Stefan";

  return (
    <>
      <Wrapper>
        <ChildrenComponent />
      </Wrapper>
      <Kid kidName={<KidName name={name} />} />
    </>
  );
}

export default App;
