import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import NewGameButton from "./NewGameButton";

const container: HTMLElement = document.createElement("div");
beforeEach(() => {
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it("renders visible NewGameButton", () => {

  act(() => {
    render(<NewGameButton 
      newGameButtonDisplay="block" 
      callback={(arg0: {isNotNewGame: boolean, playerOneChoice: string, 
        disabledButtons: boolean[], screenName: string}) => arg0}
      />, container);
  });
  
  expect(container.querySelector("div")?.style.display).toBe("block");

});

it("renders invisible NewGameButton", () => {

    act(() => {
      render(<NewGameButton 
        newGameButtonDisplay="none" 
        callback={(arg0: {isNotNewGame: boolean, playerOneChoice: string, 
          disabledButtons: boolean[], screenName: string}) => arg0}
        />, container);
    });
    
    expect(container.querySelector("div")?.style.display).toBe("none");
  
  });