import React, { useState } from 'react'
import { Input } from '@jludev/component-lib-react'

const App = () => {
  const [state, setState] = useState('')
  return (
    <div className='App'>
      <Input
        label='Name'
        type='text'
        value={state}
        event={(e) => setState(e.target.value)}
      />
    </div>
  )
}

export default App
