import React, { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import OrnekUseEffect from "./components/OrnekUseEffect";

function App() {
  const [goster, setGoster] = useState(true)

  return (
    <div className="container text-center mt-4">
      {/* <LifeCycleMethods /> */}

      <button className="btn btn-danger" onClick={() => setGoster(!goster)}>GOSTER</button>


      {/* {goster ? <OrnekUseEffect /> :""} */}
      {/* yukaridaki 1.yol--> goster true iken OrnekUseEffect componenti görünsün, false durumunda hicbirsey yapmasin */}

      {goster && <OrnekUseEffect />}
      {/* ikinci yol--> && iki parametrede dogruyken kullanilir, || soldaki dogruysa ya da sagdaki dogruysa, hangisi true ise onu al */}


    </div>
  );
}

export default App;
