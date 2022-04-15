import React from 'react'
import MenuBtn from '../components/Cart/MenuBtn'
import SlideMenu from '../components/MobileMenu/Slidemenu'
import Backmenu from '../components/MobileMenu/Backmenu'
export default class App extends React.Component {
   state = { drawerOpen: false }
drawerToggleClickHandler = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }
backdropClickHandler = () => {
    this.setState({
      drawerOpen: false
    })
  }
  
   render(){
      let backdrop;
      if(this.state.drawerOpen){
        backdrop = <Backmenu close={this.backdropClickHandler}/>;
       }
      return(

         <div>
           < SlideMenu show={this.state.drawerOpen} />
           { backdrop }
           < MenuBtn toggle={this.drawerToggleClickHandler} />
         </div>
      )
    }
}