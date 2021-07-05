import React , { useState } from "react";





function Card(){
    let [state , setState] = useState({
          data : [
            {id : 1 , title : 'alihamzehei' , body : 'alihanzehei body'},
            {id : 2 , title : 'alihamzehei 2' , body : 'alihanzehei body 2'},
            {id : 3 , title : 'alihamzehei 3' , body : 'alihanzehei body 3'},
        ],
        title : 'page 1',
        loding : false
    }

    )
  let [style , setStyle] = useState({
        backgroundColor : 'red' , 
        padding : '29px'
    })

   let changeState = (e) => {

    setState({
        data : [...state.data],
        loding : true
    })
     
        setTimeout(() => {
            let data = [
                {id : 8, title : 'alihamzehei 4' , body : 'alihanzehei body'},
                {id : 4 , title : 'alihamzehei 5' , body : 'alihanzehei body 2'},
                {id : 5 , title : 'alihamzehei 6' , body : 'alihanzehei body 3'},
            ]
            setState({
                data : [...state.data , ...data],
                loding : false
            })
        } ,3000)
    }
    let onmouse = () => {
        setStyle({
            backgroundColor : 'green' , 
            padding : '29px'
        })
    }
    let onleave = () => {
        setStyle({
            backgroundColor : 'red' , 
            padding : '29px'
        })
    }
    console.log(state.data)
    return (
        
        <div>
                <ul>
                {
                    state.data.map(data => <li key={data.id}>{data.title}</li>)
                    }
                    {state.loding 
                    ? <li >Login....</li>
                    : null
                    }
                </ul>
                <button style={style} onClick={changeState} 
                    onMouseEnter={onmouse}
                    onMouseLeave={onleave}
                >change</button>
        </div>
    )
}
// class Card extends Component{
//     state = {
//         title : 'alihamzehei zarnq'
//     }
//     constructor(){
//         super()
//         setTimeout(() => {
//             this.setState({title : 'developer'})
//         },2000)
//     }
//     render(){
//         return (
//             <div>{ this.state.title }</div>
//         )
//     }
// }
export default Card;