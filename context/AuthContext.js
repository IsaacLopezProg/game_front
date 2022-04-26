// CREACION DEL CONTEXT DE AUTH
import { createContext } from 'react';

// DEFIIENDO EL STATE O CONTENIDO DEL CONTEXT AUTH
const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null,
    setReloadUser: () => null,
})

// EXPORTANDO EL CONTEXT
export default AuthContext;