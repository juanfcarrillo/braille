import { useEffect, useRef, useState } from "react";
import { toBraille } from "./utils/toBraile";
import { Button, ButtonGroup, Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import AppCss from "./App.module.css";
import { fromBraille } from "./utils/toSpanish";
import "./print.css";
import { createPortal } from "react-dom";

function App() {
  const [textNormal, setTextNormal] = useState("");
  const [braille, setBraille] = useState("");
  const [textToBraile, setTextToBraile] = useState("");
  const [wordSpanish, setWordSpanish] = useState("");

  const areaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const brailleText = toBraille(textNormal);
    setBraille(brailleText);
  }, [textNormal]);

  useEffect(() => {

    if (textToBraile) {
      const convertedText = toBraille(textToBraile);
      const spanishText = fromBraille(convertedText);
      setWordSpanish(spanishText);
    } else {
      setWordSpanish("");
    }
  }, [textToBraile]);

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
      } else {
        console.error("No se pudo abrir la ventana de impresión.");
      }
    }
  };

  return (
    <main className="flex flex-col items-center gap-4 min-h-full h-[100vh] w-[100vw] p-8">
      {
        createPortal(
          <h1 className={`${AppCss.mirrorContainer} mirror`}>
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
          value={textToBraile}
          data-testid="alpha-input2"
          onChange={(e) => {
            setTextToBraile(e.target.value);
          }}
          placeholder="Digita algo"
          type="text"
          variant="faded"
        />
        <Textarea
          id="braille"
          label="Braille"
          data-testid="braille-output2"
          value={wordSpanish}
          placeholder="Texto en Braille"
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
