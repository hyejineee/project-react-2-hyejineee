import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div(({ theme }) => ({
  font: theme.typos.l,
  textAlign: 'center',
  color: theme.colors.main,
}));

const SelectedOption = styled.p({
  display: 'inline-block',
  padding: '0.3rem 1rem',
  margin: '0.5rem',
  borderRadius: '19px',
  boxShadow: '-1px 3px 15px -2px rgba(165, 165, 165, 0.49)',
  backgroundColor: '#ffffff',
});

export default function SelectedOptions({ selectedOptions }) {
  const {
    region, level, season, activity,
  } = selectedOptions;

  return (
    <Container>
      <SelectedOption>
        {region}
      </SelectedOption>
      {' '}
      에서
      <SelectedOption>
        {level}
      </SelectedOption>
      {' '}
      를 위한
      <br />
      <SelectedOption>
        {season}
      </SelectedOption>
      에 제격인
      {' '}
      <SelectedOption>
        {activity}
      </SelectedOption>
      {' '}
      목적의 등산로입니다!
    </Container>
  );
}
