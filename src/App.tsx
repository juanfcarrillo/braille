import { useEffect, useRef, useState } from "react";
import { toBraille } from "./utils/toBraile";
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import AppCss from "./App.module.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";

function App() {
  const [textNormal, setTextNormal] = useState("");
  const [braille, setBraille] = useState("");
  const areaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const brailleText = toBraille(textNormal);
    setBraille(brailleText);
  }, [textNormal]);

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
        printWindow.document.write(
          `<html><head><title>Impresión</title><style>pre { ${style} }</style></head><body><pre>${content}</pre></body></html>`
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
      <h1 className="text-2xl">Traductor Braille</h1>
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
          className={AppCss.mirrorContainer}
          ref={areaRef}
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
        <Typography gutterBottom variant="h5" component="div">
          Imprimir
        </Typography>
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
          size="small"
        >
          <Button onClick={() => printContent("small")}>Pequeño</Button>
          <Button onClick={() => printContent("medium")}>Mediano</Button>
          <Button onClick={() => printContent("large")}>Grande</Button>
        </ButtonGroup>
      </section>
    </main>
  );
}

export default App;
