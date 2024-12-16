import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const ThemeContext = createContext();  //createcontext hook allows to store and share data globally

function ThemeProvider({ children }) {
  // Step 2: Set up the state and functions for the context
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Header() {
  // Step 4: Consume the context
  const { theme } = useContext(ThemeContext);  //a useContext hook allows this component to access the value from context hook
  return <h1 style={{ color: theme === 'light' ? '#000' : '#fff' }}>Current Theme: {theme}</h1>;
}

function ThemeToggleButton() {
  // Step 4: Consume the context
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

function App() {
  return (
    // Step 3: Wrap the component tree with the provider
    <ThemeProvider>
      <div style={{ backgroundColor: '#ccc', padding: '20px' }}>
        <Header />
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
