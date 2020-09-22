import styled from "styled-components";

export const Container = styled.div`
  grid-area: Menu;

  display: flex;
  flex-direction: column;

  background-color: #fafafa;

  -webkit-box-shadow: 5px 0px 6px 0px rgba(224, 224, 224, 1);
  -moz-box-shadow: 5px 0px 6px 0px rgba(224, 224, 224, 1);
  box-shadow: 5px 0px 6px 0px rgba(224, 224, 224, 1);

  overflow-y: scroll;
  z-index: 2;
  width: 72px;
  transition: 0.5s;
  height: calc(100vh - 72px);

  & > Button {
    background: none;
    cursor: pointer;
  }

  & > Button {
    flex-shrink: 0;

    color: var(--gray);
    transition: 1s;

    display: grid;

    grid-template-columns: 73px auto;
    grid-template-rows: 55px auto;

    grid-template-areas: "Ico Text";
    position: relative;

    & > span {
      grid-area: Text;
      display: inline-block;
      height: 55px;
      justify-content: center;
      text-align: left;
      line-height: 58px;
    }

    & > span:first-child {
      grid-area: Ico;
      display: inline-block;
      text-align: center;
      height: 55px;
      align-items: center;
      justify-content: center;
    }

    & > span > svg {
      display: inline-block;
      font-size: 22px;
      top: 16px;
      left: 24px;
      position: absolute;
    }

    &.selected {
      color: var(--blue);
      background: var(--tertiary);
    }

    &:hover {
      color: var(--bg-header);
      background: var(--light-gray);
    }
  }

  &.active {
    width: 250px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
