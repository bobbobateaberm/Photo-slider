import React from 'react'
import { useState } from 'react'



const BackPics = ({title}) => {
  const changePics = () => {
    if (title === "Sea") {
      const images = [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
        "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?cs=srgb&dl=pexels-kellie-churchman-371878-1001682.jpg&fm=jpg",
        "https://c02.purpledshub.com/uploads/sites/62/2025/03/Whats-the-difference-between-a-sea-and-an-ocean.jpg"
      ];

      const randomIndex = Math.floor(Math.random() * images.length);
      const selectedImage = images[randomIndex];

      document.body.style.background = `url('${selectedImage}')`;
      document.body.style.backgroundSize = 'cover';
    }


    else if (title === "Mountain"){
     const images = [
        "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
        "https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?cs=srgb&dl=pexels-sagui-andrea-200115-618833.jpg&fm=jpg",
        "https://media.cnn.com/api/v1/images/stellar/prod/170407220928-12-iconic-mountains-uluru-ayers-rock.jpg?q=w_2053,h_1154,x_0,y_0,c_fill"
      ];

      const randomIndex = Math.floor(Math.random() * images.length);
      const selectedImage = images[randomIndex];

      document.body.style.background = `url('${selectedImage}')`;
      document.body.style.backgroundSize = 'cover';
    }
     else if (title === "City"){
     const images = [
        "https://cdn.sanity.io/images/nxpteyfv/goguides/8c815f3830cc477e05e79c8b84e3258d25f602c5-1600x1066.jpg",
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
        "https://res.cloudinary.com/dtljonz0f/image/upload/shutterstock_329662223_ss_non-editorial_3_csm8lw"
      ];

      const randomIndex = Math.floor(Math.random() * images.length);
      const selectedImage = images[randomIndex];

      document.body.style.background = `url('${selectedImage}')`;
      document.body.style.backgroundSize = 'cover';
    }
    else if (title === "Galaxy"){
     const images = [
        "https://dylantaylor.org/wp-content/uploads/Dylan-Taylor-10-Ways-Space-Exploration-Benefits-Earth.jpg",
        "https://www.nhm.ac.uk/content/dam/nhm-www/discover/what-is-space/what-is-space-milky-way-full-width.jpg",
        "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/nebulae/emission/Hubble_LMC_N44C_potw2536a.jpg?w=2831&h=1735&fit=clip&crop=faces%2Cfocalpoint"
      ];

      const randomIndex = Math.floor(Math.random() * images.length);
      const selectedImage = images[randomIndex];

      document.body.style.background = `url('${selectedImage}')`;
      document.body.style.backgroundSize = 'cover';
    }
  }
    return(
    <div>
      <button onClick={changePics}>{title}</button>
    </div>
    )
}


const Home = () => {
   const Start = () => {
    const titles = ["Sea", "Mountain", "City", "Galaxy"];
    var randomTitles = [];

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * titles.length);
      if (!randomTitles.includes(titles[randomIndex])) {  
        randomTitles.push(titles[randomIndex]);
    }
      else {
        i--; 
      }
    }
      return [randomTitle1, randomTitle2, randomTitle3, randomTitle4] = randomTitles;
  }


  
    const titles = ["Sea", "Mountain", "City", "Galaxy"];
    var randomTitles = [];

    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * titles.length);
      if (!randomTitles.includes(titles[randomIndex])) {  
        randomTitles.push(titles[randomIndex]);
    }
      else {
        i--; 
      }
    }
      var [randomTitle1, randomTitle2, randomTitle3, randomTitle4] = randomTitles;
  
  return (
    
    <div className='home'>
        <div className='container'>
          <BackPics title = {randomTitle1}/>
          <BackPics title = {randomTitle2}/>
          <BackPics title = {randomTitle3}/>
          <BackPics title = {randomTitle4}/>
          <button onClick={Start}>Randomize</button>
      </div>
    </div>

  )
}

export default Home