import './Message.scss'

function Message() {
    const breadCrumbs = "Messages> John Doe >"
  return (
    <div className='message'>
        <div className="container">
            <span>{breadCrumbs}</span>
            <div className="messages">
                <div className="item">
                    <img src="https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur  et pariatur tempora quisquam beatae. Modi ipsa, quod voluptatibus soluta dolore dolores excepturi.</p>
                </div>
                <div className="item our">
                    <img src="https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <p>Lorem ipsum dolor, sit amet t pariatur tempora quisquam beatae. Modi ipsa, quod voluptatibus soluta dolore dolores excepturi.</p>
                </div>
                <div className="item ">
                    <img src="https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae explicabo aut unde cum! Maiores voluptatum incidunt doloribus et pariatur tempora quisquam beatae. Modi ipsa, quod voluptatibus soluta dolore dolores excepturi.</p>
                </div>
                <div className="item our">
                    <img src="https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur  et pariatur tempora quisquam beatae. Modi ipsa, quod voluptatibus soluta dolore dolores excepturi.</p>
                </div>
                <div className="item">
                    <img src="https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur  et pariatur tempora quisquam beatae. Modi ipsa, quod voluptatibus soluta dolore dolores excepturi.</p>
                </div>
                
            </div>

            <hr />

            <div className="writeMessage">
                <input type="text" placeholder='Your message' />
                <button>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Message