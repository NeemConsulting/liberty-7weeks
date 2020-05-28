import { useState } from 'react';

const useDarkMode = themeObject => {
  const temp = themeObject();
  const [theme, setTheme] = useState(temp);
  const {
    palette: { type },
  } = temp;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light' ? 'dark' : 'light',
      },
    };
    setTheme(updatedTheme);

    window.localStorage.setItem(
      'userPrefferedDarkMode',
      updatedTheme.palette.type === 'dark' ? 'true' : 'false'
    );
  };

  return [theme, toggleDarkMode];
};

export default useDarkMode;
