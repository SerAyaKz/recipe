import React, { useEffect, useState } from "react";
import { veganList } from "../../../constants";
import { CheckboxProton } from "../CheckboxProton";
import SliderProton from "../SliderProton";
import FilterListToggle from "../FilterListToggle";
import TagInputAutoSuggest from "../AutoTags";
import "./styles.css";

const FilterPanel = ({
  selectedVegan,
  selectVegan,
  type_receipts,
  changeCheckedType,
  nations,
  changeCheckedNation,
  selectedDiff,
  changeDiff,
  selectedView,
  changeView,
  selectedRating,
  changeRating,
  nullifyVegan,
  ingList,
  changeIngre,
  ingListAuto,
  sortOption,
  handleSort,
  sortOrder,
  handleSortAsc,
}) => {
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [nationDropdownOpen, setNationDropdownOpen] = useState(false);

  const toggleTypeDropdown = () => {
    setTypeDropdownOpen(!typeDropdownOpen);
  };

  const toggleNationDropdown = () => {
    setNationDropdownOpen(!nationDropdownOpen);
  };

  return (
    <div>
      <div className="input-group">
        <label htmlFor="sortDropdown">Sort by:</label>
        <select
          id="sortDropdown"
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">-- Select Sort Option --</option>
          <option value="recipe_name">Recipe Name</option>
          <option value="nation_id">Nation</option>
          <option value="type_id">Type</option>
          <option value="difficulty">Difficulty</option>
          <option value="recipe_view">Recipe Views</option>
          <option value="created_date">Created Date</option>
          <option value="rating">Rating</option>
        </select>

        <label htmlFor="sortOrder">Order:</label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => handleSortAsc(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      {/*Type*/}
      <div className="input-group">
        <div className="label" onClick={toggleTypeDropdown}>
          Type
        </div>
        {typeDropdownOpen && (
          <div className="checkbox-container">
            {type_receipts.map((typeofDish) => (
              <CheckboxProton
                key={typeofDish.type_id}
                id={typeofDish.type_id}
                name={typeofDish.type_name}
                checked={typeofDish.checked}
                changeChecked={changeCheckedType}
              />
            ))}
          </div>
        )}
      </div>
      {/*Nation*/}
      <div className="input-group">
        <div className="label" onClick={toggleNationDropdown}>
          Nation
        </div>
        {nationDropdownOpen && (
          <div className="checkbox-container">
            {nations.map((nation) => (
              <CheckboxProton
                key={nation.nation_id}
                id={nation.nation_id}
                name={nation.nation_name}
                checked={nation.checked}
                changeChecked={changeCheckedNation}
              />
            ))}
          </div>
        )}
      </div>
      {/*Vegan And vegat*/}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={veganList}
          value={selectedVegan}
          selectToggle={selectVegan}
        />

        <button className="glow-on-hover" type="button" onClick={nullifyVegan}>
          Clear
        </button>
      </div>
      {/*diff*/}
      <div className="input-group">
        <SliderProton
          name={"Difficulty"}
          value={selectedDiff}
          changeDiff={changeDiff}
          max={10}
        />
      </div>
      <div className="input-group">
        <SliderProton
          name={"Rating"}
          value={selectedRating}
          changeDiff={changeRating}
          max={5}
        />
      </div>
      <div className="input-group">
        <SliderProton
          name={"View"}
          value={selectedView}
          changeDiff={changeView}
          max={10000}
        />
      </div>
      <div className="input-group">
        <TagInputAutoSuggest
          suggestions={ingList}
          selectedTags={ingListAuto}
          changeIngre={changeIngre}
        ></TagInputAutoSuggest>
      </div>
    </div>
  );
};

export default FilterPanel;
