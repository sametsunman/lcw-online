import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { Grid, Popover, FormControlLabel, RadioGroup, Radio } from '@mui/material/';
import { Wrapper, Breadcrumb, Title, Menu, Products } from './../styles/MainPage.styles';
import Product from './../components/Common/Product'


const MainPage = () => {

    const { products } = useSelector((state) => state);

    const [sortingValue, setSortingValue] = useState("default");
    const [sortingAnchorEl, setSortingAnchorEl] = React.useState(null);

    const onClickSortingPop = (event) => {
        setSortingAnchorEl(event.currentTarget);
    };

    const onCloseSortingPop = () => {
        setSortingAnchorEl(null);
    };

    const sortingId = Boolean(sortingAnchorEl) ? 'sorting-popover' : undefined;

    return (
        <Wrapper>
            <Breadcrumb>
                <li>Ana sayfa</li>
                <li>Erkek</li>
                <li>Sweatshirt</li>
            </Breadcrumb>
            <Title>Erkek Sweatshirt Modelleri</Title>
            <Menu>
                <span className='product-count'>1234 ürün</span>
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
            </Menu>
            <Products>
                <Grid container spacing={3}>
                    {
                        products.sort((a, b) => sortingValue==='default' ? a.id - b.id : (sortingValue==='asc' ? a.price - b.price : b.price - a.price ))
                        .map(product => {
                            return <Grid key={product.id} item xs={3}>
                                <Product product={product} />
                            </Grid>
                        })
                    }
                </Grid>
            </Products>
        </Wrapper>
    )
}

export default MainPage
