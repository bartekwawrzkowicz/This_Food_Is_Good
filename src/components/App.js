import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import '../styles/App.scss';
import Header from '../layouts/Header';
import Page from '../layouts/Page';
import Footer from '../layouts/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="main-header">
          <header className="header">
            {<Header />}
          </header>
        </div>
        <div className="main-page">
          <FadeIn delay={800} transitionDuration={2000}>
            <section className="page">
              {<Page />}
            </section>
          </FadeIn>
        </div>
        <footer className="main-footer">
          <Footer />
        </footer>
      </div>
    </Router >
  );
}

export default App;
