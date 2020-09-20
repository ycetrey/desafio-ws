import styled from "styled-components";

export const Container = styled.div`
  grid-area: Menu;

  display: flex;
  flex-direction: column;

  background-color: #fafafa;

  -webkit-box-shadow: 5px 0px 6px 0px rgba(224, 224, 224, 1);
  -moz-box-shadow: 5px 0px 6px 0px rgba(224, 224, 224, 1);
  box-shadow: 5px 0px 6px 0px rgba(224, 224, 224, 1);

  max-height: 100vh;
  overflow-y: scroll;
  padding-top: 64px;
  z-index: 2;
  position: absolute;
  width: 72px;
  transition: 0.5s;
  height: calc(100vh + 64px);

  & > Button {
    background: none;
  }
  & > Button.menu {
    height: 64px;
    width: 100%;
    background: var(--bg-header);
    font-size: 24px;
    border-radius: 0;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: left;
    position: fixed;
    top: 0;
    padding-left: 26px;
    z-index: 2;
  }

  & > Button:not(.menu) {
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
      border-bottom: 1px solid var(--light-gray);
    }

    & > span:first-child {
      grid-area: Ico;
      display: inline-block;
      text-align: center;
      height: 55px;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid var(--light-gray);
    }

    & > span > svg {
      display: inline-block;
      font-size: 22px;
      top: 16px;
      left: 24px;
      position: absolute;
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
