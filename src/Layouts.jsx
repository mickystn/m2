import { Route, Routes } from 'react-router-dom'

import Layout from './Layout/Layout'

import Dashboard from './page/Dashboard'
import Form from './page/Form'

function Layouts() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/form" element={<Form />}/>
      </Routes>
    </Layout>
  )
}

export default Layouts