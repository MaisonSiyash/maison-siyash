/* =========================================
   CONFIGURACIÓN
========================================= */

/*
  IMPORTANTE:

  Cambia este número por tu número real
  de WhatsApp.

  Formato:

  Código de país + número

  Ejemplo Colombia:

  573104168744
*/

const WHATSAPP_NUMBER = "573104168744";


/* =========================================
   ELEMENTOS
========================================= */

const productGrid =
  document.getElementById("productGrid");

const searchInput =
  document.getElementById("searchInput");

const clearSearch =
  document.getElementById("clearSearch");

const genderFilter =
  document.getElementById("genderFilter");

const brandFilter =
  document.getElementById("brandFilter");

const familyFilter =
  document.getElementById("familyFilter");

const sortFilter =
  document.getElementById("sortFilter");

const resetFilters =
  document.getElementById("resetFilters");

const emptyReset =
  document.getElementById("emptyReset");

const emptyState =
  document.getElementById("emptyState");

const resultsCount =
  document.getElementById("resultsCount");

const productModal =
  document.getElementById("productModal");

const modalProduct =
  document.getElementById("modalProduct");

const modalClose =
  document.getElementById("modalClose");

const modalOverlay =
  document.getElementById("modalOverlay");

const whatsappFloating =
  document.getElementById("whatsappFloating");


/* =========================================
   PRECIO
========================================= */

function formatPrice(price) {

  if (!price || price === 0) {

    return "Consultar precio";

  }

  return new Intl.NumberFormat(
    "es-CO",
    {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0
    }
  ).format(price);

}


/* =========================================
   LLENAR FILTROS
========================================= */

function populateFilters() {

  const genders =
    [...new Set(
      perfumes.map(
        perfume => perfume.genero
      )
    )].sort();


  const brands =
    [...new Set(
      perfumes.map(
        perfume => perfume.marca
      )
    )].sort();


  const families =
    [...new Set(
      perfumes.map(
        perfume => perfume.familia
      )
    )].sort();


  genders.forEach(gender => {

    genderFilter.innerHTML +=
      `<option value="${gender}">
        ${gender}
      </option>`;

  });


  brands.forEach(brand => {

    brandFilter.innerHTML +=
      `<option value="${brand}">
        ${brand}
      </option>`;

  });


  families.forEach(family => {

    familyFilter.innerHTML +=
      `<option value="${family}">
        ${family}
      </option>`;

  });

}


/* =========================================
   CREAR TARJETA
========================================= */

function createProductCard(perfume) {

  const badge =
    perfume.destacado
      ? `<span class="product-badge">
          Destacado
        </span>`
      : "";


  return `

    <article
      class="product-card"
      data-id="${perfume.id}"
    >

      ${badge}

      <div class="product-image">

        <img
          src="${perfume.imagen}"
          alt="${perfume.nombre}"
          loading="lazy"
        >

      </div>


      <div class="product-info">

        <p class="product-brand">

          ${perfume.marca}

        </p>


        <h3 class="product-title">

          ${perfume.nombre}

        </h3>


        <p class="product-family">

          ${perfume.familia}

        </p>


        <p class="product-price">

          ${formatPrice(perfume.precio)}

        </p>

      </div>

    </article>

  `;

}


/* =========================================
   MOSTRAR PRODUCTOS
========================================= */

function renderProducts(products) {

  productGrid.innerHTML = "";

  resultsCount.textContent =
    `${products.length} ${
      products.length === 1
        ? "perfume encontrado"
        : "perfumes encontrados"
    }`;


  if (products.length === 0) {

    emptyState.hidden = false;

    return;

  }


  emptyState.hidden = true;


  productGrid.innerHTML =
    products
      .map(createProductCard)
      .join("");


  const cards =
    document.querySelectorAll(".product-card");


  cards.forEach(card => {

    card.addEventListener(
      "click",
      () => {

        const id =
          Number(card.dataset.id);

        openProduct(id);

      }
    );

  });

}


/* =========================================
   FILTRAR PRODUCTOS
========================================= */

function filterProducts() {

  const search =
    searchInput.value
      .toLowerCase()
      .trim();


  const gender =
    genderFilter.value;


  const brand =
    brandFilter.value;


  const family =
    familyFilter.value;


  let filtered =
    perfumes.filter(perfume => {

      const searchableText = [

        perfume.nombre,
        perfume.marca,
        perfume.genero,
        perfume.familia,
        perfume.descripcion,
        ...perfume.notas

      ]
        .join(" ")
        .toLowerCase();


      const matchesSearch =
        searchableText.includes(search);


      const matchesGender =
        !gender ||
        perfume.genero === gender;


      const matchesBrand =
        !brand ||
        perfume.marca === brand;


      const matchesFamily =
        !family ||
        perfume.familia === family;


      return (

        matchesSearch &&

        matchesGender &&

        matchesBrand &&

        matchesFamily

      );

    });


  filtered =
    sortProducts(filtered);


  renderProducts(filtered);

}


