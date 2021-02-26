import React from "react";
import { data } from "../data";

const StateExampleArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = id => {
    setPeople(oldPeople => {
      let newPeople = oldPeople.filter(person => person.id != id);
      return newPeople;
    });
  };

  return (
    <section>
      {people.map(person => {
        const { id, name } = person;
        return (
          <div key={id}>
            <span>{name}</span>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
            <br />
            <br />
          </div>
        );
      })}
      <button type="button" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </section>
  );
};

export default StateExampleArray;