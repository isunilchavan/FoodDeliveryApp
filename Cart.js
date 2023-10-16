
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Card = (props) => {
  const cartItems = (
    <ul>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 10,
          price: 13.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span> 56.65</span>
      </div>
      <div className={classes.action}>
        <button className={classes['button--alt']}> Close</button>
        <button className={classes.button}>Order</button>
      </div>
      </Modal>
  );
};
export default Card;
