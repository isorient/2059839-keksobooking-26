const mapFiltersContainerElement = document.querySelector('.map__filters');

const mapFilterTypeElement = mapFiltersContainerElement.querySelector( '[name="housing-type"]');
const mapFilterPriceElement = mapFiltersContainerElement.querySelector( '[name="housing-price"]');
const mapFilterRoomNumberElement = mapFiltersContainerElement.querySelector( '[name="housing-rooms"]');
const mapFilterCapacityElement = mapFiltersContainerElement.querySelector( '[name="housing-guests"]');

const mapWifiFilterElement = mapFiltersContainerElement.querySelector( '#filter-wifi');
const mapDishwasherFilterElement = mapFiltersContainerElement.querySelector( '#filter-dishwasher');
const mapParkingFilterElement = mapFiltersContainerElement.querySelector( '#filter-parking');
const mapWasherFilterElement = mapFiltersContainerElement.querySelector( '#filter-washer');
const mapElevatorFilterElement = mapFiltersContainerElement.querySelector( '#filter-elevator');
const mapConditionerFilterElement = mapFiltersContainerElement.querySelector( '#filter-conditioner');

const filterPriceRange = {
  low:{
    min:0,
    max:10000
  },
  middle:{
    min:10000,
    max:50000
  },
  high:{
    min:50000
  }
};

const filterPrice = (price) => {
  switch (mapFilterPriceElement.value) {
    case 'any':
      return true;
    case 'low':
      return  filterPriceRange.low.min <= price < filterPriceRange.low.max;
    case 'middle':
      return filterPriceRange.middle.min <= price < filterPriceRange.middle.max;
    case 'high':
      return filterPriceRange.high.min <= price;
  }
};

const filterType = (type) => mapFilterTypeElement.value === 'any' || mapFilterTypeElement.value === type;
const filterRoomsNumber = (roomsNumber) => mapFilterRoomNumberElement.value === 'any' || Number(mapFilterRoomNumberElement.value) === roomsNumber;
const filterCapacity = (guests) => mapFilterCapacityElement.value === 'any' || Number(mapFilterCapacityElement.value) === guests;

const filterFeature = (features, featureElement) => {
  if (featureElement.checked) {
    if (features === undefined) {
      return false;
    } else if (!features.includes(featureElement.value)) {
      return false;
    }
  }
  return true;
};

const filterData = (array) =>
  array
    .filter((ad) =>
      filterType(ad.offer.type)
      && filterPrice(ad.offer.price)
      && filterRoomsNumber(ad.offer.rooms)
      && filterCapacity(ad.offer.guests)
      && filterFeature(ad.offer.features, mapWifiFilterElement)
      && filterFeature(ad.offer.features, mapDishwasherFilterElement)
      && filterFeature(ad.offer.features, mapParkingFilterElement)
      && filterFeature(ad.offer.features, mapWasherFilterElement)
      && filterFeature(ad.offer.features, mapElevatorFilterElement)
      && filterFeature(ad.offer.features, mapConditionerFilterElement)
    );

const onMapFilterInputChange = (actions, array) => actions(filterData(array));

const setMapFiltersListener = (actions, array) => mapFiltersContainerElement.addEventListener('change', () => onMapFilterInputChange(actions, array));

export {
  setMapFiltersListener
};
