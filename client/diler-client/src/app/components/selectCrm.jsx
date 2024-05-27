"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { selectCrmToggle, selectCrmSetFalse, fetchListSetFalse, setCrmName } from '../lib/store/slice/counter';

const Dropdown = () => {
  const items = [
    { text: "HubSpot", image: "/hubspot.svg" },
    { text: "Outreach", image: "/outreach2.png" },
    { text: "Salesforce", image: "/salesforce.svg" },
    { text: "Apollo", image: "/apollo.svg" },
    { text: "Spreadsheet", image: "/spreadsheet.svg" },
  ];

 
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const selectCrmBoolean = useSelector((state) => state.toggle.selectCrmBoolean);
  const handleSelect = (item) => {setSelectedItem(item);dispatch(selectCrmSetFalse()); dispatch(setCrmName(item.text));};
  const dispatch = useDispatch();
  return (
    <div className="tw-p-4 tw-relative tw-w-full tw-h-full bg-teal-600">
      <div className=" tw-w-full tw-h-full">
        <button
          type="button"
          className="tw-border-gray-600 tw-rounded-md tw-shadow-sm tw-w-full tw-h-full tw-text-left tw-flex tw-justify-between tw-items-center tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-offset-2 tw-focus:ring-indigo-500"
          onClick={() => {dispatch(selectCrmToggle()), dispatch(fetchListSetFalse())}}
        >
          <div className="tw-flex tw-items-center">
            <img
              src={selectedItem.image}
              alt={selectedItem.text}
              className="tw-mr-2 tw-h-7 tw-w-auto"
            />
            <span className="tw-text-black tw-font-bold">
              {selectedItem.text}
            </span>
          </div>
          <FontAwesomeIcon
            icon={selectCrmBoolean ? faChevronUp : faChevronDown}
            className="tw-h-5 tw-w-4 tw-text-gray-500"
          />
        </button>
      </div>

      {selectCrmBoolean && (
        <div className="tw-absolute tw-mt-1 tw-w-80 tw-rounded-md tw-bg-white tw-shadow-lg tw-pr-10 tw-z-40">
          <ul className="tw-max-h-60 tw-overflow-auto tw-rounded-md tw-py-1 tw-text-base tw-ring-1 tw-ring-black tw-ring-opacity-5 tw-focus:outline-none sm:tw-text-sm">
            {items.map((item) => (
              <li
                key={item.text}
                className="tw-cursor-pointer tw-select-none tw-relative tw-py-2 tw-pl-3 tw-pr-9 hover:tw-bg-indigo-600 hover:tw-text-white tw-text-black tw-font-bold"
                onClick={() => handleSelect(item)}
              >
                <div className="tw-flex tw-items-center border-b-indigo-500">
                  <img
                    src={item.image}
                    alt={item.text}
                    className="tw-mr-2 tw-h-3"
                  />
                  <span className="tw-font-normal tw-block tw-truncate">
                    {item.text}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
