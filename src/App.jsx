import { Component } from "react";
import SearchBox from "./component/search-box/search-box.component";
import CardItem from "./component/card-item/card-item.component";
import "./App.scss";

class App extends Component {
  constructor() {
    console.log("constructor");
    super();

    this.state = {
      monster: [],
      searchField: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => {
        this.setState(() => {
          return { monster: user };
        });
      });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render");

    const { monster, searchField } = this.state;
    const { onSearchChange } = this;

    const filterMonster = monster.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          className={"monster"}
          onChangeHandler={onSearchChange}
          placeholder="search-monster"
        />
        <CardItem monster={filterMonster} />
      </div>
    );
  }
}

export default App;
