import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom"

import Dashboard from './app'


declare const module
module?.hot?.accept()

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = React.memo(()=> {
  // since it's spa, on page changes it will scrop to top of page
  const scrollToTop = () => window.scrollTo(0,0);

  return (
    <BrowserRouter onChange={scrollToTop} onEnter={scrollToTop} onUpdate={scrollToTop}>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
})


ReactDOM.render(
  <App />,
  document.getElementById("app")
)
