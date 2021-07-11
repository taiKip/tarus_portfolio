
import classes from './App.module.css';
import Contact from './components/Contact/Contact';
import AboutPage from './components/HomePage/AboutPage';
import HomePage from './components/HomePage/HomePage';
import Main from './components/Main'

import PageContextProvider from './contexts/PageContextProvider';
import { useOnScreen } from './hooks/useOnScreen';
function App() {

  const {setRef,visible} = useOnScreen({threshold:0.25})
  return (
    <div className={classes.App}>
    
      <HomePage />
      <AboutPage ref={setRef} inView={visible}/>
      <PageContextProvider>
        <Main />
      </PageContextProvider>
      <Contact/>
    </div>
  );
}

export default App;
