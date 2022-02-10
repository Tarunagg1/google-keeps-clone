import React, { Fragment, useState, useRef, useContext } from "react";
import { TextField, Box, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataContext } from "../../context/DataProvider";
import { v4 as uuid } from "uuid";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-color: #e0e0e0;
  width: 600px;
  border-radius: 8px;
  min-height: 30px;
  padding: 10px 15px;
`;

const note = {
  id: "",
  heading: "",
  text: "",
};

export default function Form() {
  const [showTextField, setshowTextField] = useState(false);
  const [addNote, setaddNote] = useState({ ...note, id: uuid() });
  const { setNotes } = useContext(DataContext);

  const containerRef = useRef();

  const onTextAreaClicked = () => {
    setshowTextField(true);
    containerRef.current.style.minHeight = "70px";
  };

  const handelClickAway = () => {
    setshowTextField(false);
    containerRef.current.style.minHeight = "30px";
    
    if(addNote.heading || addNote.text){
        setNotes((prevArr) => [addNote, ...prevArr]);
    }
    setaddNote({ ...note, id: uuid() });
  };

  const onTextChange = (e) => {
    setaddNote({ ...addNote, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <ClickAwayListener onClickAway={handelClickAway}>
        <Container ref={containerRef}>
          {showTextField && (
            <TextField
              placeholder="Title"
              variant="standard"
              name="heading"
              value={addNote.heading}
              inputProps={{ disabledUnderline: true }}
              style={{ marginBottom: 10 }}
              onChange={onTextChange}
            />
          )}

          <TextField
            onClick={onTextAreaClicked}
            placeholder="Take a note.."
            multiline
            maxRows={Infinity}
            variant="standard"
            name="text"
            value={addNote.text}
            inputProps={{ disabledUnderline: true }}
            onChange={onTextChange}
          />
        </Container>
      </ClickAwayListener>
    </Fragment>
  );
}
