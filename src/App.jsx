import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./component/AppLayout";
import HomePage from "./component/HomePage";
import ChiSiamo from "./component/ChiSiamo";
import PostsList from "./component/PostsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/ChiSiamo" element={<ChiSiamo />} />
          <Route path="/PostsList" element={<PostsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
