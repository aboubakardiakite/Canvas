//fonction 'pooint de départ' : on crée l'image puis on exécute les dessins quand l'image est prête
const drawInCanvas = () => {
  // création de l'image et chargement de la source
  const timolImg = new Image();
  timolImg.src = "images/timoleon.jpg";

  timolImg.addEventListener('load',         // attend que l'image soit chargée avant de démarrer le dessin
                            () => makeDrawings(timolImg)
                           );
}

// fonction qui réalise les dessin dans le canvas
const makeDrawings = timolImg => {
  const myCanvas = document.getElementById("dessin");   // récupération de l'objet Canvas
  const context = myCanvas.getContext("2d");

  context.fillRect(20,80,500,100);
  context.drawImage(timolImg, 300,20);      // dessine l'image au point (300,20)

  context.fillStyle = "rgb(200,200,255)";
  context.fillRect(40, 200, 100, 100);

  context.fillStyle = "rgb(255,255,0)";
  context.fillRect(120, 150, 250, 50);

  // context.clearRect(50,100,180,180);    // efface une partir du canvas

  // context.clearRect(0, 0, myCanvas.width, myCanvas.height);  // efface tout le contenu du canvas
}

drawInCanvas(); // exécutée après le chargement de l'arbre DOM grâce à l'attribut defer de la balise <script>
                // sans defer, il faudrait faire :
                //      window.addEventListener('DOMContentLoaded', drawInCanvas);
