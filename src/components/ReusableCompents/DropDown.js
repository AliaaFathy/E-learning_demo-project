import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from "react";

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
function getStyles(option, desiredName, theme) {
    return {
        fontWeight:
            desiredName.indexOf(option) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

 function DropDown({content,options,style}) {
    const theme = useTheme();
    const [desiredValue, setDesiredValue] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setDesiredValue(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 2, width: 300, mt: 3 ,borderRadius:4,background:'#f3f3f3'}}>
                <Select
                    IconComponent = {ExpandMoreIcon}
                    multiple
                    displayEmpty
                    value={desiredValue}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>{content}</em>;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    sx={style}
                >
                    <MenuItem disabled value="">
                        <em>Placeholder</em>
                    </MenuItem>
                    {options.map((option) => (
                        <MenuItem
                            key={option}
                            value={option}
                            style={getStyles(option, desiredValue, theme)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
export default DropDown