import React, { useEffect, useState } from "react";
import icon1 from "../../Assets/icon.svg";
import icon2 from "../../Assets/icon (1).svg";
import icon3 from "../../Assets/icon (2).svg";
import icon4 from "../../Assets/icon (3).svg";
import Paginate from "../../Component/Paginate/Index";
import LoadTable from "../../Component/Loaders/LoadTable";
import filter from "../../Assets/filter-results-button.svg";
import { toast } from "react-toastify";
import axios from "axios";
import authHeader from "../../Utils/headers";
import dateFormat from 'dateformat';
 

function Users() {
  const [load, setLoad] = useState(false);
  const [list, setList] = useState<any>({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);

  const getUsers = async () => {
    setLoad(true);
    try {
      const res = await axios.get(
        "https://api.json-generator.com/templates/0Zzyy3IZxGas/data?delay=5",
        { headers: authHeader() }
      );
      if (res) {
        console.log(res.data);
        setList(res.data);
        setLoad(false);
      }
    } catch (err) {
      toast.error("Error in fetching Data");
      setLoad(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getUsers();
  }, []);

  return (
    <div className="users">
      <div className="title">Users</div>
      <div className="box">
        <div className="box-container">
          <img src={icon1} alt="icon" />
          <h3>{"users"}</h3>
          <h2>{"2,456"}</h2>
        </div>
        <div className="box-container">
          <img src={icon2} alt="icon" />
          <h3>Active Users</h3>
          <h2>{"2,456"}</h2>
        </div>
        <div className="box-container">
          <img src={icon3} alt="icon" />
          <h3>Users with Loans</h3>
          <h2>12,400</h2>
        </div>
        <div className="box-container">
          <img src={icon4} alt="icon" />
          <h3>Users with Savings</h3>
          <h2>102,400</h2>
        </div>
      </div>

      <div className="table-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>
                  Organisation{" "}
                  <span>
                    <img src={filter} alt="filter" />
                  </span>
                </th>
                <th>
                  Username{" "}
                  <span>
                    <img src={filter} alt="filter" />
                  </span>
                </th>
                <th>
                  email{" "}
                  <span>
                    <img src={filter} alt="filter" />
                  </span>
                </th>
                <th>
                  phonenumber{" "}
                  <span>
                    <img src={filter} alt="filter" />
                  </span>
                </th>
                <th>
                  date joined{" "}
                  <span>
                    <img src={filter} alt="filter" />
                  </span>
                </th>
                <th>
                  status{" "}
                  <span>
                    <img src={filter} alt="filter" />
                  </span>
                </th>
                <th></th>
              </tr>
            </thead>
            {!load && list?.length > 0 && (
              <tbody>
                {list?.slice(0,10).map((tr: any, i: number) => (
                  <tr key={tr.id}>
                    <td>{tr.profile.company}</td>
                    <td>{tr.username}</td>
                    <td>{tr.email}</td>
                    <td>{tr.profile.phone}</td>

                    <td>
                      {dateFormat(tr.createdAt, "mmm dd, yyyy | h:MM TT")}
                    </td>
                    <td>{tr.status}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
        {!load && list?.meta?.last_page > 1 && (
          <Paginate
            currentPage={page}
            totalCount={list?.meta?.total}
            pageSize={limit}
            lastPage={list?.meta?.last_page}
            onSelect={(p: number) => setPage(Number(p))}
            onNext={(p: number) => setPage(p)}
            onPrev={(p: number) => setPage(p)}
            changeLimit={(p: string) => setLimit(Number(p))}
          />
        )}
        {load && <LoadTable />}
      </div>
    </div>
  );
}

export default Users;
