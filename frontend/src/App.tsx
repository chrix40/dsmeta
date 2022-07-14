import NotificationButton from "./componentes/NotificationButton"
import Header from "./componentes/Header"
import SalesCard from "./componentes/SalesCard/index"

function App() {
  return(
    <>
    <Header />
    <main>
      <section id="sales">
        <div className="dsmeta-container">
          <SalesCard />
        </div>
      </section>
    </main>
    </>
  )
}

export default App
