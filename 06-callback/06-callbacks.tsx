import React, {ChangeEvent, MouseEvent} from 'react';

/*
const callback = ()=> {
    alert('hey')
    return 12
}

window.setTimeout(callback, 1000)
*/

export const User = ()=> {
    const deleteUser=()=>{
        alert('Delete user')
    }
    const saveUser=(event: MouseEvent<HTMLButtonElement>)=>{
        alert(event.currentTarget.name)
    }

    const onAgeChanged =(event: ChangeEvent<HTMLInputElement>)=> {
        console.log('Age changed' + event.currentTarget.value)
    }

    const onBlurFocusHandler = ()=>{
        console.log('focus lost in this memories')
    }

    return <div>Dimych
    <button tabIndex={2} name={'delete'} onClick={saveUser}>x</button>
    <button tabIndex={3} name={'save'} onClick={saveUser}>x</button>
        <input onChange={onAgeChanged} type={"number"} onBlur={onBlurFocusHandler}/>
    </div>
}