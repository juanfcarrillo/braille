import { ChangeEvent, useEffect, useRef, useState } from "react";
import { toBraille } from "./utils/toBraile"; // Importa la función de traducción a Braille
import {
  Button,
  ButtonGroup,
  Divider,
  Textarea,
  Image,
} from "@nextui-org/react"; // Importa componentes de NextUI para botones, grupos de botones, separadores, textarea e imagen
import { createPortal } from "react-dom"; // Importa la función para crear portales de React DOM
import { Input } from "@nextui-org/input"; // Importa el componente de entrada de texto de NextUI
import AppCss from "./App.module.css"; // Importa estilos CSS de módulo local
import "./print.css"; // Importa estilos CSS globales para impresión
import clsx from "clsx"; // Importa la función para manejar clases condicionales
import { Github } from "lucide-react"; // Importa el icono de GitHub desde Lucide React
import imagen1 from "/src/images/paso 1.png"; // Importa imagen 1 desde la ruta especificada
import imagen2 from "/src/images/paso 2.png"; // Importa imagen 2 desde la ruta especificada
import ToggleButton from "./components/toggleButton";

function App() {
  //modo oscuro
  // const [darkMode, setDarkMode] = useState(() => {
  //   const savedMode = localStorage.getItem('theme');
  //   return savedMode === 'dark' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches);
  // });

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('theme', 'light');
  //   }
  // }, [darkMode]);

  // Estados para manejar los datos de la aplicación
  const [textNormal, setTextNormal] = useState(""); // Texto normal en español
  const [braille, setBraille] = useState(""); // Texto braille generado

  const [brailleInput, setBrailleInput] = useState(" "); // Entrada de texto en braille (estado inicial con un espacio)

  const [brailleText, setBrailleText] = useState(""); // Texto en braille generado a partir de la entrada
  const [clearText, setClearText] = useState(""); // Texto normal correspondiente al texto en braille

  const [isPrinting, setIsPrinting] = useState(false); // Estado para manejar la impresión

  const areaRef = useRef<HTMLTextAreaElement>(null); // Referencia al textarea de entrada

  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">(
    "small"
  ); // Tamaño de fuente para impresión
  const [printContent, setPrintContent] = useState<
    "brailleMirror" | "brailleNormal"
  >("brailleMirror"); // Contenido para imprimir (braille espejado o normal)

  // Efecto para actualizar el texto braille cuando cambia el texto normal
  useEffect(() => {
    const brailleText = toBraille(textNormal); // Convierte el texto normal a braille
    setBraille(brailleText); // Actualiza el estado del texto braille
  }, [textNormal]);

  // Efecto para actualizar la entrada de braille cuando cambia el texto braille
  useEffect(() => {
    setBrailleInput(brailleText); // Actualiza la entrada de braille con el texto braille generado
  }, [brailleText]);

  // Efecto para mantener sincronizados los textos braille y normal
  useEffect(() => {
    if (brailleInput.length < clearText.length) {
      // Maneja la eliminación de caracteres en la entrada de braille
      setClearText((prev) => prev.slice(0, brailleInput.length));
      setBrailleText((prev) => prev.slice(0, brailleInput.length));
    }
  }, [brailleInput.length, clearText.length]);

  // Función para manejar cambios en la entrada de texto
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target; // Obtiene el valor del evento de cambio

    const lastLetter = value.slice(-1); // Obtiene el último carácter ingresado

    if (brailleInput === value) {
      // Maneja la eliminación de caracteres en la entrada de braille
      setBrailleText((prev) => prev.slice(0, -1));
      setClearText((prev) => prev.slice(0, -1));
      return;
    }

    setBrailleText((prev) => `${prev}${toBraille(lastLetter)}`); // Convierte y agrega el último carácter a braille
    setClearText((prev) => `${prev}${lastLetter}`); // Agrega el último carácter a la entrada de texto normal

    setBrailleInput(value); // Actualiza la entrada de braille
  }

  // Efecto para imprimir cuando se activa la impresión y se selecciona un tamaño de fuente
  useEffect(() => {
    if (isPrinting && fontSize) {
      window.print(); // Abre la ventana de impresión del navegador
      setIsPrinting(false); // Desactiva la impresión
    }
  }, [isPrinting, fontSize, printContent]);

  // Función para manejar la impresión
  function handlePrint(
    size: "small" | "medium" | "large",
    content: "brailleMirror" | "brailleNormal"
  ) {
    setPrintContent(content); // Establece el contenido a imprimir (braille espejado o normal)
    setIsPrinting(true); // Activa la impresión
    setFontSize(size); // Establece el tamaño de fuente para la impresión
  }

  return (
    <>
      {/* Encabezado de la aplicación */}
      <div className="max-w-full flex justify-end mt-4 mr-4">
        <ToggleButton />
      </div>
      <div className="flex flex-col w-[100%] items-center justify-center  mt-10 mb-10 gap-4">
        <h1 className="text-3xl uppercase font-bold w-[50%] ">
          Traducción de español a braille y de braille a español
        </h1>
        <h2 className="text-gray-500 text-xl">
          Easily translate between Spanish and Braille with our intuitive tool.
        </h2>
      </div>
      {/* Contenido principal de la aplicación */}
      <main className="flex items-center justify-center min-h-full h-[50%] w-[100%] p-8">
        <div className="w-[80%] flex gap-10">
          {/* Contenido para imprimir */}
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

          {/* Sección para traducción de español a braille */}
          <section className="flex flex-1 flex-col items-center justify-center w-1/3 gap-4 border-1 rounded-xl shadow-xl border-gray-300">
            <h1 className="text-2xl mt-4">Traductor Español - Braille</h1>

            {/* Entrada de texto en español */}
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

            {/* Salida de texto en braille */}
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

            {/* Grupo de botones para seleccionar tamaño de fuente y contenido a imprimir */}
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

            {/* Área de texto espejada para braille */}
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

            {/* Sección para botones de impresión de braille */}
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
                  Pequeño
                </Button>
                <Button onClick={() => handlePrint("medium", "brailleMirror")}>
                  Mediano
                </Button>
                <Button onClick={() => handlePrint("large", "brailleMirror")}>
                  Grande
                </Button>
              </ButtonGroup>
            </section>
          </section>

          {/* Sección para traducción de braille a español */}
          <section className="flex flex-1 flex-col items-center w-1/3 gap-4 border-1 rounded-xl shadow-xl border-gray-300">
            <h1 className="text-2xl mt-4">Traductor Braille - Español</h1>

            {/* Entrada de texto en braille */}
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

            {/* Salida de texto en español */}
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

      {/* Separador horizontal */}
      <Divider className="my-4" />

      {/* Sección de cómo utilizar la aplicación */}
      <section className="flex w-[100%]  justify-center gap-4 ">
        <div className="flex flex-col items-center gap-4 w-[50%] mb-10">
          <h2 className="text-2xl mb-8">Cómo utilizar</h2>
          <p className="text-lg text-justify">
            Para traducir del español al braille, simplemente escriba su texto
            en español en el campo de entrada. El texto braille traducido se
            mostrará a continuación. <br />
            {/* Imagen 1 para instrucciones de español a braille */}
            <div className="flex justify-center w-[100%] ">
              <Image width={300} alt="español a braille" src={imagen1} />
            </div>
            Para traducir del Braille al español, escriba el texto en Braille
            directamente en el campo de entrada, el texto traducido al español
            se mostrará a continuación.
            {/* Imagen 2 para instrucciones de braille a español */}
            <div className="flex justify-center w-[100%]">
              <Image width={300} alt="español a braille" src={imagen2} />
            </div>
            <br /> Recomendamos volver a verificar las traducciones para obtener
            información crítica. Si tiene algún problema o tiene algún
            comentario, no dude en ponerse en contacto con nuestro equipo de
            soporte.
          </p>

          {/* Botones de enlace a GitHub */}
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
