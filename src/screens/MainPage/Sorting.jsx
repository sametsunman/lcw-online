import React from 'react';
import { Popover, FormControlLabel, RadioGroup, Radio } from '@mui/material/';


const Sorting = ({sortingValue,setSortingValue}) => {

  
  const [sortingAnchorEl, setSortingAnchorEl] = React.useState(null);

  const onClickSortingPop = (event) => {
      setSortingAnchorEl(event.currentTarget);
  };

  const onCloseSortingPop = () => {
      setSortingAnchorEl(null);
  };

  const sortingId = Boolean(sortingAnchorEl) ? 'sorting-popover' : undefined;


  return (
    <div>
      <span aria-describedby={sortingId} className='sort' onClick={onClickSortingPop}>
                    <img src='/assets/icons/sort.svg' alt='sorting' /> Sırala
                </span>
        <Popover
                    id={sortingId}
                    open={Boolean(sortingAnchorEl)}
                    anchorEl={sortingAnchorEl}
                    onClose={onCloseSortingPop}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                >
                    <div style={{padding: '10px'}}>
                    <RadioGroup
                            className="sorting-radio"
                            aria-label="sorting"
                            value={sortingValue}
                            onChange={(event)=>setSortingValue(event.target.value)}
                            name="sorting-buttons-group"
                        >
                            <FormControlLabel value="default" control={<Radio />} label="Varsayılan" />
                            <FormControlLabel value="desc" control={<Radio />} label="Fiyata Göre Azalan" />
                            <FormControlLabel value="asc" control={<Radio />} label="Fiyata Göre Artan" />
                        </RadioGroup>
                    </div>
                </Popover>
    </div>
  );
};

export default Sorting;