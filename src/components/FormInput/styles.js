import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 30%;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  margin: auto;
  height: 350px;
`;

export const StyledInputWrapper = styled.div``;

export const StyledInput = styled.input`
  padding: 0 15px;
  height: 40px;
  width: calc(100% - 32px);
  font-size: 15px;
  display: inline-block;
  color: grey;
  border: 1px solid	#191970;
  margin 2px 0;
  outline: 0;
  &:focus{
    border-bottom: 2px solid 	#191970;
  }
`;

export const StyledImage = styled.img`
  width: calc(100%);
  padding-bottom: 20px;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 45px;
  font-size: 14px;
  border: 1px solid	#191970;
  background-color: 	#191970;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 5px;
  cursor: pointer;
  transition: all .15s ease-in-out;
    &:hover {
      background-color: #fff;
      color: 	#191970;
    }
`;

export const Or = styled.div`
    width: 100%;
    text-align: center;
    color: grey;
    margin-top: 3px;
`;

export const RegisterWrapper = styled.div`
  width: 30%;
  position: relative;
  margin: 4% auto;
`;
