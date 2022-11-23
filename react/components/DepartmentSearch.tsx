import React, {useEffect, useState} from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDepartmentGroup.gql'

// import { SearchBar } from 'vtex.store-components'
import DepartmentGroup from './DepartmentGroup'

const DepartmentSearch = () => {
  const {data, loading, error} = useQuery(QUERY_VALUE)
  const [departments, setDepartments] = useState()

  console.log({departments})
  console.log("Datos de mi query::::",{data, loading, error});

  useEffect(()=>{
    setDepartments(data?.categories)
  }, data)


  return (
    loading
     ? <div>Cargando...</div>
     :
     <>
      <DepartmentGroup departments={departments}/>
     </>
  )
}

export default DepartmentSearch
