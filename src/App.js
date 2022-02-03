import "./App.css";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




export default function App() {
  const initialmovieList = [
    {
      poster:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/01/26/891223-thalapthy-vijay-vijay-sethupathi-master-third-look.jpg",
      name: "Master",
      genre: "Action",
      rating: "7.8",
      summary:
        "John Durairaj, an alcoholic professor, gets enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
    },
    {
      poster:
        "https://igimages.gumlet.io/tamil/home/fe-ovotvkaagrvh.jpg?w=376&dpr=2.6",
      name: "Maanadu",
      genre: "Action",
      rating: "8.7",
      summary:
        "On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer become stuck in a time loop.",
    },
    {
      poster: "https://miro.medium.com/max/548/1*Y8vXN1mJeEHyXWJtFICjiQ.jpeg",
      name: "The Pursuit Of Happyness",
      genre: "Drama",
      rating: "8",
      summary:
        "Tired of Chris's professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son's custody to deal with.",
    },
    {
      poster:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/titanic_1997_original_film_art_dd01271c-371c-4562-b9c2-0d3203301a66_1200x.jpg?v=1638474841",
      name: "Titanic",
      genre: "Romance",
      rating: "7.8",
      summary:
        "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
    },
  ];
  // const names = ["Federer", "Novok", "Nadal", "Murray"];
  // const images = [
  //   "https://s.yimg.com/ny/api/res/1.2/33pzye.7e5Cgh7zuoMIGGA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2021-10/3d1fd080-2b61-11ec-b1bf-6d05e8e04691",
  //   "https://e0.365dm.com/22/01/2048x1152/skysports-novak-djokovic-australian-open_5640947.jpg",
  //   "https://s.yimg.com/ny/api/res/1.2/afX9FeSPt7h0FWnZm9t13A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/os/creatr-uploaded-images/2022-01/644cb620-7b28-11ec-afed-ad4e60a02e99",
  //   "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1337x465:1339x463)/origin-imgresizer.eurosport.com/2022/01/12/3285076-67218788-2560-1440.jpg"
  // ];
  // const data = [
  //   {
  //     profile:
  //       "https://s.yimg.com/ny/api/res/1.2/33pzye.7e5Cgh7zuoMIGGA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2021-10/3d1fd080-2b61-11ec-b1bf-6d05e8e04691",
  //     name: "Roger Federer"
  //   },
  //   {
  //     profile:
  //       "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyW98TfjXaP9dBLMVGvapmc0vVz-Kpw5ZVcbOKnOvEgfimFTF7",
  //     name: "Novok Djokovic"
  //   },
  //   {
  //     profile:
  //       "https://s.yimg.com/ny/api/res/1.2/afX9FeSPt7h0FWnZm9t13A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://s.yimg.com/os/creatr-uploaded-images/2022-01/644cb620-7b28-11ec-afed-ad4e60a02e99",
  //     name: "Rafal Nadal"
  //   },
  //   {
  //     profile:
  //       "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1337x465:1339x463)/origin-imgresizer.eurosport.com/2022/01/12/3285076-67218788-2560-1440.jpg",
  //     name: "Andy Murray"
  //   }
  // ];
  const [movieList, setMovieList] = useState(initialmovieList);

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div className="App">
      {/* <NewMovie /> */}
      <div className="add-movie-form">
        <TextField
          type="text"
          // placeholder="Name"
          onChange={(event) => setName(event.target.value)}
          label="Name"
          varient="filled"
          color="success"
          focused
        />
        <TextField
          type="text"
          // placeholder="Poster"
          onChange={(event) => setPoster(event.target.value)}
          label="Poster"
          varient="filled"
          color="success"
          focused

        />
        <TextField
          type="text"
          // placeholder="Rating"
          onChange={(event) => setRating(event.target.value)}
          label="Rating"
          varient="filled"
          color="success"
          focused
        />
        <TextField
          type="text"
          // placeholder="Summary"
          onChange={(event) => setSummary(event.target.value)}
          label="Summary"
          varient="filled"
          color="success"
          focused
        />

{/* <TextField label="Filled success" variant="filled" color="success" focused /> */}


        <Button
          onClick={() => {
            const nMovie = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            };
            setMovieList([...movieList, nMovie]);
          }}
          variant="contained" color="success"
        >
          Add movie
        </Button>
        {/* <Button variant="contained" color="success">
          Success
        </Button> */}

        {/* <button 
        onClick={() => {
          const new = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,

            
          };
          >
          Add movie
          </button> */}
      </div>
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movies
            poster={mv.poster}
            name={mv.name}
            genre={mv.genre}
            rating={mv.rating}
            summary={mv.summary}
          />
        ))}
      </div>

      {/* <ColorBox /> */}
    </div>
  );
} 
// function Message({name}) {
//   // console.log(props);
//   // const name = "Pravesh"
//   return (
//     <div className="welcome">
//       <h1>Hello, {name}</h1>
//     </div>
//   );
// }

