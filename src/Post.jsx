import React from 'react'

function Post(props) {
    console.log(props);
    console.log(props.student);
    console.log(props.score);
  return (
    <>
    { <h2> Porfile : {props.myID} </h2> }
    { <h2>{props.children}</h2> }
    {<p>Content from Post</p>}
    { <h2>student Name : {props.student}</h2>}
    {<h3> score : {props.score}</h3> }
    </>
  )
}

export default Post