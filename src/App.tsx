import { ChangeEvent, useEffect, useRef, useState } from "react";
import { toBraille } from "./utils/toBraile";
import { Button, ButtonGroup, Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import AppCss from "./App.module.css";
// import { fromBraille } from "./utils/toSpanish";
import "./print.css";
import { createPortal } from "react-dom";
import clsx from "clsx";

function App() {
  const [textNormal, setTextNormal] = useState("");
  const [braille, setBraille] = useState("");

  const [brailleInput, setBrailleInput] = useState(" ");

  const [brailleText, setBrailleText] = useState("");
  const [clearText, setClearText] = useState("");

  const [isPrinting, setIsPrinting] = useState(false);

  const areaRef = useRef<HTMLTextAreaElement>(null);

  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">("small");

  useEffect(() => {
    const brailleText = toBraille(textNormal);
    setBraille(brailleText);
  }, [textNormal]);

  useEffect(() => {
    setBrailleInput(brailleText)
  }, [brailleText]);

  useEffect(() => {
    if (brailleInput.length < clearText.length) {
      setClearText(prev => prev.slice(0, brailleInput.length));
      setBrailleText(prev => prev.slice(0, brailleInput.length));
    }
  }, [brailleInput.length, clearText.length])

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    const lastLetter = value.slice(-1);

    if (brailleInput === value) {
      setBrailleText(prev => prev.slice(0, -1));
      setClearText(prev => prev.slice(0, -1));
      return;
    }

    setBrailleText(prev => `${prev}${toBraille(lastLetter)}`);
    setClearText(prev => `${prev}${lastLetter}`);

    setBrailleInput(value);
  }


  useEffect(() => {
    if (isPrinting && fontSize) {
      window.print();
      setIsPrinting(false);
    }
  }, [isPrinting, fontSize]);

  function handlePrint(size: "small" | "medium" | "large") {
    setIsPrinting(true);
    setFontSize(size);
  }

  return (
    <main className="flex flex-col items-center gap-4 min-h-full h-[100vh] w-[100vw] p-8">
      {
        createPortal(
          <h1 className={clsx({
              [AppCss.mirrorContainer]: true,
              "mirror": true,
              "text-[40px]": fontSize === "small",
              "text-[60px]": fontSize === "medium",
              "text-[80px]": fontSize === "large",
            })
          }>
            {braille}
          </h1>,
          document.getElementById("print") || document.body
        )
      }
      <h1 className="text-2xl">Traductor Español - Braille</h1>
      <section className="flex flex-col w-1/3 gap-4">
        <Input
          id="text"
          autoComplete="off"
          label="Texto"
          value={textNormal}
          data-testid="alpha-input"
          onChange={(e) => setTextNormal(e.target.value)}
          placeholder="Digita algo"
          type="text"
          variant="faded"
        />
        <Textarea
          id="braille"
          label="Braille"
          data-testid="braille-output"
          value={braille}
          placeholder="Texto en Braille"
          classNames={{
            input: "text-3xl",
          }}
          readOnly
        />
        <Textarea
          id="mirror-braille"
          value={braille}
          ref={areaRef}
          className={AppCss.mirrorContainer}
          classNames={{
            input: "text-3xl",
          }}
          readOnly
        />
      </section>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h5>
          <span>Imprimir</span>
        </h5>
        <ButtonGroup>
          <Button onClick={() => handlePrint("small")}>Pequeño</Button>
          <Button onClick={() => handlePrint("medium")}>Mediano</Button>
          <Button onClick={() => handlePrint("large")}>Grande</Button>
        </ButtonGroup>
      </section>
      <h1 className="text-2xl">Traductor Braille - Español</h1>
      <section className="flex flex-col w-1/3 gap-4">
        <Input
          id="text"
          autoComplete="off"
          label="Texto"
          data-testid="alpha-input2"
          placeholder="Digita algo"
          onChange={handleChange}
          value={brailleInput}
        />
        <Textarea
          id="braille"
          label="Braille"
          data-testid="braille-output2"
          value={clearText}
          placeholder="Texto en Braille"
          classNames={{
            input: "text-3xl",
          }}
        />
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h5 className="flex items-center gap-2 mb-4">
          <span className="text-2xl">Imprimir</span>
        </h5>
      </section>
    </main>
  );
}

export default App;
