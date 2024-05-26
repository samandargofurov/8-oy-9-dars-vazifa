import * as React from 'react';
import { HiBars3 } from "react-icons/hi2";
import plus from '../../assets/add-square.svg'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Card() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  function handleAdd() {
    console.log('ustun qoshildi')
  }

  return (
    <>
      <div className='container mx-auto w-[1360px] pt-16'>
        <div className="bg-[#e2e2ea] p-6 rounded-lg">
          <h1 className="mb-6 font-bold text-2xl">Loyiha  ketma-ketligi</h1>

          <div className="flex flex-col gap-6">

            <div className="flex items-center gap-10">
              <div className="flex items-center gap-5">
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <span className="cursor-pointer text-2xl"><HiBars3 /></span>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                  </Menu>
                </div>
                <label htmlFor="ustun" className="flex flex-col gap-1 font-semibold">Ustun nomi
                  <input type="text" placeholder="Ustun nomi" id="ustun" className="input input-bordered w-[550px]" />
                </label>
              </div>
              <label htmlFor="key" className="flex flex-col gap-1 font-semibold">Key
                <input type="text" placeholder="Key" id="key" className="input input-bordered w-[550px]" />
              </label>
            </div>

            <div className="flex items-center gap-10">
              <div className="flex items-center gap-5">
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <span className="cursor-pointer text-2xl"><HiBars3 /></span>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                  </Menu>
                </div>
                <label htmlFor="ustun" className="flex flex-col gap-1 font-semibold">Ustun nomi
                  <input type="text" placeholder="Ustun nomi" id="ustun" className="input input-bordered w-[550px]" />
                </label>
              </div>
              <label htmlFor="key" className="flex flex-col gap-1 font-semibold">Key
                <input type="text" placeholder="Key" id="key" className="input input-bordered w-[550px]" />
              </label>
            </div>

            <div className="flex items-center gap-10">
              <div className="flex items-center gap-5">
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <span className="cursor-pointer text-2xl"><HiBars3 /></span>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                  </Menu>
                </div>
                <label htmlFor="ustun" className="flex flex-col gap-1 font-semibold">Ustun nomi
                  <input type="text" placeholder="Ustun nomi" id="ustun" className="input input-bordered w-[550px]" />
                </label>
              </div>
              <label htmlFor="key" className="flex flex-col gap-1 font-semibold">Key
                <input type="text" placeholder="Key" id="key" className="input input-bordered w-[550px]" />
              </label>
            </div>

          </div>

          <div className="text-blue-700 mt-10 flex gap-2 cursor-pointer" onClick={handleAdd}><img src={plus} alt="plus image" />Ustun qo’shish</div>

        </div>
      </div>
    </>
  )
}

export default Card