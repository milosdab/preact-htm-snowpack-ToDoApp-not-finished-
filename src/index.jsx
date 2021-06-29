/* Add JavaScript code here! */
import {h,render} from 'preact';




import nanorouter from 'nanorouter';
import Header from './components/Header/Header.jsx';





var router = nanorouter({ default: '/404' });




render(<Header />, document.getElementById("header"));






router.on('/', function (params) {
  //document.getElementById("trash").style.display = "none";
  })

router.on('/home', function (params) {
  document.getElementById("app").style.display = "";
    document.getElementById("trash").style.display = "none";
    import('./App').then(app =>{
      let Home = app.default;
      render(<Home />, document.getElementById("app"));
    })
    
  })

  router.on('/trash', function (params) {
    document.getElementById("trash").style.display = "";
    document.getElementById("app").style.display = "none";
    
    import('./components/TrashCard/TrashCard').then(trash =>{
      
      let trashcard = trash.default();
      render(trashcard, document.getElementById("trash"));
    })
    
  })


document.querySelectorAll("a").forEach((e) => {
    e.addEventListener("click", (event) => {
      event.preventDefault();
      
      
      if (event.target.innerText === "Trash") {
        
        
        
        router.emit('/trash')
      }if (event.target.innerText === "Home") {
        router.emit('/home')
      }

      
      
    });
  });

  router.emit('/');

  //window.location.pathname
