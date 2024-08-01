// Insertion des élements dans le pdf

function genererPDF(){
    //variables
    let nom_client=document.getElementById("customer").value
    let nom_produit=document.getElementById("name").value
    let tva=document.getElementById("tva").value
    let pu=document.getElementById("pu").value
    let qte=document.getElementById("qte").value
    let rem=document.getElementById("rem").value
    const ht=pu*qte;
    const ttc=ht*(1+tva);
    const nap=rem-ttc;
    const napr= nap<0 ?`vous me devez une somme ${-nap} `:nap;
    let body=document.querySelector("body")
    body.innerHTML=`<div class="fact1">
    <h2>Facture</h2>
    <div class="elements">
       <p>Nom du produit :<strong>${nom_produit}</strong></p>
       <p>Nom du client :<strong>${nom_client}</strong></p>
       <p>TVA :<strong>${tva}</strong></p>
       <p>Quantité :<strong>${qte}</strong></p>
       <p>PrixHT:<strong>${ht}</strong></p>
       <p>PrixTTC:<strong>${ttc}</strong></p>
       <p>Net a payer :<strong>${napr}</strong></p>
       <div class="certification">
           <p>Par SM</p>
           <img src="sm.png"/>
       </div>
    </div>
   </div>
   <div class="dnwld">
    <button onclick="donwald()">Telecharger le pdf</button>
    <button class="btn1"><a href="index.html">Faire une autre facture</a></button>
   </div>`    
}
let form=document.querySelector("form")
form.addEventListener("submit",(event)=>{
    let formulaire=document.querySelectorAll("form input")
    for(let i=0;i<formulaire.length;i++){
        if(formulaire[i].value===""){
            // btn.disabled=true;
          let p=document.querySelector(".para")
          p.innerHTML="veuillez sasir tous les champs";
          event.preventDefault();
          
        }else{
            genererPDF()
            //btn.disabled=false;
        }
      }
    }

)



function donwald(){
    var element = document.querySelector('.fact1');
    html2pdf()
    .from(element)
    .save()
}