
    const heading=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement('h1',{},"prabhat1"),React.createElement('h2',{},"prabhat2")] ),


    React.createElement("div",{id:"child2"},[React.createElement('h1',{},"prabhat3"),React.createElement('h2',{},"prabhat4")])])
  
  
    console.log(typeof(heading));
    const root= ReactDOM.createRoot(document.querySelector('.root'));
  
    root.render(heading);
  