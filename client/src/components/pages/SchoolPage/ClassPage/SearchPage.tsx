import React, { useEffect, useState } from 'react';
import type { Theme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { getAllClassesThunk } from '../../../../redux/slices/class/classesThunks';
import SearchClasses from '../../../ui/SearchClasses';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme): Record<string, string> {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip(): JSX.Element {
  const theme = useTheme();
  const [categorys, setCategorys] = useState<string[]>([]);
  const [time, setTime] = useState<string[]>([]);
  const [district, setDistrict] = useState<string[]>([]);
  const [districtName, setDistrictName] = useState<string[]>([]);
  const [personName, setPersonName] = useState<string[]>([]);
  const [timeName, setTimeName] = useState<string[]>([]);
  const [timeOutState, setTimeOutState] = useState(0);

  const dispatch = useAppDispatch();
  const classes = useAppSelector((state) => state.classes);

  useEffect(() => {
    void axios('/classes/all/categorys').then((res) => {
      setCategorys(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    void axios('/classes/all/time').then((res) => {
      setTime(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    void axios('/classes/all/district').then((res) => {
      setDistrict(res.data);
    });
  }, []);

  useEffect(() => {
    if (timeOutState) {
      clearTimeout(timeOutState);
    }
    const idTime = setTimeout(() => {
      void dispatch(getAllClassesThunk({ personName, timeName, districtName }));

      console.log('haha');
    }, 1000);
    setTimeOutState(idTime);
  }, [dispatch, personName, timeName, districtName]);

  const handleChange = (event: SelectChangeEvent<typeof personName>): void => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleChangeTime = (event: SelectChangeEvent<typeof personName>): void => {
    const {
      target: { value },
    } = event;
    setTimeName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleChangeDistrict = (event: SelectChangeEvent<typeof personName>): void => {
    const {
      target: { value },
    } = event;
    setDistrictName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  console.log(district);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Категория</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {categorys.map((name) => (
            <MenuItem key={name.category} value={name.category} style={getStyles(name, personName, theme)}>
              {name.category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Время</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={timeName}
          onChange={handleChangeTime}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {time.map((name) => (
            <MenuItem key={name.time} value={name.time} style={getStyles(name, personName, theme)}>
              {name.time}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Округ</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={districtName}
          onChange={handleChangeDistrict}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {district.map((name) => (
            <MenuItem key={name.district} value={name.district} style={getStyles(name, personName, theme)}>
              {name.district}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <SearchClasses classes={classes} />
    </div>
  );
}
