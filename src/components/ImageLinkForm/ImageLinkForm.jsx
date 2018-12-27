import React from "react";

const ImageLinkForm = ({ inputHandler, submitHandler }) => {
  return (
    <div>
      <form className="bg-light-red mw7 center pa4 br2-ns ba b--black-10">
        <label htmlFor="input_url" />
        <input
          id="input_url"
          className="f4 pa2 w-70 center"
          type="text"
          placeholder="Wklej link"
          onChange={inputHandler}
        />
        <button
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          onClick={submitHandler}
        >
          Szukaj
        </button>
      </form>
    </div>
  );
};

export default ImageLinkForm;
