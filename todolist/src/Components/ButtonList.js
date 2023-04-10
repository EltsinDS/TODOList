import React from "react";

function btnType(props) {
  switch (props.type) {
    case "check": {
      return props.checked === true ? "check_box_outline_blank" : "check_box";
    }
    case "archive": {
      return props.inArchive === true ? "folder_open" : "folder";
    }
    case "delete": {
      return "delete";
    }
    case "edit": {
      return "edit";
    }
    case "theme": {
      return props.lightTheme === true ? "dark_mode" : "light_mode";
    }
    case "done": {
      return "done";
    }
    case "close": {
      return "close";
    }
    default: {
      return null;
    }
  }
}

function ButtonList(props) {
  return (
    <span className="material-symbols-outlined" value={props.id}>
      {btnType(props)}
    </span>
  );
}

export default ButtonList;
