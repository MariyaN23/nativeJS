import React, {useState} from 'react';

type StreetType = {
    title: string
}

type AddressType = {
    street: StreetType
}

type LessonsType = {
    title: string
    nameL?: string
}

export type ManType = {
    name: string
    age: number
    lessons: LessonsType[]
    address: AddressType
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useDimychState(m: string) {
    return [m, function (){}]
}

function useDimychState2(m: string) {
    return { message: m,
        setMessage: function (){}
    }
}

export const Destructuring: React.FC<PropsType> = ({title, man, ...props}) => {
    /*const {title, man: {name} } = props*/
    /*const {title} = props
    const {name} = props.man*/

    const [message, setMessage] = useDimychState('Hello')

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
            <div>{props.car.model}</div>
        </div>
    );
};