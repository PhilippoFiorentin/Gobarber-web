import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import AuthContext from './context/AuthContext';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Fulano' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
