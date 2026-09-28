import Hobbies from './Hobbies.jsx';
import img from './assets/Hobbies.jpg';
import photo from './assets/hob.jpg'
import series from './assets/series.jpg'
function App(){
  return(
    <div className ="container">
   <Hobbies 
     image={img}
     hobbies=" Reading Books"
     des=" I love reading fiction and non-fiction books."
   />
   <Hobbies 
      image={photo}
      hobbies=" listening music"
      des=" I love to listen the music."
    />
    <Hobbies 
      image={series}
      hobbies=" watching series"
      des=" I love to watch series."
      />
   </div>
  );
}
export default App;