// function Welcome(props) {
//   console.log(props);
//   return (
//     <div className="welcome">
//       <h1>Hello, {props.name}</h1>
//       <img className="picture" src={props.image} alt="profile"></img>
//     </div>
//   );
// }

function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="like-dislike">
      <Button variant="contained" size="small" onClick={() => setLike(like + 1)}>
        Like {like}
        </Button>
      <Button variant="contained" size="small" onClick={() => setDisLike(dislike + 1)}>
        Dislike {dislike}
        </Button>
        
      {/* <Button variant="contained" size="small">
          Small
        </Button> */}

    </div>
  );
}
// function Welcome({ name, image }) {
//   // console.log(props);
//   // const {name} = props;
//   // const pic =
//   //   "";
//   return (
//     <div className="welcome">
//       <img className="picture" src={image} alt="Profile"></img>
//       <h1>Hello, {name}!</h1>
//     </div>
//   );
// }

function Movies(props) {
  const[display, setDisplay] = useState(false);

  const styles = {
    color: props.rating > 8.5 ? "green" : "red",
  };
  const discription_style ={
    display: "block",
  }
  return (
    <div className="movie-container">
      <img className="poster" src={props.poster} alt="poster"></img>
      <h1 className="movie-name">{props.name}</h1>
      <div className="genre-imdb">
        <h3 classname="genre">Genre: {props.genre} </h3>
        <h4 style={styles} className="imdb">
          IMDB: {props.rating}
        </h4>
      </div>
      <div className="discription-button">
        <Button
        variant="outlined" 
        onClick={() => setDisplay(!display)}>
          Story plot
          </Button>
      </div>
      {display && (
      <h6 style={discription_style} className="summary">{props.summary}</h6>
      )}
      <Counter />
    </div>
  );
}

// function NewMovie(){
//   // const [color, setColor] = useState("grey");
//   // const styles = {
//   //   background: color,
//   // }
//   return(
//     <div className="input-box">
//       <input onChange={(event) => console.log(event.target.value)} placeholder="Movie poster"/>
//       <input onChange={(event) => console.log(event.target.value)} placeholder="Movie name"/>
//       <input onChange={(event) => console.log(event.target.value)} placeholder="Movie genre"/>
//       <input onChange={(event) => console.log(event.target.value)} placeholder="Movie rating"/>
//       <input onChange={(event) => console.log(event.target.value)} placeholder="movie summery"/>
//       <button>Add Movie</button>
//     </div>
//   )
// }

function ColorBox() {
  const [color, setColor] = useState("green");
  const styles = {
    backgroundColor: color,
  };
  // const colorList = ['red', 'orange', 'teal', 'brown'];

  const [colorList, setColorList] = useState([
    "red",
    "orange",
    "teal",
    "brown",
  ]);
  return (
    <div>
      {/* <input value={color} onChange={(event) => setColor(event.target.value)} style={styles} placeholder="Enter color"/> */}
      <input
        value={color}
        style={styles}
        placeholder="Enter color"
        onChange={(event) => setColor(event.target.value)}
      />
      <button onClick={() => setColorList(...colorList, color)}>
        Add Color
      </button>
      {/* <button>Add Color</button> */}
      {/* {colorList.map((clr) => <ColorBar color={clr}/> )} */}
      {colorList.map((clr) => (
        <ColorBar color={clr} />
      ))}
    </div>
  );
}

function ColorBar({ color }) {
  const styles = {
    marginTop: "10px",
    backgroundColor: color,
    height: "25px",
    width: "200px",
  };
  return <div style={styles}></div>;
}
