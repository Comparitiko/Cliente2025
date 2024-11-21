/**
 * Recupera un elemento de la página web.
 * @param selector {string} Selector de elemento.
 * @returns {HTMLElement}
 */
export const $ = (selector) => document.querySelector(selector)

/**
 * Recupera varios elementos de la página web.
 * @param selector {string} Selector de elementos.
 * @returns {NodeList<HTMLElement>}
 */
export const $$ = (selector) => document.querySelectorAll(selector)

/**
 * Crear o modificar cookie con su nombre valor y los dias en los que expirara
 * @param cname {string} nombre de la cookie
 * @param cvalue {string} valor de la cookie
 * @param exdays {number} numero de dias en los que expirara
 */
export const setCookie = (cname, cvalue, exdays) => {
  const date = new Date();
  date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires}:path=/`
}

/**
 * Recuperar cookie por su nombre
 * @param cname {string} nombre de la cookie
 * @returns {string|null}
 */
export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}