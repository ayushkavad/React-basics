// import { Component } from "react";
import "./card.styles.scss";

const Card = (props) => {
  const { id, name, email } = props.monster;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.monster;

//     return (
//       <div className="card-container">
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={`monster ${name}`}
//         />
//         <h1>{name}</h1>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
