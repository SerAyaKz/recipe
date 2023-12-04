import React, { useEffect, useState } from "react";
import {
  Header,
  Footer,
  List,
  EmptyView,
  Pagination,
} from "../../components/common";
import { FilterPanel, SearchBar } from "../../components/Home";

import "./styles.css";

const Home = () => {
  const ITEMS_PER_PAGE = 9; // Set the number of records per page

  const instance = {
    baseURL: `https://unhatched-invoice.000webhostapp.com`,
  };
  const requests = {
    fetchTypes: `/type.txt`,
    fetchNations: `/nation.txt`,
    fetchReceipts: `/recipe.txt`,
    fetchIngredient: `/ingredient.txt`,
  };
  //fetch data
  const [ingList, setIngList] = useState([]);
  const [dataList, setDataList] = useState([]);

  const [type_receipts, setTypeofDish] = useState([]);
  const [nations, setNation] = useState([]);
  const [list, setList] = useState([]);
  const [ingListAuto, setIngListAuto] = useState([]);

  useEffect(() => {
    async function fetchTypes() {
      const data = await fetch(`${instance.baseURL}${requests.fetchTypes}`);
      const res = await data.json();
      setTypeofDish(res);
    }
    async function fetchNations() {
      const data = await fetch(`${instance.baseURL}${requests.fetchNations}`);
      const res = await data.json();
      setNation(res);
    }
    async function fetchReceipt() {
      const data = await fetch(`${instance.baseURL}${requests.fetchReceipts}`);
      const res = await data.json();
      setDataList(res);
    }
    async function fetchIngredient() {
      const data = await fetch(
        `${instance.baseURL}${requests.fetchIngredient}`
      );
      const res = await data.json();
      setIngList(res);
    }
    fetchIngredient();
    fetchReceipt();
    fetchNations();
    fetchTypes();
  }, []);

  //search bar
  const [searchInput, setSearchInput] = useState("");
  //filter
  const [selectedVegan, setSelectedVegan] = useState(null);

  const [selectedRating, setSelectedRating] = useState([0, 5]);
  const [selectedDiff, setSelectedDiff] = useState([0, 10]);
  const [selectedView, setSelectedView] = useState([0, 10000]);
  //sort
  const [sortOption, setSortOption] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedList = list.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  //handle Filter
  const handleSelectVegan = (event, value) =>
    !event ? null : setSelectedVegan(event);

  const handleNullVegan = () => setSelectedVegan(null);

  const handleChangeCheckedType = (type_id) => {
    const typeStateList = type_receipts;
    const changeCheckedTypes = typeStateList.map((item) =>
      item.type_id === type_id ? { ...item, checked: !item.checked } : item
    );
    setTypeofDish(changeCheckedTypes);
  };

  const handleChangeCheckedNation = (nation_id) => {
    const nationStateList = nations;
    const changeCheckedNations = nationStateList.map((item) =>
      item.nation_id === nation_id ? { ...item, checked: !item.checked } : item
    );
    setNation(changeCheckedNations);
  };
  const handleChangeIngre = (event, value) => {
    setIngListAuto(event);
  };
  const handleChangeDiff = (event, value) => {
    setSelectedDiff(event);
  };
  const handleSort = (event, value) => {
    setSortOption(event);
  };
  const handleSortAsc = (event, value) => {
    setSortOrder(event);
  };
  const handleChangeRating = (event, value) => {
    setSelectedRating(event);
  };
  const handleChangeView = (event, value) => {
    setSelectedView(event);
  };
  //apply
  const applyFilters = () => {
    let updatedList = dataList;
    // vegan Filter
    if (selectedVegan) {
      updatedList = updatedList.filter(
        (item) =>
          item.isvegan + 4 === selectedVegan.length ||
          item.isvegetarian + 9 === selectedVegan.length
      );
    }
    //type filter
    const typeofDishChecked = type_receipts
      .filter((item) => item.checked)
      .map((item) => item.type_id);

    if (typeofDishChecked.length) {
      updatedList = updatedList.filter((item) =>
        typeofDishChecked.includes(item.type_id)
      );
    }
    //filter nation
    const nationChecked = nations
      .filter((item) => item.checked)
      .map((item) => item.nation_id);

    if (nationChecked.length) {
      updatedList = updatedList.filter((item) =>
        nationChecked.includes(item.nation_id)
      );
    }
    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.recipe_name
            .toLowerCase()
            .search(searchInput.toLowerCase().trim()) !== -1
      );
    }
    // Diff Filter
    const minPriceDiff = selectedDiff[0];
    const maxPriceDiff = selectedDiff[1];

    updatedList = updatedList.filter(
      (item) =>
        item.difficulty >= minPriceDiff && item.difficulty <= maxPriceDiff
    );

    //Ratings Filter
    const minRatings = selectedRating[0];
    const maxRatings = selectedRating[1];

    updatedList = updatedList.filter(
      (item) => item.rating >= minRatings && item.rating <= maxRatings
    );
    // View Filter
    const minPriceView = selectedView[0];
    const maxPriceView = selectedView[1];

    updatedList = updatedList.filter(
      (item) =>
        item.recipe_view >= minPriceView && item.recipe_view <= maxPriceView
    );

    //ingre

    if (ingListAuto) {
      let result = [];

      for (var i in ingListAuto) result.push(" " + ingListAuto[i].id);
      result = result.map(Number);

      updatedList = updatedList.filter((item) =>
        result.every((element) => {
          return item.ingredient.includes(element);
        })
      );
    }
    // Sorting
    if (sortOption) {
      updatedList = [...updatedList].sort((a, b) => {
        const aValue = a[sortOption];
        const bValue = b[sortOption];

        if (typeof aValue === "string") {
          return sortOrder === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        } else {
          return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
        }
      });
    }
    setList(updatedList);
    setCurrentPage(1);
  };
  //useEffect
  useEffect(() => {
    applyFilters();
  }, [
    searchInput,
    type_receipts,
    nations,
    selectedVegan,
    selectedDiff,
    selectedView,
    selectedRating,
    ingListAuto,
    sortOption,
  ]);

  return (
    <div>
      <Header />
      <div className="searchbar">
        {/* Search Bar */}
        <SearchBar
          value={searchInput}
          changeInput={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div class="main">
        <div class="filter">
          <FilterPanel
            selectedVegan={selectedVegan}
            selectVegan={handleSelectVegan}
            type_receipts={type_receipts}
            changeCheckedType={handleChangeCheckedType}
            nations={nations}
            changeCheckedNation={handleChangeCheckedNation}
            selectedDiff={selectedDiff}
            changeDiff={handleChangeDiff}
            selectedRating={selectedRating}
            changeRating={handleChangeRating}
            selectedView={selectedView}
            changeView={handleChangeView}
            nullifyVegan={handleNullVegan}
            ingList={ingList}
            changeIngre={handleChangeIngre}
            ingListAuto={ingListAuto}
            sortOption={sortOption}
            handleSort={handleSort}
            sortOrder={sortOrder}
            handleSortAsc={handleSortAsc}
          />
        </div>
        <div class="gap"></div>
        <div className="home_list-wrap">
          {list ? (
            <List
              list={paginatedList}
              type_receipts={type_receipts}
              nations={nations}
              ingList={ingList}
            />
          ) : (
            <EmptyView />
          )}
          {list && (
            <Pagination
              currentPage={currentPage}
              totalItems={list.length}
              itemsPerPage={ITEMS_PER_PAGE}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
