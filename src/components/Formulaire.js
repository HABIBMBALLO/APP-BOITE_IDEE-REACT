// import React from 'react'
import React , { useState } from "react"
const Formulaire = (props) => {

    const handLechange = (e) => {
    setContenueSaisie(e.target.value);
    
    const longueurMax = 130;
    const [contenuSaisie, setContenueSaisie] = useState("");
    
}
  return (
      <h1>hello</h1>
    // <form>
    //     <div className="mb-3">
    //         <label forHtml="titre" className="form-label">Titre</label>
    //         <input
    //             type="text"
    //             className="form-control"
    //             id="titre"
    //             name="titre"
    //             placeholder="Ex : Brief......"
    //             aria-describedby="titreHelp"

    //         />
    //         <div id="titreHelp" className="form-text">
    //             Merci de donner un titre clair pourla
    //             catégorisation
    //         </div>
    //     </div>
    //     <div className="mb-3">
    //         <label forHtml="suggestion" className="form-label"
    //             >Suggestion</label
    //         >
    //         <textarea
    //             class="form-control"
    //             id="suggestion"
    //             name="suggestion"
    //             rows="3"
    //             onChange={handLechange}
    //         ></textarea>
    //         <p id="limite-text">
    //             const contenuSaisie {contenuSaisie.length}/130
    //             Contenu saisi
    //             <span id="text-progress">00 </span> / 130
    //         </p>
    //         <p id="text-restant">il vous reste {contenuSaisie}</p>
    //     </div>
    //     <button
    //         type="submit"
    //         id="btn-suggestion"
    //         className="btn btn-danger float-end"
    //         style="background-color: #ce0033"
    //     >
    //         Envoyer
    //     </button>
    // </form>
  );
}

export default Formulaire;