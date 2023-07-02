import styled from 'styled-components'

export const TagItemE1 = styled.li`
  list-style-type: none;
  margin: 5px 3px 5px 3px;
  padding: 0px;
`

export const TagBtn = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  margin: 0px;
  padding: 6px;
  border: 1px solid #f3aa4e;
  border-radius: 20px;
  outline: none;
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`
