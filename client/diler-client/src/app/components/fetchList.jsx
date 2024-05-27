'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchListSetFalse, fetchListToggle, selectCrmSetFalse, setlistName } from '../lib/store/slice/counter';

const Dropdown = () => {
  const items = [
    { key: '1', value: '1' },
    { key: '2', value: '2' },
    { key: '3', value: '3' },
    { key: '4', value: '4' },
    { key: '5', value: '5' }
  ];
  const [selectedItem, setSelectedItem] = useState('');


  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.toggle.fetchListBoolean);
  const handleSelect = (item) => {setSelectedItem(item);dispatch(fetchListSetFalse()); dispatch(setlistName(item));};


  const handleInputChange = (event) => {
    setSelectedItem(event.target.value); // Update selectedItem with input value
  };

  return (
    <div className="tw-mx-auto tw-w-full tw-max-w-md">
       <div className="tw-mt-0 tw-bg-slate-100 tw-px-3 tw-text-black tw-pt-0">Search Lists</div>
      <div className="tw-relative">
        <input
        type="text"
        className="tw-w-full tw-flex-grow tw-rounded-t-md tw-border tw-border-gray-300 tw-text-gray-700 tw-bg-white focus:tw-outline-none focus:tw-ring-0 focus:tw-border-gray-300"
        value={selectedItem} onClick={() => {dispatch(fetchListToggle()), dispatch(selectCrmSetFalse())}}  onChange={handleInputChange}
        />
        <div className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-3">
          <FontAwesomeIcon icon={faSearch} className="tw-h-4 tw-w-4 tw-text-gray-600" />
        </div>
        {isOpen && (
        <div className="tw-absolute tw-right-0 tw-top-full tw-w-full tw-rounded-b tw-border tw-border-gray-300 tw-bg-white tw-shadow-md tw-z-40" aria-label="Country">
          <div className="tw-mt-0 tw-bg-slate-100 tw-px-3 tw-text-gray-600 tw-pt-0">All sequence due task</div>
          <div className='tw-text-gray-600'>
            {items.map((item) => (
            <div className="tw-border-gray-100 hover:tw-bg-blue-500 tw-border-b tw-px-3" key={item.key} value={item.key} onClick={() => handleSelect(item.value)}>{item.value}</div>
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;