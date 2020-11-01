import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AutocompleteInput from '../autocompleteInput/AutocompleteInput.component';

import { materialsImport } from "../../../reducks/materials/operations.js";
import { getMaterials, getMaterialsIdNameType, } from "../../../reducks/materials/selectors.js";
import { LOCATION_DATA } from "../TEST_locations.data.js";

import Autocomplete from '@material-ui/lab/Autocomplete';
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import { makeStyles } from "@material-ui/core/styles";

import './Filter.style.scss';

const Filter = (props) => {
  const dispatch = useDispatch();
  const {
    postalCodeChangeHandler,
    postalCodeClickHandler,
    postalCodeValue,
    postalCodeInputClear,
    materialsChangeHandler,
    materialsClickHandler,
    materialsValue,
    materialsInputClear,
  } = props;
  const [locations, setLocations] = useState(LOCATION_DATA);

  const [materials, setMaterilas] = useState({
    idNameType: [],
  });

  const state = useSelector((state) => state);
  let stateMaterials = getMaterialsIdNameType(state);

  useEffect(() => {
    dispatch(materialsImport());
  }, []);

  useEffect(() => {
    setMaterilas({
      ...materials,
      idNameType: stateMaterials,
    });
    // console.log(stateMaterials)
  }, [stateMaterials]);

    return (
      <div className="filter-section">
        <h2 className="WMpageH2">Welcome to savy recycling search!</h2>
        <p className="searchInstructionText">
          Search recycling solutions near you and get to know more about
          materials
        </p>
        <div className="WMpageInputsDiv">
          <div className="searchInput">
            <AutocompleteInput
              options={materials.idNameType.map(
                (material) => material.materialName
              )}
              placeholder="Item / Material name"
              change={materialsChangeHandler}
              click={materialsClickHandler}
              value={materialsValue}
              clear={materialsInputClear}
            />
          </div>

          <div className="searchInput">
            <AutocompleteInput
              options={locations.map((location) => location.postalCode)}
              placeholder="Postal Code"
              change={postalCodeChangeHandler}
              click={postalCodeClickHandler}
              value={postalCodeValue}
              clear={postalCodeInputClear}
            />
          </div>
        </div>
      </div>
    );
}

export default Filter;

          // <div className="searchInput">
          //   <Autocomplete
          //     id="materialInput"
          //     options={materials.idNameType.map(
          //       (material) => material.materialName
          //     )}
          //     renderInput={(params) => (
          //       <div ref={params.InputProps.ref}>
          //         <input
          //           id="materialSearch"
          //           type="text"
          //           placeholder="Item / Material name"
          //           {...params.inputProps}
          //         />
          //       </div>
          //     )}
          //   />
          // </div>;


          // <div className="searchInput">
          //   <input
          //     id="zipSearch"
          //     type="text"
          //     onChange={postalCodeChangeHandler}
          //     value={postalCodeValue}
          //     placeholder="Postal Code"
          //   />
          // </div>;

        // <div className="searchInput">
        //   <Autocomplete
        //     id="postalCodeInput"
        //     options={locations.map(
        //       (location) => location.postalCode
        //     )}
        //     onInputChange={(event, value) => {
        //       postalCodeChangeHandler(event, value);
        //     }}
        //     // style={{ width: 300 }}
        //     renderInput={(params) => (
        //       <div ref={params.InputProps.ref}>
        //         <input
        //           id="postalCodeSearch"
        //           type="text"
        //           onChange={postalCodeChangeHandler}
        //           value={postalCodeValue}
        //           placeholder="Postal Code"
        //           {...params.inputProps}
        //         />
        //       </div>
        //     )}
        //   />
        // </div>;

