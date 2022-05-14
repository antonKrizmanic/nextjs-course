import classes from './comment-list.module.css';

function CommentList(props) {
  return (
    <ul className={classes.comments}>
      {props.items.map(item => <li key={item._id}>
        <p>{item.name}</p>
        <div>
          By <address>{item.name}</address>
        </div>
      </li>)}
    </ul>
  );
}

export default CommentList;
