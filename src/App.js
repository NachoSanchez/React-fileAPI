import React from 'react';
import StampContextProvider from './contexts/StampContext';
import UploadStamp from './components/UploadStamp';


function App() {
  return (
    <div className="App">
      <StampContextProvider>
        <UploadStamp />      
      </StampContextProvider>

    </div>
  );
}

export default App;
