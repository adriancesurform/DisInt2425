    document.addEventListener("DOMContentLoaded", function() {
        const changeBgDiv = document.querySelector('.changebg-img');
        const changeBg = document.querySelector('.changebg');
        const navbarTitle = document.getElementById('navbar-title');
        const navbarSubtitle = document.getElementById('navbar-subtitle');
        const navbarMenuImg = document.querySelector('.navbar-ellipse-img');
        const navbarEllipse = document.querySelector('.navbar-ellipse');
        const navbarChangeBg = document.querySelector('.navbar-changebg');
        let valor = true;

        document.body.style.transition = 'background-color 0.5s ease';
        changeBg.style.transition = '0.3s ease'

        changeBgDiv.addEventListener('click', function() {
            if (valor) {
                document.body.style.backgroundColor = '#454545';

                changeBgDiv.style.background = "url('icons/moon.png') no-repeat center center";
                changeBgDiv.style.backgroundSize = '';

                changeBg.style.marginLeft = '35px';
                changeBg.style.backgroundColor = '#454545';

                navbarTitle.style.color = 'white';

                navbarSubtitle.style.color = 'white';

                navbarMenuImg.style.background = "url('icons/appwhite.png') no-repeat center center";
                navbarMenuImg.style.backgroundSize = '';

                navbarEllipse.style.backgroundColor = "#454545";
                navbarEllipse.style.border = "2px solid #696969";

                navbarChangeBg.style.backgroundColor = "#454545";
                navbarChangeBg.style.border = "2px solid #696969";

                valor = !valor;            
            }
            else {
                document.body.style.backgroundColor = '';

                changeBg.style.marginLeft = '';
                changeBg.style.backgroundColor = '';

                changeBgDiv.style.background = "";
                changeBgDiv.style.backgroundSize = '';
                
                navbarTitle.style.color = '';

                navbarSubtitle.style.color = '';

                navbarMenuImg.style.background = "";
                navbarMenuImg.style.background = "";

                navbarEllipse.style.backgroundColor = "";
                navbarEllipse.style.border = "";

                navbarChangeBg.style.backgroundColor = "";
                navbarChangeBg.style.border = "";

                valor = !valor;      
                
            }
        });
    });
    
