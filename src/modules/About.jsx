import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Header from '../components/Header';
import PageContainer from '../components/PageContainer';
import SoonInApp from '../components/SoonInApp';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      	<Header />

        <PageContainer>
          <AboutHeading>
            О приложении Menu Builder App
          </AboutHeading>

          <AboutParagraph>
            Эта программа находится в разработке. На данный момент нуждается в разработке API. Целью этой
            программы является создание меню, которое будет составляться случайно из зараннее введенных блюд.
          </AboutParagraph>

          <SoonInAppHeading>Последующие изменения</SoonInAppHeading>

          <SoonInApp fulfilled={true} position='1'>
            Cледующим улучшением будет создание API, которое будет добавлять блюда в базу данных.
            Затем будет разработан механизм добавления блюд и продуктов. Все блюда после этого
            будут состоять из продуктов, для возможности разработки финансовой системы.
          </SoonInApp>

          <SoonInApp fulfilled={false} position='2'>
            Разработка финансовой системы, позволяет получить количество денег, которые требуются
            для определенного меню. Каждый продукт будет иметь цену, которую можно будет изменять через
            раздел "Добавить новое блюдо". Там же нужно будет указывать количество грамм требуемое на какое то блюдо.
            Затем можно будет увидеть какие продукты нужны для блюда, количество продукта и цену за продукт. После этого
            в разделе "Построить меню", будет видна полная цена за всё меню.
          </SoonInApp>
        </PageContainer>
      </React.Fragment>
    );
  }
};

const AboutHeading = styled.h2`
  font-size: 2.5rem;
  margin: 1rem 0;
  text-align: center;
`;

const AboutParagraph = styled.p`
  width: 90%;
  margin: 0 auto;
  font-size: 1.3rem;
`;

const SoonInAppHeading = styled.h3`
  text-align: center;
  font-size: 1.8rem;
  margin-top: 1em;
`;