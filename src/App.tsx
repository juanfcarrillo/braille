import { ChangeEvent, useEffect, useRef, useState } from "react";
import { toBraille } from "./utils/toBraile";
import {
  Button,
  ButtonGroup,
  Divider,
  Textarea,
  Image,
} from "@nextui-org/react";
import { createPortal } from "react-dom";
import { Input } from "@nextui-org/input";
import AppCss from "./App.module.css";
import "./print.css";
import clsx from "clsx";
import { Github } from "lucide-react";
import imagen1 from "/src/images/paso 1.png"
import imagen2 from "/src/images/paso 2.png";

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
  const [printContent, setPrintContent] = useState<"brailleMirror" | "brailleNormal">(
    "brailleMirror"
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
  }, [isPrinting, fontSize, printContent]);

  function handlePrint(
    size: "small" | "medium" | "large",
    content: "brailleMirror" | "brailleNormal"
  ) {
    setPrintContent(content);
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
          {createPortal(
            printContent === "brailleMirror" ? (
              <h1
                className={clsx({
                  [AppCss.mirrorContainer]: true,
                  mirror: true,
                  "text-[40px]": fontSize === "small",
                  "text-[60px]": fontSize === "medium",
                  "text-[80px]": fontSize === "large",
                })}
              >
                {braille}
              </h1>
            ) : (
              <h1
                className={clsx({
                  "text-[40px]": fontSize === "small",
                  "text-[60px]": fontSize === "medium",
                  "text-[80px]": fontSize === "large",
                })}
              >
                {braille}
              </h1>
            ),
            document.getElementById("print") || document.body
          )}
          <section className="flex flex-1 flex-col items-center justify-center w-1/3 gap-4 border-1 rounded-xl shadow-xl border-gray-300">
            <h1 className="text-2xl mt-4">Traductor Español - Braille</h1>

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
              className="w-[90%] border-1 border-gray-300 rounded-xl"
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
            <ButtonGroup className="mb-8">
              <Button onClick={() => handlePrint("small", "brailleNormal")}>
                Pequeño
              </Button>
              <Button onClick={() => handlePrint("medium", "brailleNormal")}>
                Mediano
              </Button>
              <Button onClick={() => handlePrint("large", "brailleNormal")}>
                Grande
              </Button>
            </ButtonGroup>

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
                <Button onClick={() => handlePrint("small", "brailleMirror")}>
                  Pequeño Braille
                </Button>
                <Button onClick={() => handlePrint("medium", "brailleMirror")}>
                  Mediano Braille
                </Button>
                <Button onClick={() => handlePrint("large", "brailleMirror")}>
                  Grande Braille
                </Button>
              </ButtonGroup>
            </section>
          </section>

          <section className="flex flex-1 flex-col items-center w-1/3 gap-4 border-1 rounded-xl shadow-xl border-gray-300">
            <h1 className="text-2xl mt-4">Traductor Braille - Español</h1>
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
      <Divider className="my-4" />
      <section className="flex w-[100%]  justify-center gap-4 ">
        <div className="flex flex-col items-center gap-4 w-[50%] mb-10">
          <h2 className="text-2xl mb-8">Cómo utilizar</h2>
          <p className="text-lg text-justify">
            Para traducir del español al braille, simplemente escriba su texto
            en español en el campo de entrada. El texto braille traducido se
            mostrará a continuación. <br />
            <div className="flex justify-center w-[100%] ">
              <Image
                width={300}
                alt="español a braille"
                src={imagen1}
              />
            </div>
            Para traducir del Braille al español, escriba el texto en Braille
            directamente en el campo de entrada, el texto traducido al español
            se mostrará a continuación.
            <div className="flex justify-center w-[100%]">
              <Image
                width={300}
                alt="español a braille"
                src={imagen2}
              />
            </div>
            <br /> Recomendamos volver a verificar las traducciones para obtener
            información crítica. Si tiene algún problema o tiene algún
            comentario, no dude en ponerse en contacto con nuestro equipo de
            soporte.
          </p>
          <div className="flex gap-4">
            <Button
              color="success"
              variant="bordered"
              startContent={<Github />}
            >
              <a href="https://github.com/JhonMeza7">GitHub - Jhon</a>
            </Button>
            <Button
              color="default"
              variant="bordered"
              startContent={<Github />}
            >
              <a href="https://github.com/Paoisbllxx22">GitHub - Paola</a>
            </Button>
            <Button
              color="success"
              variant="bordered"
              startContent={<Github />}
            >
              <a href="https://github.com/juanfcarrillo">GitHub - Juan</a>
            </Button>
            <Button
              color="default"
              variant="bordered"
              startContent={<Github />}
            >
              <a href="https://github.com/CarlosMorales07">GitHub - Carlos</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
