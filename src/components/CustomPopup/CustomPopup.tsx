export const CustomPopup = (
  title: string,
  urlImage: string,
  width: number,
  high: number,
  updateViews: () => void
) => {
  const opciones = `width=${width},height=${high},top=${
    window.innerHeight / 2 - high / 2
  },left=${window.innerWidth / 2 - width / 2}`;
  const contenidoPopup = `
      <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
            
            <title>${title}</title>
        </head>
        <body style="margin: 0;">
          <div class="container mt-2" >
            <img src="${urlImage}" class="img-fluid" style="max-width: 70%; display: flex; margin: auto; border-radius: 5px" >
            <div class="text-center mt-3">
              <button class="btn btn-primary" onclick="handleClickOk()">OK</button>
              <button class="btn btn-secondary" onclick="window.close()">Cerrar</button>
            </div>
          </div>

          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

          <script>
            function handleClickOk() {
              window.opener.postMessage('', '*');
              window.close();
            }
          </script>
        </body>
      </html>
    `;
  const popup = window.open('', '', opciones);
  popup?.document.write(contenidoPopup);

  window.addEventListener('message', () => {
    updateViews();
  });
};
