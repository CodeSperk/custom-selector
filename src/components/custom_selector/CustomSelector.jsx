/* eslint-disable react/prop-types */
import { useState } from "react";
import "./customSelector.css";

const CustomSelector = ({
  isClearable,
  isSearchable,
  isDisabled,
  options,
  value,
  placeholder,
  isGrouped,
  isMulti,
  onChangeHandler,
  onMenuOpen,
  onSearchHandler
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // to open & close menu
  const handleMenuOpen = () => {
    if(!isDisabled){
      setMenuOpen(!menuOpen);
      onMenuOpen();
    }
  }

  // to handle select and store items
  const handleOptionClick = (option) => {
    if (isMulti) {
      if (!value.some(val => val.value === option.value)) {
        onChangeHandler([...value, option]);
      }
    } else {
      onChangeHandler(option);
    }
    setMenuOpen(false);
  }

  // to clear 
    const handleClear = (e) => {
      e.stopPropagation();
      onChangeHandler(isMulti ? [] : null)
    }

  return (
    <div className={`kzui-select ${isDisabled ? 'kzui-select--disabled' : ''}`}>
      {/* Selected value field */}
      <div className='kzui-select__control' onClick={handleMenuOpen}>
        {isMulti ? (
          <div className='kzui-select__value'> 
            {value && value.map((val, idx) => (
              <span key={idx} className='kzui-select__multi-value'>
                {val.label}
                {isClearable && (
                  <span className="kzui-select__multi-value-clear"
                    onClick={() => onChangeHandler(value.filter(v => v !== val))}
                  >×</span>
                )}
              </span>
            ))}
          </div>
        ) : (
          <input
            type="text"
            placeholder={placeholder}
            value={value ? value.label : ''}
            disabled={isDisabled}
            readOnly
          />
        )}
        {/* to clear selected value */}
        {isClearable && value && (
          <span disabled={isDisabled} className="kzui-select__btn"
          onClick={handleClear}
          >Clear</span>
        )}
      </div>
      
      {/* dropdown menu */}
      {menuOpen && (
        <div className='kzui-select__menu'>
        {isGrouped ? (
          options.map(group => 
            <div key={group.label} className='kzui-select__group'>
              <div className='kzui-select__group-label'>{group.label}</div>
              {group.options?.map(option => 
                <div key={option.value} className='kzui-select__option'
                onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </div>
              )}
            </div>
           )
        ) : (
          options.map((option, idx) => 
            <div key={idx} className='kzui-select__option'
            onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          )
        )}
      </div>
      )
      }
    </div>
  )};

export default CustomSelector;
