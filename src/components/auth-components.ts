import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 420px;
  padding: 50px 0px;
`;

export const Form = styled.form`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	padding: 20px;
`;

export const Input = styled.input`
  padding: 15px;
  border-radius: 25px;
  width: 100%;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #64b5f6; /* Highlight border color on focus */
  }

  &[type="submit"] {
    cursor: pointer;
    background-color: #1d9bf0;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
`;
export const Error = styled.span`
	font-weight: 600;
	color: tomato;
`;

export const Switcher = styled.span`
	margin-top: 20px;
    a {
        color: #1d9bf0;
    }
`