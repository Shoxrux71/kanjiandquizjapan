import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


/** ================import components */
import Main from "./Main";
import Quiz from "./Quiz"
import Result from "./Result";
import Mem from "./Mem";
/** ================import components */

// react router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <Quiz></Quiz>
  },
  {
    path: '/result',
    element: <Result></Result>
  },
  {
    path: '/mem',
    element: <Mem></Mem>
  }
])
// react router


function App() {
  return (
  <>
  <RouterProvider router={router}/>
  </>
  );
}

export default App;

// https://youtu.be/BNN4o4gnSF4?si=f6CX0Urixi3OotBk
