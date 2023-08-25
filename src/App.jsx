
import { useState } from 'react'
import './App.css'
import Swal from 'sweetalert2'

const numberArray = [1578, 4584, 8964, 1254, 3458, 8648, 2154, 8947, 7485, 7724]
const dniArray = ['37135160', '34839260']
const newNumber = () => {
  const mult = Math.floor(Math.random()*(numberArray.length))
  return mult
}

const personsArray = [
  {
    name: 'ROSSETTO IGNACIO',
    dni: '37135160',
    exp: '19072023-057'
  },
  {
    name: 'GARCÍA DÍAZ MATEO',
    dni: '34839260',
    exp: '19072023-063'
  },
]


function App() {
  const [number, setNumber] = useState(numberArray[newNumber()])
  const [dniInput, setdniInput] = useState(null)
  const [ctrlNumber, setctrlNumber] = useState(null)
  const handleClick = () => {
    const newNum = newNumber()
    setNumber(numberArray[newNum])
  }

  const validateClick = () => {
    return dniArray.includes(dniInput)
  }

  const handleBtnClick = () => {
    if(ctrlNumber != number) {
      return Swal.fire({
        text: 'NÚMERO DE CONTROL incorrecto.',
        confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
      })
    }
    if(validateClick()){
      const obj = personsArray.find((p)=> p?.dni == dniInput)
      return Swal.fire({
        icon: 'success',
        html: '<div> CERTIFICADO VÁLIDO</div>' + 
        `<strong>Nº de Expediente:<strong/> <span>${obj?.exp}</span> <br>`+
        '<strong>Tipo:<strong/> <span>Alumno Regular - Carrera / Curso</span> <br>'+
        `<strong>Nombre:<strong/> <span>${obj?.name}</span> <br>`+
        `<strong>Documento:<strong/> <span>DN ${obj?.dni}</span>`
        ,
    
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
      })
    }
    Swal.fire({
      icon: 'error',
      text: 'Error (E003) DATOS INCORRECTOS',
      confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
    })
  }

  return (
    <main className='main'>
      <div className='header'>
        <div className='header_img_container'>
          <img className='header_img' src="/logo.svg" alt="logo" />
        </div>
        <h3 className='header_title'>Validación UCC</h3>
      </div>
      <div></div>
      <div className='inputs_container'>
        <div className='inputs_container_2'>
          <label htmlFor="" className='input_label'>Ingrese número de documento del interesado</label>
          <input type="text" className='inputs' value={dniInput} onChange={(e)=> setdniInput(e.target.value)}/>
        </div>
      </div>
      <div className='inputs_container_3'>
        <div className='inputs_container_4'>
          <label className='input_label' htmlFor="">Ingrese número de control</label>
          <input type="text"  className='inputs_2' value={ctrlNumber} onChange={(e)=> setctrlNumber(e.target.value)}/>
        </div>
        <div className='validation_number_container'>
          <div className='button_2' onClick={handleClick}>
            {number}
          </div>
        </div>
      </div>
      <div className='inputs_container'>
        <div>
          <br />
        </div>
      </div>
      <div className='btn_container'>
        <div className='btn_container_2'>
          <button className='button' onClick={handleBtnClick}>
            VALIDAR
          </button>
        </div>
      </div>
        
    </main>
  )
}

export default App
