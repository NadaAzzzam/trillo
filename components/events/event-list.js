import { EventItem } from "./event-item";
import classes from "./event-list.module.scss";

export function EventList(props) {
  const { items } = props;
  return (
    <>
      <ul className={classes.event__list}>
        {items.map((e, index) => (
          <EventItem
            id={e.id}
            key={index}
            title={e.title}
            image={e.image}
            date={e.date}
            location={e.location}
          />
        ))}
      </ul>
    </>
  );
}
