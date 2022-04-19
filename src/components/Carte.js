import React from 'react'

const carte = ({idee}) => {
  return (
    <div class="card card-idea m-2" style={{width: "18rem"}}>
    <div class="card-body flex-column d-flex justify-content-between">
        <div class="card-block-titre">
          <h5 class="card-title fw-bold"></h5>
          <h6 class="card-subtitle mb-2 text-gris">
              approuvée / réfusée
          </h6>
        </div>
        <p class="card-text">
        </p>
        <div class="d-flex justify-content-between">
            <i
                class="bi bi-check-circle text-success card-link btn"
                id="${idButtonValider}"
                style="font-size: 2rem"
            ></i>
            <i
                class="bi bi-x-circle card-link btn"
                 id="${idButtonRefuser}"
                style="font-size: 2rem; color: #ce0033"
            ></i>
        </div>
    </div>
</div>
  )
}

export default carte