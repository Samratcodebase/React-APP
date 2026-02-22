import { useState } from "react";
const UseTheSate = () => {
  const [friends, setFriends] = useState(["Samrat", "Dishaa"]);

  const addFriends = () => {
    setFriends([...friends, "Bana", "Priya"]);
  };
  const RemoveFriends = () => {
    setFriends(
      friends.filter((f) => {
        if (f != "Priya") {
          return true;
        }
      }),
    );
  };

  const [movie, setMovie] = useState({
    movieName: "KGJ",
    rating: 7,
    price: 780,
  });

  const changeRating = () => {
    setMovie({...movie,rating:9});
  };
console.log(movie);

  return (
    <>
      <div>
        {friends.map((f) => {
          return <li>{f}</li>;
        })}
      </div>

      <button onClick={addFriends}>Add Love</button>
      <button onClick={RemoveFriends}>Remove Love</button>
      <div>
        <ul>
          <li>{movie.movieName}</li>
          <li>{movie.rating}</li>
          <li>{movie.price}</li>
        </ul>
      </div>
      <button onClick={changeRating}> Change the Rating</button>
    </>
  );
};

export default UseTheSate;
