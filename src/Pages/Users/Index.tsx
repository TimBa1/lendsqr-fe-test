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
import { Link } from "react-router-dom";
import Modal from "../../Component/Modal/Index";
import dots from '../../Assets/ic-more-vert-18px.svg'
import { LiaEyeSolid } from "react-icons/lia";
import active from '../../Assets/np_user_2995993_000000 1.svg'
import inactive from '../../Assets/np_delete-friend_3248001_000000 1.svg'



function Users() {
  const [load, setLoad] = useState(false);
  const [list, setList] = useState<any>({});
  const [filterState, setFilterState] = useState<any[]>(list);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [fu, setFu] = useState(filterState);

  //Filters
  const [organization, setOrganization] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [triggerFilter, setTriggerFilter] = useState(false);

  // FETCH USERS
  const getUsers = async () => {
    setLoad(true);
    try {
      const res = await axios.get(
        "https://api.json-generator.com/templates/0Zzyy3IZxGas/data?delay=5",
        { headers: authHeader() }
      );
      if (res) {
        setList(res.data);
      }
    } catch (err) {
      toast.error("Error in fetching Data");
      setLoad(false);
    }
  };

  // to fetch all data
  useEffect(() => {
    window.scrollTo(0, 0);
    getUsers();
  }, []);

  //UseEffect for Pagination

  useEffect(() => {
    if (filterState.length > 0) {
      // Get current pages
      const indexOfLastItem = page * limit;
      const indexOfFirstItem = indexOfLastItem - limit;
      const currentItems = filterState.slice(indexOfFirstItem, indexOfLastItem);
      setFu(currentItems);
      setLoad(false);
    }
  }, [triggerFilter, list, page, limit, filterState]);

  const handleFilter = () => {
    setTriggerFilter(!triggerFilter);
  };

  // FILTER USER BY FIELDS

  useEffect(() => {
    const filteredList = Array.isArray(list)
      ? list.filter(
          (item: any) =>
            (!status || item.status === status) &&
            (!username ||
              item.username.toLowerCase().includes(username.toLowerCase())) &&
            (!phone ||
              (item.profile.phone &&
                item.profile.phone.toString().includes(phone))) &&
            (!organization || item.profile.company === organization) &&
            (!email ||
              item.email.toLowerCase().includes(email.toLowerCase())) &&
            (!date ||
              (item.createdAt && item.createdAt.toString().includes(date)))
        )
      : [];

    setFilterState(filteredList);
  }, [triggerFilter, list]);

  const reset = () => {
    setOrganization("");
    setDate("");
    setPhone("");
    setEmail("");
    setStatus("");
    setUsername("");
  };

  //STATUS COLOR
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

  // Change page
  const paginate = (page: number) => setPage(page);

  return (
    <div className="users">
      <div className="title">Users</div>
      <div className="box">
        <div className="box-container">
          <img src={icon1} alt="icon" />
          <h3>{"Users"}</h3>
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
                  OrganiZation{" "}
                  <span
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <img src={filter} alt="filter" />
                  </span>
                  <div></div>
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
                  Phone Number{" "}
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

            {!load && fu?.length > 0 ? (
              <tbody>
                {fu.map((tr: any, i: number) => (
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
                      <div>
                        <div className="link">
                          <div className="dropdown">
                            <div className="dropbtn">
                              <img src={dots} alt='dots'/>
                            </div>
                            <div className="dropdown-content">
                              <Link to={`/dashboard/customers/${tr.id}`} state={tr}><span className="img" ><LiaEyeSolid /></span>{'    '}View Details</Link>
                              <Link to="#"><img className="img"  src={inactive} alt='dots'/>{'    '}Blacklist User</Link>
                              <Link to="#"><img className="img" src={active} alt='dots'/>{'    '}Activate User</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              !load && (
                <div className="bot">
                  <h2>No Data Found</h2>
                </div>
              )
            )}
          </table>
        </div>

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
            reset={() => {
              reset();
              handleFilter();
              setIsOpen(false);
            }}
            org={filterState}
          />
        )}
      </div>
      {!load && (
        <Paginate
          itemsPerPage={limit}
          totalItems={filterState?.length}
          paginate={paginate}
          currentPage={page}
          changeLimit={(p: string) => setLimit(Number(p))}
          onSelect={(p: number) => setPage(Number(p))}
          onNext={(p: number) => setPage(p)}
          onPrev={(p: number) => setPage(p)}
        />
      )}
      {load && <LoadTable />}

      <div className="modal-head"></div>
    </div>
  );
}

export default Users;
