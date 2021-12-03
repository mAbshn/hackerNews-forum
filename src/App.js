import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import PostContent from './components/postContent/PostContent';
import fetching from './store/fetching';

const App = observer(() => {

  useEffect(() => {
    fetching.loadingNew();
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          {fetching.posts.map((post) => 
            <Route path={"/" + post.id} render={()=><PostContent post={post}/>} />)}
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
})

export default App;
