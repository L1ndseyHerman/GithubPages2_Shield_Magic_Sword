import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ThisTurnsPlayerInfo from "./ThisTurnsPlayerInfo";

const container: HTMLElement = document.createElement("div");
beforeEach(() => {
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

//  I didn't test every possible combination here, but I think this is a good 
//  sample size/tests the general idea.

//  "element" and "choice" are for PlayerInfoImage.
it("renders Player1 example", () => {

  act(() => {
    render(<ThisTurnsPlayerInfo 
      floatDirection="left"
      constantHealthText="Player1 health: " 
      changingNumber={10} 
      element="Fire"
      choice="Shield"
    />, container);
  });
  
  expect(container.querySelector("div")?.style.float).toBe("left");
  expect(container.querySelector("p")?.textContent).toBe("Player1 health: 10");

});

it("renders Computer example", () => {

  act(() => {
    render(<ThisTurnsPlayerInfo 
      floatDirection="right"
      constantHealthText="Computer health: " 
      changingNumber={10} 
      element="Fire"
      choice="Shield"
    />, container);
  });
  
  expect(container.querySelector("div")?.style.float).toBe("right");
  expect(container.querySelector("p")?.textContent).toBe("Computer health: 10");

});

it("renders Player1 different health", () => {

  act(() => {
    render(<ThisTurnsPlayerInfo
      floatDirection="left"
      constantHealthText="Player1 health: " 
      changingNumber={5}  
      element="Fire"
      choice="Shield"
    />, container);
  });
  
  expect(container.querySelector("div")?.style.float).toBe("left");
  expect(container.querySelector("p")?.textContent).toBe("Player1 health: 5");

});