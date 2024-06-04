import { useEffect, useRef, useState } from 'react'
import { toBraille } from './utils/toBraile'
import { Textarea } from '@nextui-org/react';
import { Input } from "@nextui-org/input";
import AppCss from './App.module.css'

function App() {
  const [textNormal, setTextNormal] = useState('')
  const [braille, setBraille] = useState('')
  const areaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const brailleText = toBraille(textNormal)
    setBraille(brailleText)
  }, [textNormal])

  return (
    <main className='flex flex-col items-center gap-4 min-h-full h-[100vh] w-[100vw] p-8'>
      <h1 className='text-2xl'>Traductor Braille</h1>
      <section className='flex flex-col w-1/3 gap-4'>
        <Input
          id="text"
          autoComplete='off'
          label="Texto"
          value={textNormal}
          onChange={e => setTextNormal(e.target.value)}
          placeholder="Digita algo"
          type='text'
          variant='faded'
        />
        <Textarea
          id="braille"
          label="Braille"
          value={braille}
          ref={areaRef}
          placeholder="Texto en Braille"
          classNames={{
            input: 'text-3xl'
          }}
          readOnly
        />
        <Textarea
          id="braille"
          value={braille}
          className={AppCss.mirrorContainer}
          classNames={{
            input: 'text-3xl'
          }}
          readOnly
        />
      </section>
    </main>
  )
}

export default App
