import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../Style Quote Component/quote.css';

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


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect(props) {
  const {selectedTags} = props;
  const {handleTagChange} =  props;
  const {tags} = props;

  const handleChange = (e) =>{
    handleTagChange(e);
  }

  const theme = useTheme();
  return (
    <div>
   
      <FormControl sx={{ m: 1, width: 300 }} >
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={selectedTags}
          onChange={handleChange}
          input={<OutlinedInput label="Tags" />}
          MenuProps={MenuProps}
         
        >
          {tags.map((name) => (
            <MenuItem
              
              key={name}
              value={name}
              style={getStyles(name, tags, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    
    </div>
  );
}