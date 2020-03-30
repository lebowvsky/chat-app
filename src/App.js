import React from 'react';
import Contact from './components/Contact';



const characterOne = {
  avatar: "https://randomuser.me/api/portraits/men/53.jpg",
  name: "Kyle Ramirez",
  online: true
}

const characterTwo = {
  avatar: "https://randomuser.me/api/portraits/women/21.jpg",
  name: "Noelle Bishop",
  online: false
}

const characterThree = {
  avatar: "https://randomuser.me/api/portraits/women/78.jpg",
  name: "Joyce Craig",
  online: true
}

function App() {
  return (
    <div className="App">
      <Contact {...characterOne} />
      <Contact {...characterTwo} />
      <Contact {...characterThree} />
    </div>
  );
}



export default App;
