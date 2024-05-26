let index = 0;
        function changeColor(){
            let colors = ["Red", "Orange", "Blue"]
            document.getElementsByTagName("body")[0].style.background = colors[index++];

            if(index > colors.length -2){
                index = 0;
            }
        }