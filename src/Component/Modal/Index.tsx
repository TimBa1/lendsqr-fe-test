import React from "react";

interface props {
  organization: string;
  setOrganization: (arg: any) => void;
  username: string;
  setUsername: (arg: string) => void;
  email: string;
  setEmail: (arg: string) => void;
  date: string;
  setDate: (arg: string) => void;
  phone: string;
  setPhone: (arg: string) => void;
  status: string;
  setStatus: (arg: string) => void;
  filter: () => void;
  reset: () => void;
  org: any;
}

function Modal({
  organization,
  setOrganization,
  username,
  setUsername,
  email,
  setEmail,
  date,
  setDate,
  phone,
  setPhone,
  status,
  setStatus,
  filter,
  reset,
  org,
}: props) {
  return (
    <div className="modal-filter">
      <div>
        <label>Username</label>
        <select
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
        >
          <option value={""}>Select</option>
          {org &&
            Array.isArray(org) &&
            org.map((op, i) => (
              <option value={op.profile.company} key={i + 1}>
                {op.profile.company}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Select</option>
          <option value="Active">Active</option>
          <option value="Blacklisted">Blacklisted</option>
          <option value="Pending">Pending</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="buttons">
        <button onClick={reset} className="reset">
          Reset
        </button>
        <button onClick={filter} className="filter">
          Filter
        </button>
      </div>
    </div>
  );
}

export default Modal;
