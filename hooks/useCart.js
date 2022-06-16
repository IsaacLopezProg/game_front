import { useContext } from "react";
// LIGANDO EL CREATE_CONTEXT CON EL USE_CONTEXT
import CartContext from "../context/CartContext";

// EXPORTANDOLO DE MANERA GLOBAL
export default () => useContext(CartContext);