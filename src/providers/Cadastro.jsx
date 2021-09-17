import React, { useState } from "react";

const CadastroContext = React.createContext({});

const CadastroProvider = ({ children }) => {
  const [cadastro, setCadastro] = useState(false);

  return (
    <CadastroContext.Provider
      value={{
        cadastro,
        setCadastro,
      }}
    >
      {children}
    </CadastroContext.Provider>
  );
};

export { CadastroContext, CadastroProvider };