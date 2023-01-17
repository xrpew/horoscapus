import React from 'react'

// const red = 'Orchid'

export const FirstApp = () => {
    
    
    const coloresAvaliables= ['silver','black','gray','white','maroon','red','purple','fuchsia','green','lime','olive','yellow','navy','blue','teal','aqua','orange' ,'aliceblue','antiquewhite','aquamarine','azure','beige','bisque','blanchedalmond','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkgrey','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkslategrey','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dimgrey','dodgerblue','firebrick','floralwhite','forestgreen','gainsboro','ghostwhite','gold','goldenrod','greenyellow','grey','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgray','lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightslategrey','lightsteelblue','lightyellow','limegreen','linen','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','oldlace','olivedrab','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','skyblue','slateblue','slategray','slategrey','snow','springgreen','steelblue','tan','thistle','tomato','turquoise','violet','wheat','whitesmoke','yellowgreen','rebeccapurple']
    let color = 'wheat'
    let colorificado = ''
    let colorNew = color.split(' ')

    if(coloresAvaliables.includes(color)){
        colorificado = color
    } 
    else if(coloresAvaliables.includes(colorNew[0]+colorNew[1])){
        colorificado = colorNew[0]
    }else if(coloresAvaliables.includes(colorNew[0])){
        colorificado = colorNew[0]
    }else if(coloresAvaliables.includes(colorNew[1])){
        colorificado = colorNew[0]
    }else{
        colorificado= 'rgba(0, 0, 0, 0.377)'
    }
    



  return (
        <div className='box_information'>
        
        <h1>Hi, Sergio!</h1>
        <hr />
        <h4>Your fortune has something to tell you today ...</h4>
        <p>'Stop thinking so much about your plans. Instead, let yourself relax and enjoy what's going on right now. Just when you're not turning over the details in your head, you'll see how everything will fall into place.'</p>
        <hr />
        <p >Your lucky color for today is: RED </p>
        <div className='color' style={{backgroundColor:colorificado}}></div>
        
        <p>use it well</p>
        <hr />
        <p>OH, lets talk about moods, it seems that today you will be: 'Relaxed'</p>
        <hr />
        <p>your luckiest number from today is the 45</p>
        <hr />
        <p>será mejor que pongas mucha atención el día de hoy a las 15hrs, pasarán cosas interesantes</p>

        {/* <p style={{color:red}}>Your lucky color for today is: RED </p> */}
        {/* <h1>Hi, ${dataAdd[0]} !</h1>
        <p>${data.description}</p>
        <p>${data.color}</p>
        <p>${data.compatibility}</p>
        <p>${data.lucky_number}</p>
        <p>${data.lucky_time}</p>
        <p>${data.mood}</p> */}

        <button onClick={()=>location.reload()}> back to ask </button>
        
        </div>
  )
}
