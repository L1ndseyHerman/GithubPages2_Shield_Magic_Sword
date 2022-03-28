import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TurnResultsText from "./TurnResultsText";

const container: HTMLElement = document.createElement("div");
beforeEach(() => {
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it("renders TurnResultsText example", () => {

  act(() => {
    render(<TurnResultsText 
      playerOneElementColor="firebrick" 
      playerOneChoice="Shield" 
      playerOneCharacterTypeText="" 
      playerOneElementalBonusText=""
      computerElementColor="darkolivegreen"
      computerChoice="Magic" 
      computerCharacterTypeText=""
      computerElementalBonusText=""
      winLooseTieText="" 
    />, container);
  });
  
  expect((container.querySelector("#testingSpan1") as HTMLElement).style.color).toBe("firebrick");
  expect((container.querySelector("#testingSpan2") as HTMLElement).style.color).toBe("darkolivegreen");
  expect(container.querySelector("p")?.textContent).toBe("Player1 chose Shield" +
    "   and Computer chose Magic  . ");

});

it("renders different playerOneElementColor", () => {

  act(() => {
    render(<TurnResultsText 
      playerOneElementColor="darkorange" 
      playerOneChoice="Shield" 
      playerOneCharacterTypeText=""
      playerOneElementalBonusText=""
      computerElementColor="darkolivegreen"
      computerChoice="Magic" 
      computerElementalBonusText=""
      computerCharacterTypeText=""
      winLooseTieText="" 
    />, container);
  });
  
  expect((container.querySelector("#testingSpan1") as HTMLElement).style.color).toBe("darkorange");
  expect((container.querySelector("#testingSpan2") as HTMLElement).style.color).toBe("darkolivegreen");
  expect(container.querySelector("p")?.textContent).toBe("Player1 chose Shield" +
   "   and Computer chose Magic  . ");

});

it("renders different computerElementColor", () => {

  act(() => {
    render(<TurnResultsText 
      playerOneElementColor="firebrick" 
      playerOneChoice="Shield" 
      playerOneCharacterTypeText=""
      playerOneElementalBonusText=""
      computerElementColor="royalblue"
      computerChoice="Magic" 
      computerElementalBonusText="" 
      computerCharacterTypeText=""
      winLooseTieText="" 
    />, container);
  });
  
  expect((container.querySelector("#testingSpan1") as HTMLElement).style.color).toBe("firebrick");
  expect((container.querySelector("#testingSpan2") as HTMLElement).style.color).toBe("royalblue");
  expect(container.querySelector("p")?.textContent).toBe("Player1 chose Shield" +
   "   and Computer chose Magic  . ");

});

it("renders different playerOneChoice", () => {

  act(() => {
    render(<TurnResultsText 
      playerOneElementColor="firebrick" 
      playerOneChoice="Sword" 
      playerOneCharacterTypeText=""
      playerOneElementalBonusText=""
      computerElementColor="darkolivegreen"
      computerChoice="Magic" 
      computerElementalBonusText="" 
      computerCharacterTypeText=""
      winLooseTieText="" 
    />, container);
  });
  
  expect((container.querySelector("#testingSpan1") as HTMLElement).style.color).toBe("firebrick");
  expect((container.querySelector("#testingSpan2") as HTMLElement).style.color).toBe("darkolivegreen");
  expect(container.querySelector("p")?.textContent).toBe("Player1 chose Sword" +
   "   and Computer chose Magic  . ");

});

it("renders different computerChoice", () => {

  act(() => {
    render(<TurnResultsText 
      playerOneElementColor="firebrick" 
      playerOneChoice="Shield" 
      playerOneCharacterTypeText=""
      playerOneElementalBonusText=""
      computerElementColor="darkolivegreen" 
      computerChoice="Sword" 
      computerElementalBonusText="" 
      computerCharacterTypeText=""
      winLooseTieText="" 
    />, container);
  });
  
  expect((container.querySelector("#testingSpan1") as HTMLElement).style.color).toBe("firebrick");
  expect((container.querySelector("#testingSpan2") as HTMLElement).style.color).toBe("darkolivegreen");
  expect(container.querySelector("p")?.textContent).toBe("Player1 chose Shield" +
   "   and Computer chose Sword  . ");

});

it("renders playerOneCharacterTypeText", () => {

  act(() => {
    render(<TurnResultsText 
      playerOneElementColor="firebrick" 
      playerOneChoice="Shield" 
      playerOneCharacterTypeText="(+1 Magic Damage because Player1 is a Mage.) " 
      playerOneElementalBonusText=""
      computerElementColor="darkolivegreen"
      computerChoice="Magic" 
      computerCharacterTypeText=""
      computerElementalBonusText=""
      winLooseTieText="" 
    />, container);
  });
  
  expect((container.querySelector("#testingSpan1") as HTMLElement).style.color).toBe("firebrick");
  expect((container.querySelector("#testingSpan2") as HTMLElement).style.color).toBe("darkolivegreen");
  expect(container.querySelector("p")?.textContent).toBe("Player1 chose Shield" +
    " (+1 Magic Damage because Player1 is a Mage.)   and Computer chose Magic  . ");

});

it("renders playerOneCharacterTypeText two parts", () => {

  act(() => {
    render(<TurnResultsText 
      playerOneElementColor="firebrick" 
      playerOneChoice="Shield" 
      playerOneCharacterTypeText="(-1 Magic Damage because Player1 is a Bodyguard.) (+1 Magic Damage because Player1 is a Mage.) " 
      playerOneElementalBonusText=""
      computerElementColor="darkolivegreen"
      computerChoice="Magic" 
      computerCharacterTypeText=""
      computerElementalBonusText=""
      winLooseTieText="" 
    />, container);
  });
  
  expect((container.querySelector("#testingSpan1") as HTMLElement).style.color).toBe("firebrick");
  expect((container.querySelector("#testingSpan2") as HTMLElement).style.color).toBe("darkolivegreen");
  expect(container.querySelector("p")?.textContent).toBe("Player1 chose Shield" +
    " (-1 Magic Damage because Player1 is a Bodyguard.) (+1 Magic Damage because Player1 is a Mage.)" +
    "   and Computer chose Magic  . ");

});

it("renders computerCharacterTypeText", () => {

  act(() => {
    render(<TurnResultsText 
      playerOneElementColor="firebrick" 
      computerElementColor="darkolivegreen"
      playerOneChoice="Shield" 
      playerOneCharacterTypeText="" 
      playerOneElementalBonusText=""
      computerChoice="Magic" 
      computerCharacterTypeText="(+1 Magic Damage because Computer is a Mage.) "
      computerElementalBonusText=""
      winLooseTieText="" 
    />, container);
  });
  
  expect((container.querySelector("#testingSpan1") as HTMLElement).style.color).toBe("firebrick");
  expect((container.querySelector("#testingSpan2") as HTMLElement).style.color).toBe("darkolivegreen");
  expect(container.querySelector("p")?.textContent).toBe("Player1 chose Shield" +
    "   and Computer chose Magic (+1 Magic Damage because Computer is a Mage.)  . ");

});

it("renders playerOneElementalBonusText", () => {

  act(() => {
    render(<TurnResultsText 
      playerOneElementColor="firebrick" 
      playerOneChoice="Shield" 
      playerOneCharacterTypeText=""
      playerOneElementalBonusText="(+1 bonus elemental damage)"
      computerElementColor="darkolivegreen"
      computerChoice="Magic" 
      computerElementalBonusText="" 
      computerCharacterTypeText=""
      winLooseTieText="" 
    />, container);
  });
  
  expect((container.querySelector("#testingSpan1") as HTMLElement).style.color).toBe("firebrick");
  expect((container.querySelector("#testingSpan2") as HTMLElement).style.color).toBe("darkolivegreen");
  expect(container.querySelector("p")?.textContent).toBe("Player1 chose Shield" + 
  "  (+1 bonus elemental damage) and Computer chose Magic  . ");

});

it("renders playerOneCharacterType and playerOneElementalBonusText", () => {

  act(() => {
    render(<TurnResultsText 
      playerOneElementColor="firebrick" 
      computerElementColor="darkolivegreen"
      playerOneChoice="Shield" 
      playerOneCharacterTypeText="(+1 Magic Damage because Player1 is a Mage.) "
      playerOneElementalBonusText="(+1 bonus elemental damage)"
      computerChoice="Magic" 
      computerElementalBonusText="" 
      computerCharacterTypeText=""
      winLooseTieText="" 
    />, container);
  });
  
  expect((container.querySelector("#testingSpan1") as HTMLElement).style.color).toBe("firebrick");
  expect((container.querySelector("#testingSpan2") as HTMLElement).style.color).toBe("darkolivegreen");
  expect(container.querySelector("p")?.textContent).toBe("Player1 chose Shield" + 
  " (+1 Magic Damage because Player1 is a Mage.)  (+1 bonus elemental damage)" +
  " and Computer chose Magic  . ");

});

it("renders computerElementalBonusText", () => {

  act(() => {
    render(<TurnResultsText 
      playerOneElementColor="firebrick" 
      computerElementColor="darkolivegreen"
      playerOneChoice="Shield" 
      playerOneCharacterTypeText=""
      playerOneElementalBonusText=""
      computerChoice="Magic" 
      computerCharacterTypeText=""
      computerElementalBonusText="(+1 bonus elemental damage)"
      winLooseTieText="" 
    />, container);
  });
  
  expect((container.querySelector("#testingSpan1") as HTMLElement).style.color).toBe("firebrick");
  expect((container.querySelector("#testingSpan2") as HTMLElement).style.color).toBe("darkolivegreen");
  expect(container.querySelector("p")?.textContent).toBe("Player1 chose Shield" +
   "   and Computer chose Magic  (+1 bonus elemental damage). ");

});

it("renders winText", () => {

  act(() => {
    render(<TurnResultsText 
      playerOneElementColor="firebrick" 
      computerElementColor="darkolivegreen"
      playerOneChoice="Shield" 
      playerOneCharacterTypeText=""
      playerOneElementalBonusText=""
      computerChoice="Magic" 
      computerElementalBonusText="" 
      computerCharacterTypeText=""
      winLooseTieText="Player1 wins!" 
    />, container);
  });
  
  expect((container.querySelector("#testingSpan1") as HTMLElement).style.color).toBe("firebrick");
  expect((container.querySelector("#testingSpan2") as HTMLElement).style.color).toBe("darkolivegreen");
  expect(container.querySelector("p")?.textContent).toBe("Player1 chose Shield" +
   "   and Computer chose Magic  . Player1 wins!");

});

//  None of the other props matter if playerOneChoice === "First Turn", they won't show up.
it("renders the empty string, because Player1 has not taken a turn yet", () => {

  act(() => {
    render(<TurnResultsText playerOneChoice="First Turn"
    playerOneElementColor="firebrick" 
    playerOneCharacterTypeText="" 
    playerOneElementalBonusText=""
    computerElementColor="darkolivegreen"
    computerChoice="Magic" 
    computerCharacterTypeText=""
    computerElementalBonusText=""
    winLooseTieText="" 
    />, container);
  });

  expect(container.querySelector("p")?.textContent).toBe("");

});