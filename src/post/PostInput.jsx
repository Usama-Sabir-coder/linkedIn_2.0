import { useState, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  colors,
} from "@mui/material";

const PostInput = () => {
  const [open, setOpen] = useState(false);
  // const [selectedfile, setSelectedfile] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  // const fileChangeHandler = (e) => {
  //   const file = e.target.file[0];
  //   if (file) {
  //     const dataUrl = readFileAsDataUrl(file);
  //     setSelectedfile(dataUrl);
  //   }
  // };
  return (
    <>
      <div className="bg-white p-4 m-2 md:m-0 border border-gray-300 rounded-lg">
        <div className="flex items-center  gap-3">
          <img
            src="/Usama_Sabir.jpg"
            alt=""
            className="rounded-full w-12 h-12 object-cover"
          />
          <input
            type="text"
            placeholder="Start a post, try writting with AI"
            className=" rounded-full px-4 text-left  hover:bg-gray-100 h-12 w-full cursor-pointer"
            onClick={handleOpen}
          />
          <div className="w-full flex justify-between items-center  px-3 py-2">
            <span className=" hover:text-blue-600 cursor-pointer">
              <i class="fa-regular fa-image"></i>
            </span>
            &nbsp; &nbsp; &nbsp;
            <span className=" hover:text-blue-600 cursor-pointer">
              <i class="fa-brands fa-youtube"></i>
            </span>
            &nbsp; &nbsp; &nbsp;
            <span className=" hover:text-blue-600 cursor-pointer">
              <i class="fa-solid fa-newspaper"></i>
            </span>
          </div>
        </div>
      </div>

      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <header>
              <DialogTitle className="flex gap-2 ">
                <img
                  src="/Usama_Sabir.jpg"
                  alt=""
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div>
                  <h1 className="text-lg">Usama Sabir</h1>
                  <p className="text-xs">Post to anyone</p>
                </div>
              </DialogTitle>
            </header>
            <form>
              <div className="flex flex-col">
                <textarea
                  id="name"
                  name="inputText"
                  className="px-4 py-4 border-none text-lg focus-visible:ring-0"
                  placeholder="What do you want to talk about?"
                />
                &nbsp;
                <span className=" hover:text-blue-600">
                  <i class="fa-regular fa-face-smile"></i>
                </span>
                &nbsp;
                <div>
                  <span className=" hover:text-blue-600">
                    <i class="fa-brands fa-youtube"></i>
                  </span>
                  &nbsp; &nbsp;
                  <span className=" hover:text-blue-600">
                    <i class="fa-regular fa-image"></i>
                  </span>
                  &nbsp; &nbsp;
                  <span className=" hover:text-blue-600">
                    <i class="fa-regular fa-calendar-days"></i>
                  </span>
                  &nbsp; &nbsp;
                  <span className=" hover:text-blue-600">
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </div>
                <div className="my-4">
                  <img width={400} height={200} />
                </div>
              </div>
            </form>
          </DialogContent>
          <DialogActions className="mr-6 mb-4">
            <button
              onClick={handleClose}
              className="border px-4 text-white bg-blue-600 rounded-full"
            >
              Cancel
            </button>
            &nbsp;
            <button
              onClick={() => alert("Agreed!")}
              className="border  px-4 text-white bg-blue-600 rounded-full"
            >
              Post
            </button>
          </DialogActions>
          <br />
          <br />
          <br />
          <footer className="items-center">
            <div className="flex items-center gap-4">
              <input
                type="file"
                name="image"
                ref={fileInputRef}
                // onChange={fileChangeHandler}
                className="hidden"
              />
            </div>
            <div>
              <button onClick={handleClick} className="flex items-center gap-2">
                <img className="text-blue-500" />
                <div className="gap-2 absolute bottom-0 left-1/2 transform -translate-x-1/2 hover:text-blue-500 flex flex-row items-center px-3 py-2 hover:bg-gray-200 w-full justify-center">
                  <span>
                    <i className="fa-solid fa-image"></i>
                  </span>
                  <p>Media</p>
                </div>
              </button>
            </div>
          </footer>
        </Dialog>
      </div>
    </>
  );
};

export default PostInput;
