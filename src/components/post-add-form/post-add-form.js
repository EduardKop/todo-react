import React from "react";

const postAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="о чем вы думаете сейчас?"
        className="form-control new-post-label"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Добавить
      </button>
    </form>
  );
};

export default postAddForm;
