import { ChangeEvent, useEffect, useRef, useState } from "react";
import { toBraille } from "./utils/toBraile";
import { Button, ButtonGroup, Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import AppCss from "./App.module.css";
import "./print.css";

function App() {
  const [textNormal, setTextNormal] = useState("");
  const [braille, setBraille] = useState("");

  const [brailleInput, setBrailleInput] = useState(" ");

  const [brailleText, setBrailleText] = useState("");
  const [clearText, setClearText] = useState("");

  const [isPrinting, setIsPrinting] = useState(false);

  const areaRef = useRef<HTMLTextAreaElement>(null);

  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">(
    "small"
  );

  useEffect(() => {
    const brailleText = toBraille(textNormal);
    setBraille(brailleText);
  }, [textNormal]);

  useEffect(() => {
    setBrailleInput(brailleText);
  }, [brailleText]);

  useEffect(() => {
    if (brailleInput.length < clearText.length) {
      setClearText((prev) => prev.slice(0, brailleInput.length));
      setBrailleText((prev) => prev.slice(0, brailleInput.length));
    }
  }, [brailleInput.length, clearText.length]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    const lastLetter = value.slice(-1);

    if (brailleInput === value) {
      setBrailleText((prev) => prev.slice(0, -1));
      setClearText((prev) => prev.slice(0, -1));
      return;
    }

    setBrailleText((prev) => `${prev}${toBraille(lastLetter)}`);
    setClearText((prev) => `${prev}${lastLetter}`);

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
    <>
      <div className="flex flex-col w-[100%] items-center justify-center  mt-10 mb-10 gap-4">
        <h1 className="text-3xl uppercase font-bold w-[50%] ">
          Traducción de español a braille y de braille a español
        </h1>
        <h2 className="text-gray-500 text-xl">
          Easily translate between Spanish and Braille with our intuitive tool.
        </h2>
      </div>
      <main className="flex items-center justify-center min-h-full h-[50%] w-[100%] p-8">
        <div className="w-[80%] flex gap-10">
          <section className="flex flex-1 flex-col items-center justify-center w-1/3 gap-4 border-1 rounded-xl shadow-xl border-gray-300">
            <h1 className="text-2xl">Traductor Español - Braille</h1>

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
              className="w-[90%] border-1 border-gray-300"
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
              className=" w-[90%] border-1 border-gray-300 rounded-xl"
              readOnly
            />
            <Textarea
              id="braille"
              value={braille}
              ref={areaRef}
              className={`${AppCss.mirrorContainer} border-1 border-gray-300 rounded-xl w-[90%]`}
              classNames={{
                input: "text-3xl",
              }}
              readOnly
            />
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
              <ButtonGroup className="mb-8">
                <Button onClick={() => handlePrint("small")}>Pequeño</Button>
                <Button onClick={() => handlePrint("medium")}>Mediano</Button>
                <Button onClick={() => handlePrint("large")}>Grande</Button>
              </ButtonGroup>
            </section>
          </section>

          <section className="flex flex-1 flex-col items-center w-1/3 gap-4 border-1 rounded-xl shadow-xl border-gray-300">
            <h1 className="text-2xl">Traductor Braille - Español</h1>
            <Input
              id="text"
              autoComplete="off"
              label="Texto"
              data-testid="alpha-input2"
              placeholder="Digita algo"
              onChange={handleChange}
              value={brailleInput}
              className="w-[90%] border-1 border-gray-300 rounded-xl"
            />
            <Textarea
              id="braille"
              label="Braille"
              data-testid="braille-output2"
              value={clearText}
              placeholder="Texto en Braille"
              className="w-[90%] border-1 border-gray-300 rounded-xl"
              classNames={{
                input: "text-3xl",
              }}
            />
          </section>
        </div>
      </main>
      <section className="w-[100%] gap-4">
        <div className="flex-col gap-4 w-[80%] ml-52">
          <h2 className="text-2xl mb-8">Cómo utilizar</h2>
          <p className="text-sm text-justify">
            Para traducir del español al braille, simplemente escriba su texto
            en español en el campo de entrada y cargue una imagen en braille o
            use la cámara de su dispositivo para capturarla. El texto braille
            traducido se mostrará a continuación. Para traducir del Braille al
            español, cargue o capture una imagen del Braille, o escriba el texto
            en Braille directamente en el campo de entrada.<br/> El texto traducido
            al español se mostrará a continuación. Tenga en cuenta que la
            precisión de la traducción puede variar, ya que depende de la
            calidad de la imagen o el texto en Braille y de nuestras capacidades
            de procesamiento del lenguaje. Recomendamos volver a verificar las
            traducciones para obtener información crítica. Si tiene algún
            problema o tiene algún comentario, no dude en ponerse en contacto
            con nuestro equipo de soporte.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
