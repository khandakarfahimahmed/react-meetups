import Card from "../ui/Card";
import classes from "./Meetupitem.module.css";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>TITLE</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>TO Favourites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
