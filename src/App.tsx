// import { Component } from "react";
import { useState, useEffect, ChangeEvent } from "react";
import SearchBox from "./component/search-box/search-box.component";
import CardItem from "./component/card-item/card-item.component";
import { getData } from "./utils/data.utils";
import "./App.scss";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monster, setMonster] = useState<Monster[]>([]);
  const [filteredMonster, setFilterMonster] = useState(monster);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const filterSearchField = event.target.value.toLowerCase();
    setSearchField(filterSearchField);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonster(users);
    };
    fetchUser();
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((user) => setMonster(user));
  }, []);

  useEffect(() => {
    const newFilterMonster = monster.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilterMonster(newFilterMonster);
  }, [monster, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className={"monster"}
        onChangeHandler={onSearchChange}
        placeholder="search-monster"
      />
      <CardItem monster={filteredMonster} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     console.log("constructor");
//     super();

//     this.state = {
//       monster: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((user) => {
//         this.setState(() => {
//           return { monster: user };
//         });
//       });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     console.log("render");

//     const { monster, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filterMonster = monster.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           className={"monster"}
//           onChangeHandler={onSearchChange}
//           placeholder="search-monster"
//         />
//         <CardItem monster={filterMonster} />
//       </div>
//     );
//   }
// }

export default App;
