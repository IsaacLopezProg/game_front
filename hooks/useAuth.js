import { useContext } from "react";
// LIGANDO EL CREATE_CONTEXT CON EL USE_CONTEXT
import AuthContext from "../context/AuthContext";

// EXPORTANDOLO DE MANERA GLOBAL
export default () => useContext(AuthContext);