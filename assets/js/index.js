var txt=['Design','Code','Deploy']
var img=['assets/Images/webdesign-min.jpg','assets/Images/code.png','assets/Images/deployment-strategy-min.jpg']
var counter=0;
var img_counter=0;
(function()
{
    if(counter<txt.length)
    {
        setInterval(function()
        {
            document.getElementById('txt-anim').innerHTML=txt[counter];
            counter++;
            if(counter==txt.length)
            counter=0;
        },2000);
    }

})();
// function image()
// {
//     var id=document.getElementById('txtAnimImage');
//     var ig=id.getElementsByTagName("img");
//     if(img_counter<img.length)
//     {
//         setInterval(function()
//     {
//             console.log('this is image terversal');
//             ig.src+=img[img_counter];;
//             img_counter++;
//             if(img_counter==img.length)
//             img_counter=0;
//     },1000);
//     }
// }
// image();
function disp()
{
    setInterval(function(){
    if(window.innerWidth<600)
    {
        
        document.getElementById('meetteam').style.display='none';
        document.getElementById('myteam').style.display='block';
        document.getElementById('myteam').innerHTML='Meet Our Team';
    }
    else
    {
        document.getElementById('meetteam').style.display='block';
        document.getElementById('myteam').style.display='none';
    }       
},1000)
}    
disp();
function blink()
{
    var counter=0;
    if(counter<2)
    {
        setInterval(function()
        {
            if(counter==1)
                {
                    document.getElementById("blnk").style.display='none';
                    counter++;
                }
            if(counter==0)
            {
                document.getElementById("blnk").style.display="";
                counter++;
            }
            if(counter==2)
            counter=0;
            
        },100)
    }
}blink();
// $("#takemetomyteam").click(function(){
//     $('html,body').animate({
//         scrollTop:$("#myteam").offset().top},'slow');
// });
