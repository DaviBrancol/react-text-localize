import React, { useState, createContext, useEffect } from "react";

const TextLocalizeContext = createContext(null);

export function TextLocalizeProvider(props) {
  const [dictionary, setDictionary] = useState(null);

  async function mountProvider() {
    let language = await import("../../../src/lang/en-us.json");
    setDictionary(language);
  }

  useEffect(() => {
    mountProvider();
  }, []);

  function localize(id) {
    return dictionary ? dictionary[id] : null;
  }

  return (
    <TextLocalizeContext.Provider
      value={{
        localize,
      }}
      {...props}
    />
  );
}

export function useTextLocalize() {
  const context = React.useContext(TextLocalizeContext);
  if (context === undefined) {
    throw new Error(
      `useTextLocalize must be used within a TextLocalizeProvider`
    );
  }
  return context;
}
