import Footer from "./component/Footer"
import Header from "./component/Header"
import Main from "./component/Main"
import Sidebar from "./component/Sidebar"

function App() {

  return (
    <>
      <Header />
      <div className="w-full flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="w-full sm:w-1/6 hidden sm:block">
          <Sidebar />
        </div>
        {/* Main */}
        <div className="w-full sm:w-5/6">
          <Main />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App
