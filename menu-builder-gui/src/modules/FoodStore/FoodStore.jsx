import React, { Component } from 'react';

import styled from 'styled-components';

import Header from '../../components/Header';
import Message from '../../components/Message';
import Button from '../../components/Button';
import PageContainer from '../../components/PageContainer';

import { getProducts, addProduct, removeProduct } from './fetch';

export default class FoodStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prods: [],
    }

    this.getProducts = this.getProducts.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.handleProductName = this.handleProductName.bind(this);
  }

  getProducts() {
    getProducts()
      .then((data) => {
        this.setState({
          prods: data.products,
          connect: true,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          connect: false,
          showMessage: true,
        });
      });
  }

  addProduct() {
    const { prodName } = this.state;

    if (prodName.length > 0) {
      addProduct(prodName)
        .then((data) => {
          this.getProducts();
          this.setState({
            prodName: '',
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  
  removeProduct(e) {
    const position = e.target.id;
    const prodId = this.state.prods[position]._id; // This id is id from mongo

    const accept = global.confirm('Удалить продукт?');

    if(accept) { // TODO: Add modal window for confirm removing dish
      removeProduct(prodId)
        .then(() => {
          this.getProducts();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleProductName(e) {
    this.setState({
      prodName: e.target.value,
    });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const showProds = this.state.prods.map((key, index) => (
      <ProdItem key={key._id ? key._id : index}>
        <ProdName>№{index+1} {key.name}</ProdName>
        <ProdRemove onClick={this.removeProduct} id={index}>X</ProdRemove>
        <ProdDate>Дата создания - {(() => {
          const date = new Date(key.date);
          let month;

          if (date.getMonth() < 10) {
            month = `0${date.getMonth()}`;
          } else {
            month = date.getMonth();
          }

          return `${date.getDate()}.${month}.${date.getFullYear()}`;
        })() }</ProdDate>
      </ProdItem>
    ));

    return (
      <React.Fragment>
      	<Header />

        <PageContainer>
          <DishesBlock>
            {showProds}
          </DishesBlock>

          <AddBlock>
            <InputForProds
            placeholder="Введите название блюда"
            onChange={this.handleProductName} />
            <Button onClick={this.addProduct}>Добавить блюдо</Button>
          </AddBlock>

          {
            this.state.showMessage && <Message onClick={() => {
              this.setState({ showMessage: false });
            }}>Соединение потеряно</Message>
          }
        </PageContainer>
      </React.Fragment>
    );
  }
};

const DishesBlock = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
`;

const ProdItem = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
`;

const ProdName = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`;

const ProdRemove = styled.span`
  font-size: 1.3rem;
  
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.sandBrown};
  }
`;

const ProdDate = styled.span`
  font-size: 1.2rem;
`;

const InputForProds = styled.input`
  width: 30%;
`;

const AddBlock = styled.div`
  display: grid;
  grid-gap: 1rem;
  width: 70%;
  margin: 1rem auto 0 auto;
  justify-items: center;
  align-items: center;
`;