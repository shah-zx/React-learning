import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Swagat from './components/Swagat'
import Namaste from './components/Namaste'
import Hello from './components/Hello'
import Ayiye from './components/ayiye';
import Message from './components/Message'
import Thought from './components/Thought'
import Counter from './components/Counter'
import Functionalclick from './components/Functionalclick'
import Eventbind from './components/Eventbind'
import ParentComponent from './components/ParentComponent';
import CoditionalRendering from './components/CoditionalRendering';
import Namelist from './components/Namelist';
import Indexaskeyantipattern from './components/Indexaskeyantipattern'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import Fragments from './components/Fragments';
import Tables from './components/Tables';
import Columns from './components/Columns';
import Purecomponents from './components/Purecomponents'
import Parentcomp from './components/Parentcomp';
import MemoComp from './components/MemoComp'
import RefsDemo from './components/RefsDemo';
import Focusinput from './components/Focusinput'
import FRparentinput from './components/FRparentinput';
import Portaldemo from './components/Portaldemo'
import Practice1 from './components/Practice1';
import Practice2 from './components/Practice2';
import Clickcounter from './components/Clickcounter';
import HoverCount from './components/HoverCount'
import Componentone from './components/Componentone'
import ClickcounterTwo from './components/ClickcounterTwo';
import HovercounterTwo from './components/HovercounterTwo'
import Hovering from './components/Hovering';
import User from './components/User'
import Counterforcountandhover from './components/Counterforcountandhover';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";
import One from './practice_components/One';
import Alert_pr from './practice_components/Alert_pr';
import Footer from './components/Footer';
import Textarea from './practice_components/Textarea';
import NotesState from '../src/context/notes/NotesState'
import hooks from './practice_components/hooks';
function App() {
  // const [darkMode , setDarkMode] = useState(false)  // Wether dark mode is enabled or disabled //
  const [alert, setAlert] = useState(null);  // This is used for setting the state //
  const showAlert = (message, type) => {    // This is for showing the alert 

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {  // This will help us to fade out the text message after 2 seconds //
      setAlert(null);
    }, 2000);
  }

  return (
    <>
    <NotesState>
      <Router>

        <div className="App">
          {

            <Navbar title= "🍔" Abouttext="Home" cont="contact-us" hello="go" />
       // Passing the props //
      /*      <Greet name = "hamza" heroName = "Batman"/>  
      {/* <Greet name = ""  <Greet name = "shahnawaz" superName = "Superman"/>   
      <Greet name = "rahul" wonderName = "women"/>    
      
      {/*<Welcome />  
      <Swagat />
      <Namaste />
      <Hello />
      <Ayiye naam="shahnawaz" elder="Brother" />
      <Ayiye naam="hamza" younger="Brother" /> */}
          {/* <Greet name="shahnawaz" heroName="Batman" /> */}
          {/* <Greet /> */}
          {/* <Welcome name="Hamza" heroName="Superman" /> */}
          {/* <Message />
      <Thought />
      <Counter /> */}
          {/* <ParentComponent /> */}
          {/* <Functionalclick /> */}
          {/* <Eventbind /> */}
          {/* <CoditionalRendering /> */}
          {/* <Namelist />  */}
          {/* <Indexaskeyantipattern /> */}
          {/* <Stylesheet primary = {true} />
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Form /> */}
          {/* <Purecomponents /> */}
          {/* <Fragments /> */}
          {/* <Tables /> */}
          {/* <Parentcomp /> */}
          {/* <MemoComp /> */}
          {/* <Practice1 naam="romeo" herokanaam="billu" /> */}
          {/* <Hello />
      <RefsDemo />
      <Focusinput />
      <FRparentinput />
      <Portaldemo /> */}
          {/* <Practice2 /> */}
          {/* <Clickcounter /> */}
          {/* <HoverCount /> */}
          {/* <Componentone /> */}
          {/* <ClickcounterTwo /> */}
          {/* <HovercounterTwo /> */}
          {/* <Hovering /> */}
          {/* <User render={(isLoggedIn) => isLoggedIn ? 'Rendered' : 'Guest'} />   */}
          {/* <Counterforcountandhover render = {(count , incrementCount) => <ClickcounterTwo count = {count} incrementCount = {incrementCount}/> }/> */}
          {/* <Counterforcountandhover render = {(count , incrementCount) => <Hovering count = {count} incrementCount = {incrementCount}/> }/> */}
          <Alert alert={alert} />
          <div className="alert">
            <Alert_pr showAlert={showAlert} />
          </div>
          <div classname="greet">
            <Greet />
          </div>
          <div className="container my-3" >
            <Switch>
              <Route path="/about">
                <About />
                <hooks/>
                {/* <Ayiye/> */}
              </Route>
              <Route path="/">
                <TextForm showAlert={showAlert} heading="Enter the text to see :" />
                <div className="txt">
                  <Textarea st="checkbox"/>
                </div>
                <div className="red_card">
                  <One />
                  <div className="container">
                    <Footer heading = "Footer" link1 = "Facebook" ls = "Twitter" oneLink = "Instagram" secLink = "LinkedIn"/>
                  </div>
                </div>
              </Route>
            </Switch>
            {/* <About /> */}
          </div>
          {/* <About /> */}
        </div>
      </Router>
    </NotesState>
    </>
  );
}

export default App;  // This is the place where we have exported our App //

// Functional components : takes properties ( a js function takes the props and returns the jsx code --> HTML code )
// As soon as we import the Greet Component we have to import it to our main App.js and use it as an html tag 
// Class components : They can also recieve input as props and retun html code 
// It can maintain some data private to that component 
// The user component will make sure the user is logged in or not 

