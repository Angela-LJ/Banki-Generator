import React from 'react';
import { Button } from '../../../components/index';
import './cardsection.css'

export function OptionsColumnOne({ selectedTypeValue, handleTypeSelection }) {
  const buttonClassAdd = `column-btn`;
  return (
    <>
      <Button
        className={buttonClassAdd}
        id="javascriptQ"
        onClick={handleTypeSelection}
        selectedValue={selectedTypeValue}
        text="Javascript Questions"
      />
      <Button
        className={buttonClassAdd}
        id="gitQ"
        onClick={handleTypeSelection}
        selectedValue={selectedTypeValue}
        text="Git Questions"
      />
      <Button
        className={buttonClassAdd}
        id="pythonQ"
        onClick={handleTypeSelection}
        selectedValue={selectedTypeValue}
        text="Python Questions"
      />
      <Button
        className={buttonClassAdd}
        id="cQ"
        onClick={handleTypeSelection}
        selectedValue={selectedTypeValue}
        text="C Questions"
      />
    </>
  );
}

export function OptionsColumnTwo({ selectedTypeValue, handleTypeSelection }) {
  const buttonClassAdd = ``;
  return (
    <>
      <Button
        className={buttonClassAdd}
        id="javascriptP"
        onClick={handleTypeSelection}
        selectedValue={selectedTypeValue}
        text="Javascript Practice"
      />
      <Button
        className={buttonClassAdd}
        id="pythonP"
        onClick={handleTypeSelection}
        selectedValue={selectedTypeValue}
        text="Python Practice"
      />
      <Button
        className={buttonClassAdd}
        id="cP"
        onClick={handleTypeSelection}
        selectedValue={selectedTypeValue}
        text="C Practice"
      />
    </>
  )
}