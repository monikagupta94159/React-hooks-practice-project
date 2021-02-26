import React from 'react';

const StateExampleObject = () => {
  const [object, changeObject] = React.useState({
    name: 'bhupesh',
    place: 'Jhansi',
    address: 'bangalore'
  })
  const changeItem = () => {
    changeObject({...object, address: 'mumbai'})
  }
    return (
      <div>
      <h1>{object.name}</h1>
      <h1>{object.place}</h1>
      <h1>{object.address}</h1>
      <button type="button" onClick={() => changeItem()}>Change Item</button>
      </div>
    )
}

export default StateExampleObject;