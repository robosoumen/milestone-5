console.log('hello')

function makeYellow(){
            document.body.style.backgroundColor = 'yellow'
        }
        function makeRed(){
            document.body.style.backgroundColor = 'red'
        }

        // option 3 get element by id and then set on click

        const btnMakeBlue = document.getElementById('btn-make-blue');
        // console.log(btnMakeBlue)
        btnMakeBlue.onclick = function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }

        //option 3 different types
        const btnMakePurple = document.getElementById('btn-make-purple');
    //    console.log(btnMakePurple)
    btnMakePurple.onclick = makePurple;

    function makePurple(){
        document.body.style.backgroundColor = 'purple'
    }