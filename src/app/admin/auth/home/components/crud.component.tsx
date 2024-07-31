"use client";

import { update_contratar } from "@/actions/user/usuario.action";
import FuegoSvg from "@/components/svg/icons/fuego.svg";
import TachoSvg from "@/components/svg/icons/tracho.svg";
import Whatsapp from "@/components/svg/icons/whatsapp.svg";
import { contratar } from "@prisma/client";
import React, {
    Dispatch,
    SetStateAction,
    useState,
    DragEvent,
    useEffect,
} from "react";
import { toast } from "sonner";

const CustomKanban = ({ datos }: { datos: contratar[] }) => {
    return (
        <div className="h-auto w-auto grid place-items-center    text-neutral-50">
            <Board datos={datos} />
        </div>
    );
};

const Board = ({ datos }: { datos: contratar[] }) => {
    // console.log(datos);
    // DEFAULT_CARDS;
    const [cards, setCards] = useState<CardType[]>([]);
    // Loading
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        // ❌ Agregar la Columna en la tabla de datos de contratar
        // ❌ Pasar al componente un solo tipo de dato
        const addcolum: CardType[] = datos.map((index, item) => {
            return {
                ...index,
                Column: index.Column === "Nuevo" ? "Nuevo" : "Pendiente",
            };
        });

        setCards(addcolum);
    }, []);

    const handleChick = async () => {
        // Grabar en base de datos
        setLoading(true);
        const res = await update_contratar(cards);

        if (!res) {
            toast.error("Error, en el Servidor...");
            setLoading(false);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
            return;
        }
        toast.success("Ok, Base de datos Actualizada...");
        setLoading(false);
    };

    return (
        <div className=" flex h-full w-auto gap-3  justify-center items-start p-12 ">
            <Column
                title="Nuevos"
                Column="Nuevo"
                headingColor="text-neutral-500"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="Pendientes"
                Column="Pendiente"
                headingColor="text-neutral-500"
                cards={cards}
                setCards={setCards}
            />
            <div className=" flex flex-col gap-5">
                <BurnBarrel setCards={setCards} />
                <button
                    className=" text-black px-4 py-2 rounded-[5px] bg-[var(--Color4)]"
                    onClick={() => handleChick()}
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Guardar"}
                </button>
            </div>
        </div>
    );
};

type ColumnProps = {
    title: string;
    headingColor: string;
    cards: CardType[];
    Column: ColumnType;
    setCards: Dispatch<SetStateAction<CardType[]>>;
};

const Column = ({
    title,
    headingColor,
    cards,
    Column,
    setCards,
}: ColumnProps) => {
    const [active, setActive] = useState(false);

    const handleDragStart = (e: DragEvent, card: CardType) => {
        e.dataTransfer.setData("cardId", card.id);
    };

    const handleDragEnd = (e: DragEvent) => {
        const cardId = e.dataTransfer.getData("cardId");

        setActive(false);
        clearHighlights();

        const indicators = getIndicators();
        const { element } = getNearestIndicator(e, indicators);

        const before = element.dataset.before || "-1";

        if (before !== cardId) {
            let copy = [...cards];

            let cardToTransfer = copy.find((c) => c.id === cardId);
            if (!cardToTransfer) return;
            cardToTransfer = { ...cardToTransfer, Column };

            copy = copy.filter((c) => c.id !== cardId);

            const moveToBack = before === "-1";

            if (moveToBack) {
                copy.push(cardToTransfer);
            } else {
                const insertAtIndex = copy.findIndex((el) => el.id === before);
                if (insertAtIndex === undefined) return;

                copy.splice(insertAtIndex, 0, cardToTransfer);
            }

            setCards(copy);
        }
    };

    const handleDragOver = (e: DragEvent) => {
        e.preventDefault();
        highlightIndicator(e);

        setActive(true);
    };

    const clearHighlights = (els?: HTMLElement[]) => {
        const indicators = els || getIndicators();

        indicators.forEach((i) => {
            i.style.opacity = "0";
        });
    };

    const highlightIndicator = (e: DragEvent) => {
        const indicators = getIndicators();

        clearHighlights(indicators);

        const el = getNearestIndicator(e, indicators);

        el.element.style.opacity = "1";
    };

    const getNearestIndicator = (e: DragEvent, indicators: HTMLElement[]) => {
        const DISTANCE_OFFSET = 50;

        const el = indicators.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();

                const offset = e.clientY - (box.top + DISTANCE_OFFSET);

                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            },
            {
                offset: Number.NEGATIVE_INFINITY,
                element: indicators[indicators.length - 1],
            }
        );

        return el;
    };

    const getIndicators = () => {
        return Array.from(
            document.querySelectorAll(
                `[data-column="${Column}"]`
            ) as unknown as HTMLElement[]
        );
    };

    const handleDragLeave = () => {
        clearHighlights();
        setActive(false);
    };

    const filteredCards = cards.filter(
        (c) => c.Column === Column && c.Eliminado === false
    );

    return (
        <div className=" column-draw shrink-0 overflow-auto h-[500px] w-[500px]">
            <div className="mb-3 flex items-center justify-between">
                <h3 className={`font-medium ${headingColor}`}>{title}</h3>
                <span className="rounded text-sm text-neutral-400">
                    {filteredCards.length}
                </span>
            </div>
            <div
                onDrop={handleDragEnd}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`h-full w-full transition-colors ${
                    active ? "bg-neutral-800/10" : "bg-neutral-800/0"
                } `}
            >
                {filteredCards.map((c) => {
                    return (
                        <Card
                            key={c.id}
                            {...c}
                            handleDragStart={handleDragStart}
                        />
                    );
                })}
                <DropIndicator beforeId={null} Column={Column} />
                {/* <AddCard Column={Column} setCards={setCards} /> */}
            </div>
        </div>
    );
};

