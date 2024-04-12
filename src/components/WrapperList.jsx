/*export const WapperList = () => {
    return (
      <div>
        <h2>Lista de Compras</h2>
      </div>
    )
  }*/

  export const WapperList = props => {
  
    const { children } = props
  
    return (
      <div>
        <h2>Lista de Compras</h2>
        <div>
          { children }
        </div>
      </div>
    )
  }