import {
  Add,
  Chat,
  FavoriteRounded,
  Notifications,
  Person,
  QuestionMark,
  Search,
} from '@mui/icons-material'
import { useEffect } from 'react'
import './App.css'
import MenuContainer from './components/MenuContainer'
import Pin from './components/Pin'
import Data from './components/Data'
import m from './components/Pinterest.png'

function App() {
  useEffect(() => {
    const allIcon = document.querySelectorAll('.iconBorder')

    function setMenuActive() {
      allIcon.forEach((n) => n.classList.remove('active'))
      this.classList.add('active')
    }

    allIcon.forEach((n) => n.addEventListener('click', setMenuActive))
  }, [])
  return (
    <div className='App'>
      <div className='menuContainer'>
        <img src={m} alt='' className='logo' />

        <div className='subMenu'>
          <div>
            <MenuContainer icon={<Person />} />
            <MenuContainer icon={<Notifications />} />
            <MenuContainer icon={<Chat />} />
          </div>
          <div>
            <MenuContainer icon={<FavoriteRounded />} />
          </div>
          <div>
            <MenuContainer icon={<QuestionMark />} />
            <MenuContainer icon={<Add />} />
          </div>
        </div>
      </div>

      <main>
        <div className='searchBar'>
          <input type='text' placeholder='Search' />
          <div className='search'>
            <Search />
          </div>
        </div>

        <div className='mainContainer'>
          {Data &&
            Data.map((data) => (
              <Pin
                key={data.id}
                pinSize={data.size}
                img={data.img}
                name={data.name}
                link={data.link}
              />
            ))}
        </div>
      </main>
    </div>
  )
}

export default App
