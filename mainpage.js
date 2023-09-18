function responsiveNav() 
{
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") 
    {
      x.className += " responsive";
    } 
    else 
    {
      x.className = "topnav";
    }
  }

  // window.onscroll = function() {scrollFunction()};

  // function scrollFunction() 
  // {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  //   {
  //     document.getElementById("navbar").style.top = "1000px";
  //     console.log('pog');
  //   }
  // }