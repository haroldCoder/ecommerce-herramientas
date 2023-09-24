import { useState } from 'react'
import 'bootswatch/dist/quartz/bootstrap.min.css'
import Navegador from './components/Navegador'
import products from './products.json'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navegador />
      <div className='d-flex' style={{flexWrap: "wrap"}}>
        {
          products.map((e)=>(
            <div class="card m-3 p-2" style={{"width": "22rem"}}>
              <img src="https://imgs.search.brave.com/BrESYNftQY6CNQ0Inw2Vdz8VvDCV50HEQfGxM-zg_Ao/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA0/NTg2NTIzMC9waG90/by9jb2xsZWN0aW9u/LW9mLWxpdHRsZS10/aW55LW9iamVjdHMt/a25vbGxpbmcuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPThj/YS1MTEVHaU1fTDAz/VHhRamE2ZkpxUGFy/cWpmRklqS0hIZkhk/WjdLM2c9" class="card-img-top" alt={e.name} />
              <div class="card-body">
                <h5 class="card-title">{e.name}</h5>
                <p class="card-text">{e.description}</p>
                <a href="#" class="btn btn-primary">Buy</a>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
