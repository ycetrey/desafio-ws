import styled from "styled-components";

import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
  grid-area: CustomerActivity;

  display: flex;
  flex-direction: column;

  padding: 10px 20px;
`;

export const Title = styled.h1``;

export const Search = styled.div`
  display: block;
  position: relative;
  & > input {
    border: 1px solid var(--gray);
    padding: 6px;
    padding-left: 35px;
    width: 100%;
    position: relative;
  }
`;

export const Icon = styled(FaSearch)`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 5px;
  top: 5px;
  z-index: 2;
`;

export const ActivityFilter = styled.div`
  margin: 20px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: transparent;

  & .button {
    padding: 10px;
    color: var(--white);
    border-radius: 5px;
    margin-right: 10px;
    min-width: 40px;
    text-align: center;
  }

  & .selected,
  & :hover {
    cursor: pointer;
    transition: background-color 0.2s;
    background-color: var(--light-gray);
  }

  & > div {
    padding: 0 10px 0 0;
    border-radius: 5px;

    display: flex;

    justify-content: center;
    align-items: center;
  }
`;

export const Total = styled.div`
  & .button {
    background-color: var(--gray);
  }
`;

export const Delayed = styled.div`
  & .button {
    background-color: var(--red);
  }
`;

export const InProgress = styled.div`
  & .button {
    background-color: var(--blue);
  }
`;

export const TODO = styled.div`
  & .button {
    background-color: var(--yellow);
  }
`;

export const Done = styled.div`
  & .button {
    background-color: var(--green);
  }
`;

export const ActivityList = styled.div`
  padding: 20px;

  height: 100%;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--border-activity);
  }
`;

export const DelayedActivityList = styled.div`
  display: flex;
  border-left: 1px solid var(--border-activity);

  flex-direction: column;
  & h1 {
    font-size: 16px;
    position: relative;
    padding-left: 30px;

    &::before {
      content: " ";
      width: 30px;
      height: 30px;
      position: absolute;
      background-color: var(--red);
      border-radius: 50%;
      left: -15px;
      top: -5px;
    }
  }
  & svg {
    color: var(--red);
  }
`;

export const Item = styled.div`
  display: flex;

  padding-left: 30px;
  position: relative;
  margin: 10px;
  margin-left: 30px;
  & > svg {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const ItemData = styled.div`
  display: flex;

  flex-direction: column;
  margin-bottom: 10px;
  & .contact,
  .date {
    font-weight: 400;
    font-size: 0.8rem;
  }
`;

export const TODOActivityList = styled.div`
  display: flex;

  flex-direction: column;
  border-left: 1px solid var(--border-activity);
  & h1 {
    font-size: 16px;
    position: relative;
    padding-left: 30px;

    &::before {
      content: " ";
      width: 30px;
      height: 30px;
      position: absolute;
      background-color: var(--yellow);
      border-radius: 50%;
      left: -15px;
      top: -5px;
    }
  }
  & svg {
    color: var(--yellow);
  }
`;

export const DoneActivityList = styled.div`
  display: flex;

  flex-direction: column;
  border-left: 1px solid var(--border-activity);
  & h1 {
    font-size: 16px;
    position: relative;
    padding-left: 30px;

    &::before {
      content: " ";
      width: 30px;
      height: 30px;
      position: absolute;
      background-color: var(--green);
      border-radius: 50%;
      left: -15px;
      top: -5px;
    }
  }
  & svg {
    color: var(--green);
  }
`;

export const InProgressActivityList = styled.div`
  display: flex;

  flex-direction: column;
  border-left: 1px solid var(--border-activity);
  & h1 {
    font-size: 16px;
    position: relative;
    padding-left: 30px;

    &::before {
      content: " ";
      width: 30px;
      height: 30px;
      position: absolute;
      background-color: var(--blue);
      border-radius: 50%;
      left: -15px;
      top: -5px;
    }
  }
  & svg {
    color: var(--blue);
  }
`;
