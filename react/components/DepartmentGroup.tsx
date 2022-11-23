import React from "react";

type Props = {
  departments: Category[] | undefined
}

type Category = {
  id: number,
  name: string
  slug: string
}

const DepartmentGroup:React.FC<Props> = ({departments}) => {
  console.log('Mi grupo de departamentos es:::---:::', departments);
return (

  <select defaultValue="value0">
    <option disabled value="value0">Selecciona una opción</option>
  </select>

)}

export default DepartmentGroup
