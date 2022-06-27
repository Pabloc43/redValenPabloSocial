import React from 'react'
import Header1 from './header1';
import Header2 from './header2';


export default function Header(props) {
  let {logged, borrar} = props;
  return (
    <>
    {!logged ? <Header1 />: <Header2 borrar={borrar}/> 
  }
  </>
  )
}