import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'
import './App.css'

// --> mapping the journal travel data
const entries = data.map((entry) => {
  return (
    <Entry
      key={entry.id}
      img={entry.img}
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      dates={entry.dates}
      text={entry.text}
    />
  )
})

function App() {

  return (
    <>
      <Header />
      <main className='w-full max-w-7xl mx-auto flex flex-col justify-center items-center gap-4 pb-20 p-4 xl:p-0'>
        { entries }
      </main>
    </>
  )
}

export default App
