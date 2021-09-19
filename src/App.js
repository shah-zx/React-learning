import logo from './logo.svg';
import './App.css';
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
function App() {
  return (
    <div className="App">
      {/*      <Greet name = "hamza" heroName = "Batman"/>  
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
      {/* <Welcome name = "Hamza" heroName="Superman"/>
      <Message />
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
      <MemoComp />
    </div>
  );
}

export default App;

// Functional components : takes properties ( a js function takes the props and returns the jsx code --> HTML code )
// As soon as we import the Greet Component we have to import it to our main App.js and use it as an html tag 
// Class components : They can also recieve input as props and retun html code 
// It can maintain some data private to that component 
