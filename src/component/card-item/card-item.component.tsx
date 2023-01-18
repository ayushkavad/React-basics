// import { Component } from "react";
import Card from "../card/card.component";
import { Monster } from "../../App";
import "./card-item.styles.scss";

type CardItems = {
  monster: Monster[];
};

const CardItem = ({ monster }: CardItems) => {
  return (
    <div className="card-list">
      {monster.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

// class CardItem extends Component {
//   render() {
//     console.log(this.props);
//     const { monster } = this.props;

//     return (
//       <div className="card-list">
//         {monster.map((monster) => {
//           //   const { id, name, email } = monster;
//           return <Card monster={monster} key={monster.id} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardItem;