/* =========================================
   ORDENAMIENTO
========================================= */

function sortProducts(products) {

  const sorted =
    [...products];


  switch (sortFilter.value) {


    case "name-asc":

      sorted.sort(
        (a, b) =>
          a.nombre.localeCompare(
            b.nombre,
            "es"
          )
      );

      break;


    case "name-desc":

      sorted.sort(
        (a, b) =>
          b.nombre.localeCompare(
            a.nombre,
            "es"
          )
      );

      break;


    case "price-asc":

      sorted.sort(
        (a, b) =>
          (a.precio || Infinity) -
          (b.precio || Infinity)
      );

      break;


    case "price-desc":

      sorted.sort(
        (a, b) =>
          (b.precio || 0) -
          (a.precio || 0)
      );

      break;


    default:

      sorted.sort(
        (a, b) =>
          Number(b.destacado) -
          Number(a.destacado)
      );

  }


  return sorted;

}


/* =========================================
   ABRIR PRODUCTO
========================================= */

function openProduct(id) {

  const perfume =
    perfumes.find(
      item => item.id === id
    );


  if (!perfume) return;


  const notes =
    perfume.notas
      .map(
        note =>
          `<span class="tag">
            ${note}
          </span>`
      )
      .join("");


  const whatsappMessage =
    encodeURIComponent(

      `Hola, estoy interesado en el perfume ${perfume.nombre} de ${perfume.marca}. ¿Me gustaría recibir más información?`

    );


  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;


  modalProduct.innerHTML = `

    <div class="modal-layout">


      <div class="modal-image">

        <img
          src="${perfume.imagen}"
          alt="${perfume.nombre}"
        >

      </div>


      <div class="modal-info">


        <p class="modal-brand">

          ${perfume.marca}

        </p>


        <h2 class="modal-title">

          ${perfume.nombre}

        </h2>


        <p class="modal-description">

          ${perfume.descripcion}

        </p>


        <div class="detail-section">

          <span class="detail-label">

            Género

          </span>

          <div class="tags">

            <span class="tag">

              ${perfume.genero}

            </span>

          </div>

        </div>


        <div class="detail-section">

          <span class="detail-label">

            Familia olfativa

          </span>

          <div class="tags">

            <span class="tag">

              ${perfume.familia}

            </span>

          </div>

        </div>


        <div class="detail-section">

          <span class="detail-label">

            Características

          </span>

          <div class="tags">

            ${notes}

          </div>

        </div>


        <p class="modal-price">

          ${formatPrice(perfume.precio)}

        </p>


        <a
          href="${whatsappUrl}"
          target="_blank"
          class="whatsapp-product"
        >

          Consultar por WhatsApp

        </a>


      </div>

    </div>

  `;


  productModal.classList.add("active");

  productModal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";

}


/* =========================================
   CERRAR MODAL
========================================= */

function closeProduct() {

  productModal.classList.remove(
    "active"
  );


  productModal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "";

}


modalClose.addEventListener(
  "click",
  closeProduct
);


modalOverlay.addEventListener(
  "click",
  closeProduct
);


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeProduct();

    }

  }
);


/* =========================================
   EVENTOS FILTROS
========================================= */

searchInput.addEventListener(
  "input",
  filterProducts
);


genderFilter.addEventListener(
  "change",
  filterProducts
);


brandFilter.addEventListener(
  "change",
  filterProducts
);


familyFilter.addEventListener(
  "change",
  filterProducts
);


sortFilter.addEventListener(
  "change",
  filterProducts
);


/* =========================================
   LIMPIAR BÚSQUEDA
========================================= */

clearSearch.addEventListener(
  "click",
  () => {

    searchInput.value = "";

    filterProducts();

    searchInput.focus();

  }
);


/* =========================================
   RESET FILTROS
========================================= */

function resetAllFilters() {

  searchInput.value = "";

  genderFilter.value = "";

  brandFilter.value = "";

  familyFilter.value = "";

  sortFilter.value = "featured";


  filterProducts();

}


resetFilters.addEventListener(
  "click",
  resetAllFilters
);


emptyReset.addEventListener(
  "click",
  resetAllFilters
);


/* =========================================
   WHATSAPP FLOTANTE
========================================= */

whatsappFloating.href =
  `https://wa.me/${WHATSAPP_NUMBER}`;


/* =========================================
   INICIAR
========================================= */

populateFilters();

filterProducts();