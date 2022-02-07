import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { QuestionsPageContainer } from './components/Questions/QuestionsContainer';


const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/questions" component={QuestionsPageContainer} />
    </BrowserRouter>
  );
}

export default App;
