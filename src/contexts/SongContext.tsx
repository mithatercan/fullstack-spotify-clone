import { createContext, useState } from 'react';

export const SongContext = createContext(null);

export const SongsContextProvider = ({ children }) => {
  const [activeSongs, setActiveSongs] = useState([]);
  const [activeSong, setActiveSong] = useState(null);

  return (
    <SongContext.Provider
      value={{
        activeSongs,
        setActiveSongs,
        activeSong,
        setActiveSong,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};
