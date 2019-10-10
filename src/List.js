import React from 'react';
import Card from './Card'
import './List.css';

function List(props) {

  // state = { cards: this.props.cards,
  //           header: this.props.header
  // }
  
  // handleDelete = (id) => {
  //   let newArray = this.state.cards.filter(item => item.id !== id);
  //   this.setState({
  //     cards: newArray
  //   });
  // }

  // newRandomCard() {
  //   const id = Math.random().toString(36).substring(2, 4)
  //     + Math.random().toString(36).substring(2, 4);
  //   return {
  //     id,
  //     title: `Random Card ${id}`,
  //     content: 'lorem ipsum'
  //   }
  // }

  // handleNewCard = () => {
  //   let newCard = this.newRandomCard()
  //   let newArray = [...this.state.cards, newCard]
  //   this.setState ({
  //     cards: newArray
  //   })

  // }

  // const newRandomCard = () => {
  //   const id = Math.random().toString(36).substring(2, 4)
  //     + Math.random().toString(36).substring(2, 4);
  //   return {
  //     id,
  //     title: `Random Card ${id}`,
  //     content: 'lorem ipsum',
  //   }
  // }







  
    return (
      <section className='List'>
        <header className='List-header'>
          <h2>{props.header}</h2>
        </header>
        <div className='List-cards'>
          {props.cards.map((card) =>
            <Card
              key={card.id}
              id = {card.id}
              title={card.title}
              content={card.content}
              deleteItem={props.deleteItem}
            />
          )}
          <button
            type='button'
            className='List-add-button'
            onClick={() => props.addCard(props.id)}
          >
            + Add Random Card
          </button>
        </div>
      </section>
    )
  
}

export default List;