type CardProps = CardType & {
    handleDragStart: Function;
};

const Card = ({
    Nombre,
    Calle,
    Casa,
    DNI,
    Eliminado,
    Numero,
    Plan,
    Telefono,
    id,
    Column,
    handleDragStart,
}: CardProps) => {
    const enviarPorWhatsApp = ({ msj, tel }: { msj: string; tel: string }) => {
        const url = `https://wa.me/${tel}?text=${msj}`;
        window.open(url, "_blank");
    };

    return (
        <>
            <DropIndicator beforeId={id} Column={Column} />
            {/* <div
                draggable="true"
                onDragStart={(e) => handleDragStart(e, { Nombre, id, Column })}
                className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
            >
                <p className="text-sm text-neutral-100">{Nombre}</p>
                <p className="text-sm text-neutral-100">Tel: {Telefono}</p>
                <p className="text-sm text-neutral-100">Tel: {Telefono}</p>
            </div> */}
            <div
                className="notification  w-auto mx-5  cursor-grab rounded border p-3 active:cursor-grabbing"
                draggable="true"
                onDragStart={(e) => handleDragStart(e, { Nombre, id, Column })}
            >
                <div className="notiglow"></div>
                <div className="notiborderglow"></div>
                <div className="notititle">{Nombre}</div>
                <div className="notibody">Tel: {Telefono}</div>
                <div className="notibody">
                    Dir: {Calle} {Numero} {Casa}
                </div>
                <div className="notibody">DNI: {DNI}</div>
                <div className="notibody">Plan: {Plan}</div>

                <div className=" absolute top-0 right-0 w-[25px] h-[25px] z-50 m-2">
                    <Whatsapp
                        className=" w-full h-full cursor-pointer"
                        fill="#25CD63"
                        onClick={() =>
                            enviarPorWhatsApp({
                                msj: `Hola, ${Nombre}%0AMe cominco desde netic. etc`,
                                tel: Telefono.toString(),
                            })
                        }
                    />
                </div>
            </div>
        </>
    );
};

type DropIndicatorProps = {
    beforeId: string | null;
    Column: string;
};

const DropIndicator = ({ beforeId, Column }: DropIndicatorProps) => {
    return (
        <div
            data-before={beforeId || "-1"}
            data-column={Column}
            className="my-0.5 h-0.5 w-full bg-violet-800 opacity-0"
        />
    );
};

const BurnBarrel = ({
    setCards,
}: {
    setCards: Dispatch<SetStateAction<CardType[]>>;
}) => {
    const [active, setActive] = useState(false);

    const handleDragOver = (e: DragEvent) => {
        e.preventDefault();
        setActive(true);
    };

    const handleDragLeave = () => {
        setActive(false);
    };

    const handleDragEnd = (e: DragEvent) => {
        const cardId = e.dataTransfer.getData("cardId");

        // Actualizar borrado logico
        // setCards((pv) => pv.filter((c) => c.id !== cardId));

        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === cardId ? { ...card, Eliminado: true } : card
            )
        );

        setActive(false);
    };

    return (
        <div
            onDrop={handleDragEnd}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`mt-10 grid h-52 w-52 shrink-0 place-content-center rounded border text-3xl ${
                active
                    ? "border-red-800 bg-red-800/20 text-red-500"
                    : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
            }`}
        >
            {active ? <FuegoSvg /> : <TachoSvg />}
        </div>
    );
};

type ColumnType = "Nuevo" | "Pendiente";

type CardType = {
    id: string;
    Column: ColumnType;
    Nombre: string;
    DNI: string;
    Telefono: string;
    Calle: string;
    Numero: number;
    Casa: string | null;
    Plan: number;
    Eliminado: boolean | null;
};

export default CustomKanban;
