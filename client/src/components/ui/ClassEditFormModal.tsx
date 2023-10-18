import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { useAppDispatch } from "../../redux/hooks";
import { editClassThunk } from "../../redux/slices/class/classesThunks";

export default function ClassEditFormModal({
  open,
  setOpen,
  idClass,
  inputs,
}): JSX.Element {
  const [categorys, setCategorys] = useState([]);
  const [formdata, setFormdata] = useState({});

  useEffect(() => {
    setFormdata((prev) => inputs);
  }, [inputs]);

  console.log("imputs in modal", formdata);
  const dispatch = useAppDispatch();

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormdata((prevFormdata) => ({
      ...prevFormdata,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (): void => {

    console.log(formdata);
    const saveData = {
      className: formdata.className,
      desription: formdata.desription,
      category: formdata.Category?.category,
      time: formdata.Time?.time,
      day: formdata.Day?.day,
      isAvailable: formdata.isAvailable,
      age: formdata.age,
      schoolId: idClass,
    }
    void dispatch(editClassThunk({ saveData, idClass }));
    setOpen(false);
  };

  useEffect(() => {
    void axios.get("/classes/all/categorys").then((res) => {
      setCategorys(res.data);
    });
  }, []);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Class Form</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <TextField
            label="Classname"
            name="className"
            value={formdata.className}
            onChange={handleChange}
          />
          <TextField
            label="Description"
            name="description"
            value={formdata.description}
            onChange={handleChange}
          />
          <Select
            label="Category"
            name="category"
            value={formdata.Category?.category}
            onChange={handleChange}
          >
            {/* <MenuItem value="Танцы">Танцы</MenuItem>
            <MenuItem value="Каратэ">Каратэ</MenuItem>
            <MenuItem value="Шахматы">Шахматы</MenuItem> */}
            {categorys.map((category) => (
              <MenuItem
                key={category.category}
                value={category.category}
              >
                {category.category}
              </MenuItem>
            ))}
          </Select>

          <Select
            label="Time"
            name="time"
            value={formdata.Time?.time}
            onChange={handleChange}
          >
            <MenuItem value="Утро">Утро</MenuItem>
            <MenuItem value="День">День</MenuItem>
            <MenuItem value="Вечер">Вечер</MenuItem>
          </Select>

          <Select
            label="Age"
            name="age"
            value={formdata.age}
            onChange={handleChange}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={2}>1</MenuItem>
            <MenuItem value={3}>2</MenuItem>
            <MenuItem value={4}>3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="11">11</MenuItem>
            <MenuItem value="12">12</MenuItem>
            <MenuItem value="13">13</MenuItem>
            <MenuItem value="14">14</MenuItem>
            <MenuItem value="15">15</MenuItem>
            <MenuItem value="16">16</MenuItem>
            <MenuItem value="17">17</MenuItem>
            <MenuItem value="18">18</MenuItem>
            <MenuItem value="19">19</MenuItem>
          </Select>

          <Select
            label="is Available"
            name="isAvailable"
            value={formdata.isAvailable}
            onChange={handleChange}
          >
            <MenuItem value="false">Доступно</MenuItem>
            <MenuItem value="true">Недоступно</MenuItem>
          </Select>

          <Select
            label="Day"
            name="day"
            value={formdata.Day?.day}
            onChange={handleChange}
          >
            <MenuItem value="Monday">Понедельник</MenuItem>
            <MenuItem value="Tuesday">Вторник</MenuItem>
            <MenuItem value="Wednesday">Среда</MenuItem>
            <MenuItem value="Thursday">Четверг</MenuItem>
            <MenuItem value="Friday">Пятница</MenuItem>
            <MenuItem value="Saturday">Суббота</MenuItem>
            <MenuItem value="Sunday">Воскресенье</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
