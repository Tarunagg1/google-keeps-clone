import { useContext } from "react";

import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { UnarchiveOutlined as Unarchive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 240px;
  margin: 8px;
  box-shadow: none;
`;

const DeleteNote = ({ note }) => {
  const { setNotes, setDeleteNotes,deleteNotes } = useContext(DataContext);

  const UnarchiveNote = (note) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(updatedNotes);
    setNotes((prevArr) => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    const deleteNotestemp = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(deleteNotestemp);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Unarchive
          fontSize="small"
          style={{ marginLeft: "auto",cursor: "pointer" }}
          onClick={() => UnarchiveNote(note)}
        />
        <Delete fontSize="small" style={{cursor: "pointer"}} onClick={() => deleteNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
