import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import GameButtonWithExplanation from "./GameButtonWithExplanation";

const container: HTMLElement = document.createElement("div");
beforeEach(() => {
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it("renders enabled Shield button + explanation", () => {
  
  act(() => {
    render(<GameButtonWithExplanation 
      buttonColor="darkolivegreen" 
      buttonText="Shield" 
      explanation="Blocks two physical damage." 
      buttonNumber="0"
      isDisabled={false} 
      disabledButtonArray={[false, false, false]} 
      callback={(arg0: {isNotNewGame: boolean, playerOneChoice: string, 
        disabledButtons: boolean[], screenName: string}) => arg0}
    />, container);
  });

  expect(container.querySelector("button")?.style.background).toBe("darkolivegreen");
  expect(container.querySelector("button")?.textContent).toBe("Shield");
  expect(container.querySelector("p")?.textContent).toBe("Blocks two physical damage.");
  expect(container.querySelector("button")?.disabled).toBe(false);

});

it("renders disabled Shield button + explanation", () => {
  
  act(() => {
    render(<GameButtonWithExplanation 
      buttonColor="darkolivegreen" 
      buttonText="Shield" 
      explanation="Blocks two physical damage." 
      buttonNumber="0"
      isDisabled={true} 
      disabledButtonArray={[false, false, false]}
      callback={(arg0: {isNotNewGame: boolean, playerOneChoice: string, 
        disabledButtons: boolean[], screenName: string}) => arg0}
    />, container);
  });

  expect(container.querySelector("button")?.style.background).toBe("darkolivegreen");
  expect(container.querySelector("button")?.textContent).toBe("Shield");
  expect(container.querySelector("p")?.textContent).toBe("Blocks two physical damage.");
  expect(container.querySelector("button")?.disabled).toBe(true);

});

it("renders enabled Magic button + explanation", () => {
  
  act(() => {
    render(<GameButtonWithExplanation 
      buttonColor="royalblue" 
      buttonText="Magic" 
      explanation="Deals one magic damage." 
      buttonNumber="1"
      isDisabled={false} 
      disabledButtonArray={[false, false, false]}
      callback={(arg0: {isNotNewGame: boolean, playerOneChoice: string, 
        disabledButtons: boolean[], screenName: string}) => arg0}
    />, container);
  });

  expect(container.querySelector("button")?.style.background).toBe("royalblue");
  expect(container.querySelector("button")?.textContent).toBe("Magic");
  expect(container.querySelector("p")?.textContent).toBe("Deals one magic damage.");
  expect(container.querySelector("button")?.disabled).toBe(false);

});

it("renders disabled Magic button + explanation", () => {
  
  act(() => {
    render(<GameButtonWithExplanation 
      buttonColor="royalblue" 
      buttonText="Magic" 
      explanation="Deals one magic damage." 
      buttonNumber="1"
      isDisabled={true} 
      disabledButtonArray={[false, false, false]}
      callback={(arg0: {isNotNewGame: boolean, playerOneChoice: string, 
        disabledButtons: boolean[], screenName: string}) => arg0}
    />, container);
  });

  expect(container.querySelector("button")?.style.background).toBe("royalblue");
  expect(container.querySelector("button")?.textContent).toBe("Magic");
  expect(container.querySelector("p")?.textContent).toBe("Deals one magic damage.");
  expect(container.querySelector("button")?.disabled).toBe(true);

});

it("renders enabled Sword button + explanation", () => {
  
  act(() => {
    render(<GameButtonWithExplanation 
      buttonColor="firebrick" 
      buttonText="Sword" 
      explanation="Deals two physical damage." 
      buttonNumber="2"
      isDisabled={false} 
      disabledButtonArray={[false, false, false]}
      callback={(arg0: {isNotNewGame: boolean, playerOneChoice: string, 
        disabledButtons: boolean[], screenName: string}) => arg0}
    />, container);
  });

  expect(container.querySelector("button")?.style.background).toBe("firebrick");
  expect(container.querySelector("button")?.textContent).toBe("Sword");
  expect(container.querySelector("p")?.textContent).toBe("Deals two physical damage.");
  expect(container.querySelector("button")?.disabled).toBe(false);

});

it("renders disabled Sword button + explanation", () => {
  
  act(() => {
    render(<GameButtonWithExplanation 
      buttonColor="firebrick" 
      buttonText="Sword" 
      explanation="Deals two physical damage." 
      buttonNumber="2"
      isDisabled={true} 
      disabledButtonArray={[false, false, false]}
      callback={(arg0: {isNotNewGame: boolean, playerOneChoice: string, 
        disabledButtons: boolean[], screenName: string}) => arg0}
    />, container);
  });

  expect(container.querySelector("button")?.style.background).toBe("firebrick");
  expect(container.querySelector("button")?.textContent).toBe("Sword");
  expect(container.querySelector("p")?.textContent).toBe("Deals two physical damage.");
  expect(container.querySelector("button")?.disabled).toBe(true);

});