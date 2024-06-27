import "./Add.scss";

function Add() {
  return (
    <div className="add">
      <div className="container">
        <h1>Add new Gig</h1>
        <div className="formContainer">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. i will do something i am really good at"
            />
            <label htmlFor="">Category</label>
            <select name="" id="">
              <option value="design">Design</option>
              <option value="coding">Coding</option>
              <option value="writing">Writing</option>
              <option value="Editiing">Editing</option>
            </select>
            <input type="file" />
            <label htmlFor="">Upload images</label>
            <input type="file" multiple />
            <label htmlFor="">Descriptin</label>
            <textarea name="" id="" rows={30} cols={30}></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Services Title</label>
            <input type="text" placeholder="e.g. One page design" />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" rows={9} cols={30}></textarea>
            <label htmlFor="">Delivery Time e.g. 3 days</label>
            <input type="number" min={1} />
            <label htmlFor="">Revision Number</label>
            <input type="number" min={1} />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. file uploading" />
            <input type="text" placeholder="e.g. setting up a domain" />
            <input type="text" placeholder="e.g. page hosting" />
            <label htmlFor="">Price</label>
            <input type="number" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
