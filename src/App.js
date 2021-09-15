import React,{Suspense} from 'react'
import './App.css';
import Home from './pages/home.page'
const AosInjector = React.lazy(() => import('./component/aos.injector'));

function App() {
  
  const renderInjector = () =>{
    if(window.screen.availWidth > 600 ){
      console.log('in wrong condition....')
      return <AosInjector/>
    }
    return null;
  }



  return (
    <div className="App">
        <Home/>
        <Suspense fallback={<div></div>}>
        {renderInjector()}
      </Suspense>

       
    </div>
  );
}

export default App;
