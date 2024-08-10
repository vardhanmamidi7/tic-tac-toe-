let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");


let turno=true;
 
const winstreaks=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
   
];

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
       console.log("box was clicked");
       if(turno==true)
       {
        box.innerText="O";
        turno=false;
       }
       else
       {
        box.innerText="X";
        turno=true;
       }
      box.disabled=true;
      checkwinner();
    });
});

let disablebox=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
let enablebox=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};


const resetgame=()=>
{
    turn0=true;
    enablebox();
    msgcontainer.classList.add("hide");
};

  

let showwinner=(pos)=>
{  msg.innerText=`Congratulations winner ${pos}`;
   msgcontainer.classList.remove("hide");
   disablebox();
  

};

let checkwinner=()=>
{
    for(let pattern of winstreaks)
    {
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;
       
       if(pos1!="" && pos2!= "" && pos3!="")
       {
          if(pos1==pos2&&pos2==pos3)
          {
            showwinner(pos1);
             
          }
       }
    }
};

newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);


