  let display = document.getElementById("display")
        
        function appendValue (value){
            display.value += value;
        }
        function clearDisplay(){
            display.value = "";
        }

        function deleteLast(){
            display.value = display.value.slice(0, -1);
        }
        function squareRoot(){
            if(display.value !== ""){
                display.value = Math.sqrt(display.value);
            }
            else{
                display.value = "Error";
            }
        }
        function percentage(){
            if(display.value !== ""){
                display.value = display.value / 100;
            }
            else{
                display.value = "Error";
            }
        }
        function square(){
            if ( display.value !== ""){
                display.value = display.value ** 2;
            }
            else{
                display.value = "Error";
            }
        }
        function calculate(){
            try{
                display.value = eval(display.value);
            }
            catch {
                display.value ="Error";
            }
        }