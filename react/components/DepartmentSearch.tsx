import React, {useEffect, useState} from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDepartmentGroup.gql'

import { SearchBar } from 'vtex.store-components'
import DepartmentGroup from './DepartmentGroup'

const DepartmentSearch = () => {
  const {data, loading, error} = useQuery(QUERY_VALUE)
  const [departments, setDepartments] = useState()
  const [slug, setSlug] = useState<string | null>('')

  console.log({departments})
  console.log("Datos de mi query::::",{data, loading, error});
  console.log("El slug seleccionado es |>|>|>", slug)

  useEffect(()=>{
    setDepartments(data?.categories)
  }, data)


  return (
    loading
     ? <div>Cargando...</div>
     :
     <>
      <DepartmentGroup departments={departments} handleSetSlug={setSlug}/>
     <SearchBar
      customSearchPageUrl={slug}
      placeHolder = "Busca por departamentos"
      displayMode = "search-and-clear-button"
     />
     </>
  )
}

export default DepartmentSearch
