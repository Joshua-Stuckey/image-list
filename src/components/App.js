import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './ImageList';

//import CoolComponent from './CoolComponent';
//import TextBox from "./TextBox";
// async syntax put in front of function name
// await in front of the axios call




class App extends React.Component
{

state = {images: [] }



    onSearchSubmit = async (entry) => {
    const response = await axios.get(`https://pixabay.com/api/videos/?key=14584526-52d8f222d05edc26ba7493c41&q=${entry}&image_type=photo`);
    this.setState({images:response.data.hits})

}


    render()
    {
      return (
        <div className='ui container' style={{marginTop: '30px'}} >
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
        </div>)

 }

}

export default App;

