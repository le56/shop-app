import React from 'react'
import { Datacontect } from '../Store/GlobalStore';

const Loading = () =>{
    const {state, dispatch} = React.useContext(Datacontect);
    const {notify} = state;
    return (
        <>
        {notify.loading && <div className="position-fixed w-100 h-100 text-center loading" style={{background:'#0008', coler:'white', top:'0',left:'0',zIndex:'9'}}>
            <svg width="205" height="250" viewBox="0 0 40 50">
                <polygon strokeWidth="1" stroke="#fff" fill="none" points="20,1 40,40 1,40"></polygon>
                <text>Loading</text>
            </svg>
        </div>}
        </>
    )
}
export default Loading