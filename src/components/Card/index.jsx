import { HiBars3 } from "react-icons/hi2";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import plus from '../../assets/add-square.svg'
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Card() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [items, setItems] = useState([
    { id: "1", content: "Item 1" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [menu, setMenu] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        id: (items.length + 1).toString(),
        content: inputValue.trim(),
      };
      setItems([...items, newItem]);
      setInputValue("");
      setIsInputVisible(false);
    }
  };

  const handleToggleInput = () => {
    setIsInputVisible(!isInputVisible);
    if (isInputVisible && inputValue.trim() !== "") {
      handleAddItem();
    }
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
  };

  const handleAddColumn = () => {
    const newColumn = {
      id: (items.length + 1).toString(),
      content: "New Column",
    };
    setItems([...items, newColumn]);
  };

  const handleUpdateItem = (id, updatedContent) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, content: updatedContent } : item
    );
    setItems(updatedItems);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleMenuChange = (e) => {
    setMenu(e.target.value);
  };

  const handleMenuAction = () => {
    if (menu === "update") {
      // Update logic here
    } else if (menu === "delete") {
      // Delete logic here
    }
  };

  return (
    <>
      <div className='container mx-auto w-[1360px] pt-16'>
        <div className="bg-[#e2e2ea] p-6 rounded-lg">
          <h1 className="mb-6 font-bold text-2xl">Loyiha  ketma-ketligi</h1>

          <div className="flex flex-col gap-6">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="droppable">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="droppable-container flex flex-col gap-6"
                  >
                    {items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="draggable-item"
                          >
                            <div className="flex items-center gap-5 pb-4">
                              <span className="cursor-pointer text-2xl" onClick={() => handleDeleteItem(item.id)}><HiBars3 /></span>
                              <div className="flex gap-8">
                                <div className="flex flex-col gap-3">
                                  <label htmlFor="ustun" className="font-semibold">Ustun nomi</label>
                                  <input type="text" placeholder="Ustun nomi" id="ustun" className="input input-bordered w-[570px]" />
                                </div>

                                <div className="flex flex-col gap-3">
                                  <label htmlFor="key" className="font-semibold">Key</label>
                                  <input type="text" placeholder="Key" id="key" className="input input-bordered w-[570px]" />
                                </div>

                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>



            {/* <div className="flex items-center gap-10">
              <div className="flex items-center gap-5">
                
                <label htmlFor="ustun" className="flex flex-col gap-1 font-semibold">Ustun nomi
                  <input type="text" placeholder="Ustun nomi" id="ustun" className="input input-bordered w-[550px]" />
                </label>
              </div>
              <label htmlFor="key" className="flex flex-col gap-1 font-semibold">Key
                <input type="text" placeholder="Key" id="key" className="input input-bordered w-[550px]" />
              </label>
            </div> */}

            {/* <div className="flex items-center gap-10">
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
            </div> */}

          </div>

          <div className="text-blue-700 mt-10 flex gap-2 cursor-pointer w-32" onClick={handleAddColumn}><img src={plus} alt="plus image" />Ustun qo’shish</div>

        </div>
      </div>
    </>
  )
}

export default Card