import React from 'react';


function App() {
  return (
    <div>
            This Page React my name
      <button onClick={() => {
        console.log('print my button');
      }}>
                Test Press
      </button>
    </div>
  );
}

export default {
  component: App,
};
