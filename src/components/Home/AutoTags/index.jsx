import React, { useState } from "react";
import "./style.css";

const TagInputAutoSuggest = ({
  suggestions,
  selectedTags = [],
  changeIngre,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectTag = (selectedTag) => {
    setInputValue("");
    changeIngre([...selectedTags, selectedTag]);
    console.log(selectedTags);
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = selectedTags.filter((tag) => tag !== tagToRemove);
    changeIngre(updatedTags);
    console.log(selectedTags);
  };

  const isTagSelected = (tag) => {
    return (
      selectedTags &&
      selectedTags.some((selectedTag) => selectedTag.id === tag.id)
    );
  };

  const filteredSuggestions = suggestions.filter(
    (suggestion) =>
      suggestion.name.toLowerCase().includes(inputValue.toLowerCase()) &&
      !isTagSelected(suggestion)
  );

  return (
    <div className="autotags">
      <div className="autotags">
        {selectedTags.map((tag) => (
          <span key={tag.id} className="selected-tag">
            {tag.name}
            <button onClick={() => handleRemoveTag(tag)}>&times;</button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search ingredients"
      />
      <ul className="autotagsul">
        {filteredSuggestions.map((suggestion) => (
          <li
            className="autotagsli"
            key={suggestion.id}
            onClick={() => handleSelectTag(suggestion)}
          >
            {suggestion.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TagInputAutoSuggest;
