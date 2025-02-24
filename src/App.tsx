import { Button } from "../lib/Button";
import { BUTTON_VARIANT_TYPE } from "../lib/Button/button-config";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-velvet-plum-500">
        <Button variant={BUTTON_VARIANT_TYPE.PRIMARY_VELVET}>
          Test Button
        </Button>
      </div>
    </>
  );
}

export default App;
