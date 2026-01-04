/* ===============================
   COLLECTION LOADER
   =============================== */

   const params = new URLSearchParams(window.location.search);
   const folder = params.get("folder");
   const title = params.get("title");
   
   const gallery = document.getElementById("gallery");
   const titleEl = document.getElementById("collectionTitle");
   
   if (titleEl) titleEl.textContent = title || "Portfólio";
   
   /*
    🔧 CONFIGURAÇÃO MANUAL DE IMAGENS
    Basta mudar os números conforme a pasta
   */
   
   const imagesCount = 12; // <<< MUDE AQUI QUANTAS FOTOS TEM
   
   for (let i = 1; i <= imagesCount; i++) {
     const img = document.createElement("img");
     img.src = `portfolio/${folder}/${i}.jpg`;
     img.loading = "lazy";
     img.alt = title;
   
     gallery.appendChild(img);
   }
   