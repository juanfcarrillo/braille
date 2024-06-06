import { ChangeEvent, useEffect, useRef, useState } from "react";
import { toBraille } from "./utils/toBraile";
import { Button, ButtonGroup, Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import AppCss from "./App.module.css";
// import { fromBraille } from "./utils/toSpanish";

function App() {
  const [textNormal, setTextNormal] = useState("");
  const [braille, setBraille] = useState("");

  const [brailleInput, setBrailleInput] = useState(" ");

  const [brailleText, setBrailleText] = useState("");
  const [clearText, setClearText] = useState("");

  const areaRef = useRef<HTMLTextAreaElement>(null);

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


  const printContent = (size: "small" | "medium" | "large") => {
    if (areaRef.current) {
      const content = areaRef.current.value;
      const printWindow = window.open("", "_blank");
      if (printWindow) {
        let style = "";
        if (size === "small") {
          style = "font-size: 20pt;";
        } else if (size === "medium") {
          style = "font-size: 24pt;";
        } else if (size === "large") {
          style = "font-size: 28pt;";
        }
        const additionalStyles = `
          .mirrorContainer {
            transform: scale(-1, 1);
            -ms-transform: scale(-1, 1);
            -webkit-transform: scale(-1, 1);
            pointer-events: none;
            background-color: red;
          }
        `;
        printWindow.document.write(
          `<html><head><title>Impresión</title><style>pre { ${style} } ${additionalStyles}</style></head><body><pre class="mirrorContainer">${content}</pre></body></html>`
        );
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  return (
    <main className="flex flex-col items-center gap-4 min-h-full h-[100vh] w-[100vw] p-8">
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
          id="braille"
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
          <Button onClick={() => printContent("small")}>Pequeño</Button>
          <Button onClick={() => printContent("medium")}>Mediano</Button>
          <Button onClick={() => printContent("large")}>Grande</Button>
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
        <ButtonGroup>
          <Button onClick={() => printContent("small")}>Pequeño</Button>
          <Button onClick={() => printContent("medium")}>Mediano</Button>
          <Button onClick={() => printContent("large")}>Grande</Button>
        </ButtonGroup>
      </section>
    </main>
  );
}

export default App;
