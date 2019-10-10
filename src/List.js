import React from 'react';
import Card from './Card'
import './List.css';

class List extends React.Component {

  state = { cards: this.props.cards,
            header: this.props.header
  }
  
  handleDelete() {
    console.log('Delete')
  }

  newRandomCard() {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum'
    }
  }

  handleNewCard = () => {
    console.log('New Card')
    let newCard = this.newRandomCard()
    let newArray = [...this.state.cards, newCard]
    this.setState ({
      cards: newArray
    })

  }

  // const newRandomCard = () => {
  //   const id = Math.random().toString(36).substring(2, 4)
  //     + Math.random().toString(36).substring(2, 4);
  //   return {
  //     id,
  //     title: `Random Card ${id}`,
  //     content: 'lorem ipsum',
  //   }
  // }







  render(props) {
    return (
      <section className='List'>
        <header className='List-header'>
          <h2>{this.state.header}</h2>
        </header>
        <div className='List-cards'>
          {this.state.cards.map((card) =>
            <Card
              key={card.id}
              title={card.title}
              content={card.content}
              deleteItem={this.handleDelete}
            />
          )}
          <button
            type='button'
            className='List-add-button'
            onClick={this.handleNewCard}
          >
            + Add Random Card
          </button>
        </div>
      </section>
    )
  }
}

export default List;