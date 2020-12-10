import React from 'react';

import styled from '@emotion/styled';

import Context from 'style/Context';

import QuestionTitle from 'style/QuestionTitle';

import Regions from 'presentational/Regions';
import Options from 'presentational/Options';

const Box = styled.div({
  boxSizing: 'border-box',
  padding: '1.8rem 11rem',
  flex: '1 0 100%',
  height: '100%',
  scrollSnapAlign: 'start',
  overflow: 'hidden',
});

export default function QuestionItem({
  question: {
    category, question, options, sub,
  },
  onChange,
}) {
  const Option = () => {
    if (category === 'region') {
      return (<Regions regions={options} onChange={onChange} />);
    }

    return (
      <Options
        options={options}
        category={category}
        onChange={onChange}
      />
    );
  };

  return (
    <Box>
      <div id={category}>
        <QuestionTitle>{question}</QuestionTitle>
        <Context>{sub}</Context>

        {
          Option()
        }

      </div>
    </Box>
  );
}
