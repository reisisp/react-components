import React, { ChangeEvent, DragEvent, FC, MouseEvent, useRef, useState } from "react";

export const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: DragEvent<HTMLDivElement>) => {
        console.log('Drag')
    }

    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('drop')
    }

    const leavehandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder="1" />
            <input ref={inputRef} type="text" placeholder="2" />

            <button onClick={clickHandler}>click</button>
            <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: 'green' }}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leavehandler}
                onDragOver={dragWithPreventHandler}
                style={{ width: 200, height: 200, background: isDrag ? 'green' : 'red', marginTop: '20px' }}></div>
        </div>
    )
}