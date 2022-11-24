import React from "react";

type Props = {
  departments: Category[] | undefined
  handleSetSlug: React.Dispatch<React.SetStateAction<string | null>>
}

type Category = {
  id: number,
  name: string
  slug: string
}

const DepartmentGroup:React.FC<Props> = ({departments, handleSetSlug}) => {
  console.log('Mi grupo de departamentos es:::---:::', departments);

  const departmentOptions: JSX.Element[] | undefined = departments?.map((department: Category) => (
    <option key={department.id} value={department.slug}>{department.name}</option>
  ))

  const onHandleSetSlug = (e: React.FormEvent<HTMLSelectElement>) => {
    handleSetSlug(`${e.currentTarget.value}/$\{term\}&map=ft`)
    console.log(e.currentTarget.value)
    // handleSetSlug(e.target.v)
  }

return (
  <select defaultValue="value0" onChange={onHandleSetSlug}>
    <option disabled value="value0">Selecciona una opción</option>
    {departmentOptions}
  </select>

)}

export default DepartmentGroup
