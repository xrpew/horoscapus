const roote = document.getElementById("root");

export const usabilidades = (data, dataAdd) => {
  const coloresAvaliables= ['silver','black','gray','white','maroon','red','purple','fuchsia','green','lime','olive','yellow','navy','blue','teal','aqua','orange' ,'aliceblue','antiquewhite','aquamarine','azure','beige','bisque','blanchedalmond','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkgrey','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkslategrey','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dimgrey','dodgerblue','firebrick','floralwhite','forestgreen','gainsboro','ghostwhite','gold','goldenrod','greenyellow','grey','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgray','lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightslategrey','lightsteelblue','lightyellow','limegreen','linen','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','oldlace','olivedrab','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','skyblue','slateblue','slategray','slategrey','snow','springgreen','steelblue','tan','thistle','tomato','turquoise','violet','wheat','whitesmoke','yellowgreen','rebeccapurple']
  let colorificado = "";
  let color = data.color.toLowerCase();
  let colorNew = color.split(" ");


  if (coloresAvaliables.includes(color)) {
    colorificado = color;
  } else if (coloresAvaliables.includes(colorNew[0] + colorNew[1])) {
    colorificado = colorNew[0] + colorNew[1];
  } else if (coloresAvaliables.includes(colorNew[0])) {
    colorificado = colorNew[0];
  } else if (coloresAvaliables.includes(colorNew[1])) {
    colorificado = colorNew[1];
  } else {
    // colorificado= 'black'
    colorificado = "rgba(0, 0, 0, 0.377)";
  }

  roote.innerHTML = `
        <div class='box_information'>
        <div class='background1'></div>
        
        <h1>Hi, ${
          dataAdd[0][0].toUpperCase() + dataAdd[0].substring(1).toLowerCase()
        }</h1>
        <hr />
        <div>
            <h4>Your fortune has something to tell you today ...</h4>
            <br />
            <p> ${data.description} </p>
        </div>
        <br />

        <hr />
        <div class='colorAdaptative'>
            <p >Your lucky color for today is:</p> 
            <br />
            <h1> ${data.color} </h1> 
            <br />

            <div class='color'>😉</div> 
            

            <p>use it well</p>
            
            
        </div>
        <hr />
        <p>OH, lets talk about moods, it seems that today you will be: <strong> ${data.mood} </strong> </p>
        <hr />
        <h1> ${data.lucky_number} </h1>

        <p>is your lucky number for today</p>
        <hr />
        <br />

        <p>You better pay close attention today at <strong> ${
          data.lucky_time
        } </strong> , interesting things will happen</p>

        <br />
        
        <button onclick="location.reload()"> Thanks for that ..  </button>
        
        </div>

        <style> .color {background-color: ${colorificado} </style>

        `;
};
