import React from 'react';
import SetUp1 from './useState/state-example'; 
import SetUp2 from './useState/errorExample';
import SetUp3 from './useState/state-example-counter'; 
import SetUp4 from './useState/state-example-Array';
import SetUp5 from './useState/state-example-object';
import UseEffectBasics from './useEffect/useEffectBasics';
import UseEffectCleanup from './useEffect/useEffectCleanup';
import MultipleReturns from './conditional-rendering/multiple-returns'
import UseEffectFetchData from './useEffect/useEffect-fetch-data';
import ShortCircuit from './conditional-rendering/short-circuit'
import ShowHideComponent from './conditional-rendering/show-hide';

function App() {
  return (
    <div className="App">
      {/* <UseEffectBasics /> */}
      {/* <UseEffectCleanup /> */}
      {/* <UseEffectFetchData /> */}
      {/* <MultipleReturns /> */}
      {/* <ShortCircuit /> */}
      <ShowHideComponent />
      {/* <SetUp2 /> */}
      {/* <SetUp5 /> */}
      {/* <SetUp4 /> */}
      {/* <SetUp1 /> */}
      {/* <SetUp3 /> */}
    </div>
  );
}

export default App;
