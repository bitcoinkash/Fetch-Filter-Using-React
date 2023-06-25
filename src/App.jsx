
// import React, { useEffect, useState } from 'react';
// import './App.scss';
// import data from './Data.jsx';

// function App() {
//   const results = data.results;

//   return (
//     <div id="app">
//       <h1>List of users</h1>
//       <div className="container">
//         <div className="users row">
//           {results.map((result, index) => {
//             return (
//               <div key={index} className="col-2 user">
//                 <img src={result.picture.thumbnail} alt={`${result.name.title} ${result.name.first} ${result.name.last}`} />
//                 <h3>
//                   {result.name.title} {result.name.first} {result.name.last}
//                 </h3>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import './App.scss';
// import data from './Data.jsx';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const filteredUsers = data.filter((result) => {
    const fullName = `${result.name.title} ${result.name.first} ${result.name.last}`;
    return fullName.toLowerCase().includes(search.toLowerCase());
  });
 



  useEffect(() => {
    fetch('https://randomuser.me/api/?inc=name,picture&results=48')
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="app">
      <h1>List of users</h1>
      <div className="container">
      <input id="filter" 
             class="button form-control mb-3 form-control-lg" 
             placeholder="Type to filter..."
             value={search}
             onChange={handleSearch}
             />


        <div className="users row">
          {filteredUsers.map((result, index) => {
            return (
              <div key={index} className="col-2 user">
                <img src={result.picture.thumbnail} alt={`${result.name.title} ${result.name.first} ${result.name.last}`} />
                <h3>
                  {result.name.title} {result.name.first} {result.name.last}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
