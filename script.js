//initialize variables
var test = false ;
    
//add the current day to the header  
$("#currentDay").html(moment().format('dddd, MMMM Do'));
    
  //retrieve the day's plans from local storage and put them on the day planner

  let dayPlans = JSON.parse(localStorage.getItem("dayPlans"));

  if (dayPlans !== null) {
   dayPlanArr = dayPlans;
  } else {

  dayPlanArr = new Array(9);
  }

  //if the textarray is not empty update the textarea
  function updateTextArea(index) {
    if (dayPlanArr[index] !== "") {
     let txtEl = "#" + index;
     $(txtEl).val(dayPlanArr[index]);
    
    }
  }

  //hightlight text box based on time of day (past, present, or future)
  //index will match the ids for the buttons and textareas for ease of translation
  $( "textarea" ).addClass(function( index ) {
  
  var addedClass;

  //adjust the calendar hour each time through the loop 
  var caltime = 9 + index;
  
  //get the first two characters of the current time in military time for time of day
  var time = moment().format('HH:mm').charAt(0) + moment().format('HH:mm').charAt(1);
       
  //determine color class for each hour of the day by subtracting the 
  //current time from the calendar time for each hour of the work day 
  //if the difference is zero it is the current hour (red)
  //if the difference is positive it is a future hour (green)
  //if the difference is negative it is a past hour (gray)

 if (index === 0) {  
    if (parseInt(caltime) - parseInt(time) === 0) {
     addedClass = "present";
    } else if (parseInt(caltime) - parseInt(time) > 0) {
      addedClass = "future";
    }else if (parseInt(caltime) - parseInt(time) < 0) {
     addedClass = "past";
    }   
    updateTextArea(index);
    return addedClass;
 }
 if (index === 1) {  
    if (parseInt(caltime) - parseInt(time) === 0) {
     addedClass = "present";
    } else if (parseInt(caltime) - parseInt(time) > 0) {
      addedClass = "future";
    }else if (parseInt(caltime) - parseInt(time) < 0) {
     addedClass = "past";
    }  
    updateTextArea(index); 
    return addedClass;
 }
 if (index === 2) {  
    if (parseInt(caltime) - parseInt(time) === 0) {
     addedClass = "present";
    } else if (parseInt(caltime) - parseInt(time) > 0) {
      addedClass = "future";
    }else if (parseInt(caltime) - parseInt(time) < 0) {
     addedClass = "past";
    }
    updateTextArea(index);   
    return addedClass;
 }
 if (index === 3) {  
    if (parseInt(caltime) - parseInt(time) === 0) {
     addedClass = "present";
    } else if (parseInt(caltime) - parseInt(time) > 0) {
      addedClass = "future";
    }else if (parseInt(caltime) - parseInt(time) < 0) {
     addedClass = "past";
    }   
    updateTextArea(index);
    return addedClass;
 }
 if (index === 4) {  
    if (parseInt(caltime) - parseInt(time) === 0) {
     addedClass = "present";
    } else if (parseInt(caltime) - parseInt(time) > 0) {
      addedClass = "future";
    }else if (parseInt(caltime) - parseInt(time) < 0) {
     addedClass = "past";
    }   
    updateTextArea(index);
    return addedClass;
 }
 if (index === 5) {  
    if (parseInt(caltime) - parseInt(time) === 0) {
     addedClass = "present";
    } else if (parseInt(caltime) - parseInt(time) > 0) {
      addedClass = "future";
    }else if (parseInt(caltime) - parseInt(time) < 0) {
     addedClass = "past";
    }
    updateTextArea(index);   
    return addedClass;
 }
 if (index === 6) {  
    if (parseInt(caltime) - parseInt(time) === 0) {
     addedClass = "present";
    } else if (parseInt(caltime) - parseInt(time) > 0) {
      addedClass = "future";
    }else if (parseInt(caltime) - parseInt(time) < 0) {
     addedClass = "past";
    }  
    updateTextArea(index); 
    return addedClass;
 }
 if (index === 7) {  
    if (parseInt(caltime) - parseInt(time) === 0) {
     addedClass = "present";
    } else if (parseInt(caltime) - parseInt(time) > 0) {
      addedClass = "future";
    }else if (parseInt(caltime) - parseInt(time) < 0) {
     addedClass = "past";
    }  
    updateTextArea(index); 
    return addedClass;
 }
 if (index === 8) {  
    if (parseInt(caltime) - parseInt(time) === 0) {
     addedClass = "present";
    } else if (parseInt(caltime) - parseInt(time) > 0) {
      addedClass = "future";
    }else if (parseInt(caltime) - parseInt(time) < 0) {
     addedClass = "past";
    }  
    updateTextArea(index); 
    return addedClass;
 }

});    

//When the any save button is clicked save the text to local storage 

$(document).on('click','button', function(event) {
  event.preventDefault();  

  //get the button id 
  let $index = $(this).attr('saveid');
  
  //create the id tag for the textarea retrieve from the id of the button
  let txtEl = "#" + $index
  let $value = $(txtEl).val();

  // if the value is not null then save to local storage 
  // a blank can be save so the textarea can be cleared if there is nothing 
  // to do in that hour
  if ($value != null) {
    dayPlanArr[$index] = $value;        
    localStorage.setItem("dayPlans", JSON.stringify(dayPlanArr));
  }

});   