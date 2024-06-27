import { Link } from "react-router-dom";
import "./MyGigs.scss";

function MyGigs() {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="top">
            <h2>Gigs</h2>
            <Link className="addBtn" to="/add">Add Gig</Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Actions</th>
          </tr>

          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td> $89</td>
            <td> 563</td>
            <td>
              <img src="/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td> $89</td>
            <td> 563</td>
            <td>
              <img src="/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td> $89</td>
            <td> 563</td>
            <td>
              <img src="/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td> $89</td>
            <td> 563</td>
            <td>
              <img src="/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td> $89</td>
            <td> 563</td>
            <td>
              <img src="/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Gig1</td>
            <td> $89</td>
            <td> 563</td>
            <td>
              <img src="/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
