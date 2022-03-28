import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ConstantPlayerInfo from "./ConstantPlayerInfo";

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
it("renders Player1 example", () => {

  act(() => {
    render(<ConstantPlayerInfo 
      floatDirection="left"
      constantElementText="Player1 element: " 
      element="Fire" 
      elementColor="firebrick" 
      characterType="Bodyguard" 
    />, container);
  });
  
  expect(container.querySelector("div")?.style.float).toBe("left");
  expect(container.querySelector("#testingPar1")?.textContent).toBe("Player1 element: Fire");
  expect(container.querySelector("span")?.style.color).toBe("firebrick");
  expect(container.querySelector("#testingPar2")?.textContent).toBe("Bodyguard");

});

it("renders Computer example", () => {

  act(() => {
    render(<ConstantPlayerInfo
      floatDirection="right"
      constantElementText="Computer element: " 
      element="Fire" 
      elementColor="firebrick" 
      characterType="Bodyguard" 
    />, container);
  });
  
  expect(container.querySelector("div")?.style.float).toBe("right");
  expect(container.querySelector("#testingPar1")?.textContent).toBe("Computer element: Fire");
  expect(container.querySelector("span")?.style.color).toBe("firebrick");
  expect(container.querySelector("#testingPar2")?.textContent).toBe("Bodyguard");

});

it("renders Player1 different element", () => {

  act(() => {
    render(<ConstantPlayerInfo
      floatDirection="left"
      constantElementText="Player1 element: " 
      element="Earth" 
      elementColor="darkolivegreen" 
      characterType="Bodyguard" 
    />, container);
  });
  
  expect(container.querySelector("div")?.style.float).toBe("left");
  expect(container.querySelector("#testingPar1")?.textContent).toBe("Player1 element: Earth");
  expect(container.querySelector("span")?.style.color).toBe("darkolivegreen");
  expect(container.querySelector("#testingPar2")?.textContent).toBe("Bodyguard");

});

it("renders Player1 different characterType", () => {

  act(() => {
    render(<ConstantPlayerInfo 
      floatDirection="left"
      constantElementText="Player1 element: " 
      element="Fire" 
      elementColor="firebrick" 
      characterType="Mage" 
    />, container);
  });
  
  expect(container.querySelector("div")?.style.float).toBe("left");
  expect(container.querySelector("#testingPar1")?.textContent).toBe("Player1 element: Fire");
  expect(container.querySelector("span")?.style.color).toBe("firebrick");
  expect(container.querySelector("#testingPar2")?.textContent).toBe("Mage");

});