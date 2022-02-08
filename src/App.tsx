import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/presentation/Home';
import { Questions } from './components/presentation/Questions';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/questions" component={Questions} />
      </BrowserRouter> 
    </Provider>
  );
}

export default App;
