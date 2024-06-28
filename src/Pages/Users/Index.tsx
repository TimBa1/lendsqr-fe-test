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
import dateFormat from "dateformat";
import { HiDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
import Modal from "../../Component/Modal/Index";

function Users() {
  const [load, setLoad] = useState(false);
  const [list, setList] = useState<any>({});
  const [filterState, setFilterState] = useState<any[]>(list);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);

  //Filters
  const [organization, setOrganization] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(true);

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

  useEffect(() => {
    if (list.length > 0) {
      setFilterState(list);
      setLoad(false);
    }
  }, [list]);


  const handleFilter = () => {
    const filteredList = Array.isArray(list)
      ? list.filter(
          (item: any) =>
            (!status || item.status === status) &&
            (!username || item.username === username) &&
            (!phone || item.profile.phone === phone) &&
            (!organization || item.profile.company === organization) &&
            (!email || item.email === email) &&
            (!date || item.createdAt === date)
        )
      : [];
    setFilterState(filteredList);
  };

  const reset = () => {
    setOrganization("");
    setDate("");
    setPhone("");
    setEmail("");
    setStatus("");
    setUsername("");
  };

  const badgeColor = (status: string) => {
    if (status.includes("Pending")) {
      return "yellow";
    } else if (status.includes("Active")) {
      return "green";
    } else if (status.includes("Inactive")) {
      return "red";
    } else if (status.includes("Blacklisted")) {
      return "black";
    } else {
      return "red";
    }
  };

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

      <div className="modal-head">
        {isOpen && (
          <Modal
            organization={organization}
            setOrganization={setOrganization}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            date={date}
            setDate={setDate}
            username={username}
            setUsername={setUsername}
            status={status}
            setStatus={setStatus}
            filter={() => {
              setIsOpen(false);
              handleFilter();
            }}
            reset={() => reset()}
          />
        )}
      </div>

      <div className="table-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>
                  Organisation{" "}
                  <span
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <img src={filter} alt="filter" />
                  </span>
                </th>
                <th>
                  Username{" "}
                  <span
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <img src={filter} alt="filter" />
                  </span>
                </th>
                <th>
                  email{" "}
                  <span
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <img src={filter} alt="filter" />
                  </span>
                </th>
                <th>
                  phonenumber{" "}
                  <span
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <img src={filter} alt="filter" />
                  </span>
                </th>
                <th>
                  date joined{" "}
                  <span
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <img src={filter} alt="filter" />
                  </span>
                </th>
                <th>
                  status{" "}
                  <span
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <img src={filter} alt="filter" />
                  </span>
                </th>
                <th></th>
              </tr>
            </thead>
            {!load && list?.length > 0 && (
              <tbody>
                {filterState?.slice(0, 10).map((tr: any, i: number) => (
                  <tr key={tr.id}>
                    <td>{tr.profile.company}</td>
                    <td>{tr.username}</td>
                    <td>{tr.email}</td>
                    <td>{tr.profile.phone}</td>

                    <td>
                      {dateFormat(tr.createdAt, "mmm dd, yyyy | h:MM TT")}
                    </td>
                    <td>
                      <div className={`badge ${badgeColor(tr.status)}`}>
                        {tr.status}
                      </div>
                    </td>
                    <td className="link">
                      <Link to={`/dashboard/customers/${tr.id}`} state={tr}>
                        <div className="link">
                          <HiDotsVertical />
                        </div>
                      </Link>
                    </td>
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
