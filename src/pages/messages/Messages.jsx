import { Link } from "react-router-dom";
import "./Messages.scss";

function Messages() {
  const message =
    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor recusandae saepe veniam similique laboriosam quisquam dignissimos labore quidem? Perspiciatis omnis voluptates quaerat fuga alias, quos necessitatibus dolorem ab sint ipsa reiciendis animi vel error nesciunt laborum ad id, neque qui repellendus nulla accusantium! Tempore officiis quo velit odio tempora dicta ";

  return (
    <div className="messages">
      <div className="container">
        <h2>Messages</h2>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/:45">{message.substring(1, 100)}...</Link>
            </td>
            <td> 1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/:45">{message.substring(1, 100)}...</Link>
            </td>
            <td> 1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/:45">{message.substring(1, 100)}...</Link>
            </td>
            <td> 1 day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/:45">{message.substring(1, 100)}...</Link>
            </td>
            <td> 1 day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/:45">{message.substring(1, 100)}...</Link>
            </td>
            <td> 1 day ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>{message.substring(1, 100)}...</td>
            <td> 1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Messages;
