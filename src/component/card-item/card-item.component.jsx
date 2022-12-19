import { Component } from "react";
import Card from "../card/card.component";
import "./card-item.styles.scss";

class CardItem extends Component {
  render() {
    console.log(this.props);
    const { monster } = this.props;

    return (
      <div className="card-list">
        {monster.map((monster) => {
          //   const { id, name, email } = monster;
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}

export default CardItem;
