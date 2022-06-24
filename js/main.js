import {createAdExamples} from './data.js';
import {createPopup} from './popup.js';
import {switchPageMode} from './form.js';

const adExamples = createAdExamples();
const popupPlace = document.querySelector('#map-canvas'); //сюда надо отрисовать 1 попап

//Отрисуйте один из сгенерированных DOM-элементов, например первый, в блок #map-canvas, чтобы проверить, что данные в разметку были вставлены корректно.
popupPlace.appendChild(createPopup(adExamples[0]));

//функция для деактивации формы и фильтров карты
switchPageMode(true);
